var messages = document.getElementsByClassName('message-text');

   function filter() {
      var messages = document.getElementsByClassName('message-text');
      for (var i = 0, l = messages.length; i < l; i++) {
         if (messages[i] && messages[i].innerHTML) {
            if (
               messages[i].innerHTML.indexOf('blammas') !== -1 ||
               messages[i].innerHTML.indexOf('etherisreal') !== -1 ||
               messages[i].innerHTML.indexOf('ram123') !== -1 ||
               messages[i].innerHTML.indexOf('imab1') !== -1 ||
               messages[i].innerHTML.indexOf('TheWanderer') !== -1 ||
               messages[i].innerHTML.indexOf('nehanino') !== -1 ||
               messages[i].innerHTML.indexOf('BanaanBakje') !== -1 ||
               messages[i].innerHTML.indexOf('bryan') !== -1
            )

               messages[i].remove();
            }
         }
      setTimeout(function() { filter() }, 1500);
   }

filter();
