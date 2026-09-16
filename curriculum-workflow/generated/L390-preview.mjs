// Local QA fixture only; never writes shipping curriculum or app source.
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {execFileSync} from 'node:child_process';
const root=process.cwd();
const {createServer}=await import(pathToFileURL(path.join(root,'node_modules/vite/dist/node/index.js')));
const react=(await import(pathToFileURL(path.join(root,'node_modules/@vitejs/plugin-react/dist/index.js')))).default;
const curriculum=JSON.parse(execFileSync('git',['show','origin/main:src/curriculum/sample-lessons.json'],{encoding:'utf8',maxBuffer:32000000}));
// Provisional metadata from approved handoff, only to show correct zhuyin in QA.
for(const [order,char,z] of [[385,'字','ㄗˋ'],[386,'名','ㄇㄧㄥˊ'],[387,'第','ㄉㄧˋ'],[388,'念','ㄋㄧㄢˋ'],[389,'號','ㄏㄠˋ']])curriculum.lessons.push({id:'L'+order,order,title:char,newChars:[char],zhuyin:{[char]:z},requiredRounds:5,sentences:[]});
curriculum.lessons.push(JSON.parse(fs.readFileSync('curriculum-workflow/drafts/L390-draft.json','utf8')));
const preview={name:'l390-local-preview',enforce:'pre',load(id){if(id.replaceAll('\\','/').endsWith('/src/curriculum/sample-lessons.json'))return JSON.stringify(curriculum);},transform(code,id){if(!id.replaceAll('\\','/').endsWith('/src/App.tsx'))return;return code.replace('const [freeBrowse, setFreeBrowse] = useState(false)','const [freeBrowse, setFreeBrowse] = useState(true)').replace('useState(initialProgress?.selectedOrder ?? nextOrder)','useState(390)').replace('const [lessonOpen, setLessonOpen] = useState(false)','const [lessonOpen, setLessonOpen] = useState(true)').replace('const initialDefaultStage = isReview ? 3 : 1','const initialDefaultStage = 1');}};
const server=await createServer({root,configFile:false,base:'/character-recognition-dojo/',plugins:[preview,react()],server:{host:'127.0.0.1',port:5175,strictPort:true}});await server.listen();server.printUrls();