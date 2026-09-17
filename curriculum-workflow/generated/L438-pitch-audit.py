import json
import pathlib
import subprocess

import librosa
import numpy as np

root = pathlib.Path('curriculum-workflow/ai-outputs/L438')
root.mkdir(parents=True, exist_ok=True)
source = pathlib.Path('public/assets/lessons/L438/audio/char-u7fd2.m4a')
wav = root / 'char-u7fd2.pitch.wav'
subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', str(source), str(wav)], check=True)
samples, sample_rate = librosa.load(wav, sr=22050)
f0, voiced, _ = librosa.pyin(samples, fmin=80, fmax=400, sr=sample_rate, frame_length=1024, hop_length=128)
values = f0[voiced & np.isfinite(f0)]
values = values[values >= 90]
positions = np.linspace(0, len(values) - 1, min(12, len(values))).round().astype(int)
sampled = values[positions]
report = {
    'char-u7fd2': {
        'voicedFrameCount': int(len(values)),
        'sampledHz': np.round(sampled, 1).tolist(),
        'sampledSemitonesFromStart': np.round(12 * np.log2(sampled / sampled[0]), 1).tolist(),
        'review': 'expected rising second-tone contour',
    }
}
wav.unlink()
pathlib.Path('curriculum-workflow/generated/L438-pitch-audit.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps(report, ensure_ascii=False, indent=2))
