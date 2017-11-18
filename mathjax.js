/*
// configuration for mathjax
config = document.createElement('script');
config.type = 'text/x-mathjax-config';
config.textContent =
    "MathJax.Hub.Config({\n" +
    "  tex2jax: { inlineMath: [['$','$'], ['\\\\(','\\\\)']] }\n" +
    "});";
document.body.append(config);
*/

script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('MathJax/MathJax.js')+'?config=TeX-AMS-MML_HTMLorMML';
document.body.append(script);
