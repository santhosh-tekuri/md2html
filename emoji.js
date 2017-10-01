// download images from: https://www.webpagefx.com/tools/emoji-cheat-sheet/graphics/emojis/
// emoji cheatsheet: https://www.webpagefx.com/tools/emoji-cheat-sheet/

showdown.extension("emoji", function() {
  return [{
    type: "lang",
    regex: ":([A-z0-9_-]+):",
    replace: function(original, emojiName) {
      var src = chrome.extension.getURL('emojis/'+emojiName+'.png')
      return `<img src="${src}" alt="${emojiName}" class="emoji" />`;
    }
  }];
});
