// Preserve quiet fragment onsets; same mono AAC 44.1kHz/96k loudness target without leading silence removal.
const cp=require('child_process'),fs=require('fs'),ff=require('@ffmpeg-installer/ffmpeg').path;
const id=process.argv[2];if(!/^R04[78]-G02-(prefix|suffix)$/.test(id))throw Error('Owned G02 only');
const unit=id.slice(0,4),src='curriculum-workflow/audio-inbox/'+unit+'/'+id+'.mp3',dst='public/assets/reviews/'+unit+'/audio/'+id+'.m4a';
cp.execFileSync(ff,['-y','-i',src,'-af','loudnorm=I=-18:TP=-2:LRA=7','-ac','1','-ar','44100','-c:a','aac','-b:a','96k','-movflags','+faststart',dst],{stdio:'ignore'});
const v=cp.spawnSync(ff,['-hide_banner','-i',dst,'-af','volumedetect','-f','null','-'],{encoding:'utf8'});if(v.status)throw Error('decode');const mean=Number(v.stderr.match(/mean_volume:\s*(-?[\d.]+)/)[1]);if(mean < -28){const tmp=dst+'.tmp.m4a';cp.execFileSync(ff,['-y','-i',dst,'-af','volume='+(-19-mean).toFixed(1)+'dB,alimiter=limit=0.794:level=false','-ac','1','-ar','44100','-c:a','aac','-b:a','96k','-movflags','+faststart',tmp],{stdio:'ignore'});fs.copyFileSync(tmp,dst);fs.unlinkSync(tmp);}console.log(id+' processed without onset trimming');
