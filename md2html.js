showdown.setOption('requireSpaceBeforeHeadingText', true);
showdown.setOption('tables', true);
converter = new showdown.Converter({
    extensions: [
        'emoji'
    ]
});
if (!document.doctype) {
    document.write('<!doctype HTML>\n' + document.head.outerHTML + document.body.outerHTML);
}
document.body.innerHTML = converter.makeHtml(document.body.innerText);

// set page title from first <h1> content
h1Elements = document.body.getElementsByTagName('h1');
if(h1Elements.length>0) {
    title = document.createElement('title');
    title.innerText = h1Elements[0].innerText;
    document.head.append(title)
}

link = document.createElement('link');
link.rel = 'stylesheet';
link.href = chrome.extension.getURL('theme.css');
document.head.append(link);

link = document.createElement('link');
link.rel = 'stylesheet';
link.href = chrome.extension.getURL('atom-one-light.min.css');
document.head.append(link);

hljs.initHighlighting();
