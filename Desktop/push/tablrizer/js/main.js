var data = [
  {
    login: "mojombo",
    id: 1,
    gravatar_id: "",
    url: "https://api.github.com/users/mojombo",
    type: "User",
    site_admin: false
  },
  {
    login: "defunkt",
    id: 2,
    gravatar_id: "",
    url: "https://api.github.com/users/defunkt",
    type: "User",
    site_admin: true
  },
  {
    login: "pjhyett",
    id: 3,
    gravatar_id: "",
    url: "https://api.github.com/users/pjhyett",
    type: "User",
    site_admin: true
  },
  {
    login: "wycats",
    id: 4,
    gravatar_id: "",
    url: "https://api.github.com/users/wycats",
    type: "User",
    site_admin: false
  }
];





//any number of objects of any number of things will work with this for tabling objects.
//a plugin is a fancy name for an external/published function that can be included in
//and called by a javascript file. so set up this code as a function

$(document).ready(function() {
  $(".container").tableizer({data: data, search:true});

});
