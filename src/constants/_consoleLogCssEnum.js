/*
 run in console for website:
 https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
 */

parts =  document.querySelector('#wikiArticle pre code').innerHTML.split('<span').map(item => {
    const index = item.indexOf('</span>');
    return item.substr(index + 7).replace(/\r\n/gi, '').trim();
}).filter(a=>(a&&a.indexOf('>') < 0));


theJSON = parts.reduce((output, value) => {
    output[value] = value;
    return output;
}, {})

console.log(JSON.stringify(theJSON));