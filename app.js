var app = (function() {
  // private members
  title = "Structure Javascript";

  displayTitle = function() {
    alert(this.title);
  };

  displaySite = function() {
    alert("site info ...");
  };

  getUsers = function() {
    dataService
      .getUsers()
      .done(function(data) {
        console.log(data);
      })
      .fail(function(e) {
        console.log("error", e);
      });
  };

  createUser = function(userObj) {
    dataService
      .createUser(userObj)
      .done(function(data) {
        console.log(data);
      })
      .fail(function(e) {
        console.log("error", e);
      });
  };

  // public api
  return {
    title,
    displayTitle,
    getUsers,
    createUser
  };
})();
