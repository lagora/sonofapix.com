var sonofapix = {
  // "head": {
  //   "link": [
  //     {"type": "text/css","rel": "stylesheet","href": "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css"},
  //     {"type": "text/css","rel": "stylesheet","href": "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/css/bootstrap.min.css"}
  //   ],
  //   "script": [
  //     {"type": "text/javascript", "src": "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"},
  //     {"type": "text/javascript", "src": "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js"}
  //   ]
  // },
  "links": {
    "mail": {"icon": "fa fa-envelope", "href": "mailto:lagora@sonofapix.com"},
    "twitter": {"icon": "fa fa-twitter", "href": "http://www.twitter.com/sonofapix"},
    "tumblr": {"icon": "fa fa-tumblr", "href": "http://sonofapix.tumblr.com/sonofapix"}
  },
  "projects": {},
  "init": function () {
    console.log('init');
    Object.keys(sonofapix.links).map(function (each_link) {
      var link_icon = document.createElement('i');
      link_icon.classList = sonofapix.links[each_link].icon;
      
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

// Object.keys(sonofapix.head).map(function (head_element) {
//   sonofapix.head[head_element].map(function (each_element) {
//     var element = document.createElement(head_element);
//     Object.keys(each_element).map(function (element_attribute) {
//       element[element_attribute] = each_element[element_attribute];
//     });
//     document.head.appendChild(element);
//   });
// });
