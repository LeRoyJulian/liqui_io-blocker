function checker(value) {
   var muted = [
      'blammas',
      'etherisreal',
      'ram123',
      'imab1',
      'TheWanderer',
      'nehanino',
      'BanaanBakje',
      'bryan',
      'bobfish',
      'toomuchfun',
      'etherisreaI',
      'kosarkas',
      'ChronoTr',
      'thefuturist133',
      'offermann515',
      'WowlookatZRXarbthat',
      'eggwagon'
   ];
  for (var i = 0; i < muted.length; i++) {
    if (value.indexOf(muted[i]) !== -1) {
      return true;
    }
  }
  return false;
}

function filter() {
   var messages = document.getElementsByClassName('message-text');
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
