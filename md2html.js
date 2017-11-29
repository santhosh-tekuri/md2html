function addCSS(url) {
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.extension.getURL(url);
    document.head.append(link);
}

addCSS('theme.css');
addCSS('atom-one-light.min.css');

showdown.setOption('requireSpaceBeforeHeadingText', true);
showdown.setOption('tables', true);
converter = new showdown.Converter({
    extensions: [
        'emoji'
    ]
});
document.body.innerHTML = converter.makeHtml(document.body.innerText);

// set page title from first <h1> content
h1Elements = document.body.getElementsByTagName('h1');
if(h1Elements.length>0) {
    title = document.createElement('title');
    title.innerText = h1Elements[0].innerText;
    document.head.append(title)
}

hljs.initHighlighting();
