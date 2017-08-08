script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('MathJax/MathJax.js')+'?config=TeX-AMS-MML_HTMLorMML';
document.body.append(script);
