converter = new showdown.Converter();
document.body.innerHTML = converter.makeHtml(document.body.innerText);

link = document.createElement('link');
link.rel = 'stylesheet';
link.href = chrome.extension.getURL('theme.css');
document.head.append(link);

link = document.createElement('link');
link.rel = 'stylesheet';
link.href = chrome.extension.getURL('github.min.css');
document.head.append(link);

hljs.initHighlighting();
