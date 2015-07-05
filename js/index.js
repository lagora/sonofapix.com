$.ajax({
    url: '/blog/last',
})
.done(function (post) {
      post.content = post.content.split(/[.!?]/gi).map(function (a) {
        return a.slice(0, 1).toUpperCase()+a.slice(1);
      });
      post.file = post.file.slice(0, 1).toUpperCase()+post.file.slice(1);
      var tmp = [
        '<div class="blog-post">',
        '<h2>'+post.file.replace(/[_]|.md/gi, ' ')+'</h2>',
        '<h4>'+moment.unix(post.datetime).format('YYYY-MM-DD HH:mm')+'</h4>',
        '<h3>'+post.content+'</h3>',
        '<small>'+post.tags.split(',').map(function (tag) {
          return '<a class="blog-tag" href="/blog/tag/'+tag+'">#'+tag+'</a>';
        }).join('&nbsp;&nbsp;&nbsp;')+'</small>',
        '</div>'
      ].join('');
      $('.blog-posts').html(tmp);
});

$.ajax({
  url: '/games'
})
.done(function (games) {
  console.log(games);
  games.map(function (game) {
    var img = '<img src="'+(game.img ? 'img/'+game.img:'holder.js/100%x54/text:'+(project|title|'?'))+'"/>';
    var project = undefined === game.img && game.project ? '<h2 class="game-name">project '+game.project+'</h2>':undefined;
    var title = undefined === project && game.title ? '<h2>'+game.title+'</h2>':'';
    var legend = game.legend ? '<p class="game-legend">'+game.legend+'</p>':undefined;
    var status = game.status ? '<h3>status : '+game.status+'</h3>':undefined;
    var credits = game.credits ? '<div><small>'+game.credits+'</small></div>':undefined;
    var tmp = [
      '<div class="game pure-u-1-3">',
        '<div class="game-img">',
          img,
        '</div>',
        project, title,
        status,
        legend,
        credits,
      '</div>'
    ].join('');
    $('.games-list').append(tmp);
  });
});
