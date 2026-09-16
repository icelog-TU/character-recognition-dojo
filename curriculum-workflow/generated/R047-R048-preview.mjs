// Local QA fixture: no shipping curriculum/app changes.
import fs from 'node:fs';import path from 'node:path';import {pathToFileURL} from 'node:url';
const root=process.cwd(),unit=process.argv[2]||'R048';if(!['R047','R048'].includes(unit))throw Error('Owned review only');
const {createServer}=await import(pathToFileURL(path.join(root,'node_modules/vite/dist/node/index.js')));
const react=(await import(pathToFileURL(path.join(root,'node_modules/@vitejs/plugin-react/dist/index.js')))).default;
const curriculum=JSON.parse(fs.readFileSync('src/curriculum/sample-lessons.json','utf8'));
curriculum.lessons.push({id:'L390',order:390,title:'數',newChars:['數'],zhuyin:{數:'ㄕㄨˋ'},requiredRounds:5,sentences:[]});
for(const id of ['R047','R048'])curriculum.reviewLessons.push(JSON.parse(fs.readFileSync('curriculum-workflow/drafts/'+id+'-draft.json','utf8')));
const preview={name:'review-pair-qa',enforce:'pre',load(id){if(id.replaceAll('\\','/').endsWith('/src/curriculum/sample-lessons.json'))return JSON.stringify(curriculum);},transform(code,id){if(!id.replaceAll('\\','/').endsWith('/src/App.tsx'))return;return code.replace('const [freeBrowse, setFreeBrowse] = useState(false)','const [freeBrowse, setFreeBrowse] = useState(true)').replace('const [activeReviewId, setActiveReviewId] = useState<string | null>(null)','const [activeReviewId, setActiveReviewId] = useState<string | null>("'+unit+'")').replace('const [lessonOpen, setLessonOpen] = useState(false)','const [lessonOpen, setLessonOpen] = useState(true)');}};
const server=await createServer({root,configFile:false,base:'/character-recognition-dojo/',plugins:[preview,react()],server:{host:'127.0.0.1',port:5175,strictPort:true}});await server.listen();server.printUrls();
