
   function filter() {
      var messages = document.getElementsByClassName('message-text');
      for (var i = 0, l = messages.length; i < l; i++) {
         if (messages[i].innerHTML.indexOf('blammas') !== -1 || messages[i].innerHTML.indexOf('etherisreal') !== -1 )
            messages[i].remove();
            console.log('Blammas STFU!')
      }
      setTimeout(function() { filter() }, 5000);
   }

filter();
