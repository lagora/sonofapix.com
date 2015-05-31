var sonofapix = {
  "links": {
    "mail": {"icon": "fa-envelope", "href": "mailto:lagora@sonofapix.com"},
    "twitter": {"icon": "fa-twitter", "href": "http://www.twitter.com/sonofapix"},
    "tumblr": {"icon": "fa-tumblr", "href": "http://sonofapix.tumblr.com/sonofapix"},
    "instagram": {"icon": "fa-instagram", "href": "https://instagram.com/sonofapix"},
  },
  "projects": {},
  "init": function () {
    console.log('init');
    Object.keys(sonofapix.links)
    .filter(function (each_link) {
      return 'instagram' !== each_link;
    })
    .map(function (each_link) {

      var link_icon = document.createElement('i');
      link_icon.classList = 'fa ' + sonofapix.links[each_link].icon;

      var link_a = document.createElement('a');
      link_a.href = sonofapix.links[each_link].href;
      link_a.target = "_blank";

      var link_div = document.createElement('div');
      link_div.classList = "col-xs-1";
      console.log(link_icon, link_a, link_div);

      link_a.appendChild(link_icon);
      link_div.appendChild(link_a);

      document.getElementById('links').appendChild(link_div);
    });
  }
};
