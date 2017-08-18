function filter() {
  var messages = document.getElementsByClassName('message-text');
    for (var i = 0; i < messages.length; i++) {
      if (messages[i] && messages[i].innerHTML) {
        var message = messages[i].getElementsByTagName('a');
        for (var j = 0; j < message.length; j++) {
          if (
            message[j].innerHTML.indexOf('blammas') !== -1 ||
            message[j].innerHTML.indexOf('etherisreal') !== -1 ||
            message[j].innerHTML.indexOf('ram123') !== -1 ||
            message[j].innerHTML.indexOf('imab1') !== -1 ||
            message[j].innerHTML.indexOf('TheWanderer') !== -1 ||
            message[j].innerHTML.indexOf('nehanino') !== -1 ||
            message[j].innerHTML.indexOf('BanaanBakje') !== -1 ||
            message[j].innerHTML.indexOf('bryan') !== -1
          )
            messages[i].remove();
          }
        }
      }
    setTimeout(function() { filter() }, 1500);
}

filter();