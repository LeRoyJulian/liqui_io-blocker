var muted = [];

chrome.storage.sync.get({
  usernames: [],
}, function(items) {
   muted = items.usernames;
});

function checker(value) {
  for (var i = 0; i < muted.length; i++) {
    if (value.indexOf(muted[i]) !== -1) {
      return true;
    }
  }
  return false;
}

function filter() {
   var messages = document.getElementsByClassName('message-text');
   // var regex = new RegExp("/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/");
   for (var i = 0; i < messages.length; i++) {
      if (messages[i] && messages[i].innerHTML) {
         var message = messages[i].getElementsByTagName('a');
         for (var j = 0; j < message.length; j++) {
            if (checker(message[j].innerHTML)) {
               messages[i].remove();
            }
         }
      }
   }
   setTimeout(function() { filter() }, 1500);
}

filter();
