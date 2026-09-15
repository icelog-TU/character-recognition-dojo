import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {execFileSync} from 'node:child_process';
const root=process.cwd();
const {createServer}=await import(pathToFileURL(path.join(root,'node_modules/vite/dist/node/index.js')));
const react=(await import(pathToFileURL(path.join(root,'node_modules/@vitejs/plugin-react/dist/index.js')))).default;
const curriculum=JSON.parse(execFileSync('git',['show','origin/main:src/curriculum/sample-lessons.json'],{encoding:'utf8',maxBuffer:32*1024*1024}));
// Read provisional predecessor drafts only into this local preview for their zhuyin.
for(let n=370;n<379;n++){const id='L'+n;if(!curriculum.lessons.some(l=>l.id===id)){const prior=JSON.parse(execFileSync('git',['show',`origin/codex/l${n}-complete-package:curriculum-workflow/drafts/${id}-draft.json`],{encoding:'utf8',maxBuffer:2000000}));curriculum.lessons.push(prior);}}
curriculum.lessons.push(JSON.parse(fs.readFileSync('curriculum-workflow/drafts/L379-draft.json','utf8')));
// Local QA launch state only. Media, timing and gameplay implementation remain unchanged.
const preview={name:'l379-local-preview',enforce:'pre',load(id){if(id.replaceAll('\\','/').endsWith('/src/curriculum/sample-lessons.json'))return JSON.stringify(curriculum);},transform(code,id){if(!id.replaceAll('\\','/').endsWith('/src/App.tsx'))return;
return code.replace('const [freeBrowse, setFreeBrowse] = useState(false)','const [freeBrowse, setFreeBrowse] = useState(true)').replace('useState(initialProgress?.selectedOrder ?? nextOrder)','useState(379)').replace('const [lessonOpen, setLessonOpen] = useState(false)','const [lessonOpen, setLessonOpen] = useState(true)').replace('new Set(initialProgress?.completedOrders ?? [])','new Set([379])').replace('const initialDefaultStage = isReview ? 3 : 1','const initialDefaultStage = 1');}};
const server=await createServer({root,configFile:false,base:'/character-recognition-dojo/',plugins:[preview,react()],server:{host:'127.0.0.1',port:5175,strictPort:true}});await server.listen();server.printUrls();
