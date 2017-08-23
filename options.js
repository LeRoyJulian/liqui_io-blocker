function save_options() {
   chrome.storage.sync.get({
     usernames: [],
   }, function(items) {
      let username = document.getElementById('username').value;
      document.getElementById('username').value = '';
      console.log(username);
      items.usernames.push(username);
      console.log();

      let nouveauDiv = document.createElement("li")
      let nouveauContenu = document.createTextNode(username);
      nouveauDiv.appendChild(nouveauContenu);
      document.getElementById("usernames").appendChild(nouveauDiv);
      chrome.storage.sync.set({
        usernames: items.usernames
      }, function() {
         console.log('Ok!')
      });
   });
}

function restore_options() {
   chrome.storage.sync.get({
     usernames: [],
   }, function(items) {
      var usernames = items.usernames;
      console.log(usernames);
      for (var i = 0; i < items.usernames.length; i++) {
         let nouveauDiv = document.createElement("li")
         let nouveauContenu = document.createTextNode(items.usernames[i]);
         nouveauDiv.appendChild(nouveauContenu);
         document.getElementById("usernames").appendChild(nouveauDiv);
      }
   });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
