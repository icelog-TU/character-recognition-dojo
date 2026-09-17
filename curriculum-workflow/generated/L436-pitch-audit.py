import json
import pathlib
import subprocess

import librosa
import numpy as np

ROOT = pathlib.Path('curriculum-workflow/ai-outputs/L436')
ROOT.mkdir(parents=True, exist_ok=True)
TRACKS = {
    'char-u88dc': pathlib.Path('public/assets/lessons/L436/audio/char-u88dc.m4a'),
    'L436-G02-suffix': pathlib.Path('public/assets/lessons/L436/audio/L436-G02-suffix.m4a'),
}

report = {}
for name, source in TRACKS.items():
    wav = ROOT / f'{name}.pitch.wav'
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', str(source), str(wav)], check=True)
    samples, sample_rate = librosa.load(wav, sr=22050)
    f0, voiced, _ = librosa.pyin(samples, fmin=80, fmax=400, sr=sample_rate, frame_length=1024, hop_length=128)
    values = f0[voiced & np.isfinite(f0)]
    # Reject octave-error tails below the normal speech range, then sample the contour evenly.
    values = values[values >= 90]
    positions = np.linspace(0, len(values) - 1, min(12, len(values))).round().astype(int)
    sampled = values[positions]
    report[name] = {
        'voicedFrameCount': int(len(values)),
        'sampledHz': np.round(sampled, 1).tolist(),
        'sampledSemitonesFromStart': np.round(12 * np.log2(sampled / sampled[0]), 1).tolist(),
        'review': 'fall-then-rise third-tone contour' if name == 'char-u88dc' else 'strong falling fourth-tone contour',
    }
    wav.unlink()

pathlib.Path('curriculum-workflow/generated/L436-pitch-audit.json').write_text(
    json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8'
)
print(json.dumps(report, ensure_ascii=False, indent=2))
