const jsdom=require('jsdom');
// load index.html file
const {JSDOM}=jsdom;
const fs=require('fs');
const path=require('path');
const html=fs.readFileSync(path.resolve('./index.html'),'utf8');

// content of meta with name description
test('check meta with name description', () => {
    const dom = new JSDOM(html);
    const meta = dom.window.document.querySelector('meta[name="description"]');
    expect(meta.getAttribute('content')).toBe('Caeyla\'s Portfolio');
});

test('check meta with name keywords', () => {   
    function containsAnyKeyword(str, keywords) {
        return keywords.some(keyword => str.includes(keyword));
    }
    const dom = new JSDOM(html);
    const meta = dom.window.document.querySelector('meta[name="keywords"]');
    expect(containsAnyKeyword(meta.getAttribute('content'),['Caeyla', 'Portfolio', 'Web Developer','Full stack Developer','Back end Developer','Java','Javascript','Python','PHP','Spring Boot','Laravel','NodeJs','React'])).toBe(true);
});

test('check title ', () => {
    const dom = new JSDOM(html);
    const title = dom.window.document.querySelector('title');
    expect(title.innerHTML).toBe('Caeyla Ranaivoson - Full stack developer');
});

test('check h1 content',()=>{
    const dom=new JSDOM(html);
    const h1=dom.window.document.querySelector('h1');
    expect(h1.innerHTML).toBe('Portfolio Loading...');
});
