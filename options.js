function save_options() {
   chrome.storage.sync.get({
     usernames: [],
   }, function(items) {
      let username = document.getElementById('username').value;
      document.getElementById('username').value = '';
      items.usernames.push(username);
      let nouveauDiv = document.createElement("li");
      nouveauDiv.innerHTML = '<a href="#" class="delete" data-username="'+ username +'">x</a> ' + username;
      document.getElementById("usernames").prepend(nouveauDiv);
      chrome.storage.sync.set({
        usernames: items.usernames
      }, function() {
         console.log('Ok!')
      });
      Array.from(document.getElementsByClassName("delete")).forEach(function(element) {
         element.addEventListener('click', deleteUser);
      });
   });
}

function deleteUser(e) {
   var element = e.target;
   var user = e.target.getAttribute('data-username');
   chrome.storage.sync.get({
     usernames: [],
   }, function(items) {
      for (var i = 0; i < items.usernames.length; i++) {
         if (items.usernames[i] == user) {
            items.usernames.splice(i, 1);
            e.target.parentElement.remove();
            chrome.storage.sync.set({
              usernames: items.usernames
            }, function() {
               console.log('Ok!')
            });
         }
      }
   });
}

function restore_options() {
   chrome.storage.sync.get({
     usernames: [],
   }, function(items) {
      var usernames = items.usernames;
      for (var i = 0; i < items.usernames.length; i++) {
         let nouveauDiv = document.createElement("li")
         nouveauDiv.innerHTML = '<a href="#" class="delete" data-username="'+ items.usernames[i] +'">x</a> ' + items.usernames[i];
         document.getElementById("usernames").prepend(nouveauDiv);
      }
      Array.from(document.getElementsByClassName("delete")).forEach(function(element) {
         element.addEventListener('click', deleteUser);
      });
   });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
