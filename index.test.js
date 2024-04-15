const jsdom=require('jsdom');
// load index.html file
const {JSDOM}=jsdom;
const fs=require('fs');
const path=require('path');
const html=fs.readFileSync(path.resolve(__dirname,'../index.html'),'utf8');
test('h1 content',()=>{
    const dom=new JSDOM(html);
    const h1=dom.window.document.querySelector('h1');
    expect(h1.innerHTML).toBe('Hello World');
});