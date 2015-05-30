var blogPosts = new List('blog', {
    valueNames: ['blog-post'],
    page: 1,
    i: posts.length-1,
    plugins: [ ListPagination({})],
    item: '<li><p><span class="datetime"></span><br><small class="tags hidden"></small></p><p><small class="content"></small></p></li>'
});

console.log(window.posts);

window.posts.map(function (post) {
    $.ajax({
        url: 'blog/' + post.file
    })
    .done(function (content) {
        if (!isNaN(post.datetime)) {
            post.datetime =  moment.unix(post.datetime).format('YYYY-MM-DD HH:mm');
        }

        content = content.split('.').map(function (a) {return a.trim().substring(0,1).toUpperCase()+a.substring(1);}).join('. ');

        post.content = marked(content);
        var opts = {
            datetime: post.datetime,
            content: post.content
        };

        if (post.tags) {
            opts.tags = post.tags.split(',').map(function(a){return '<a>'+a.trim()+'</a>'});
        }
        console.log(opts.tags);

        blogPosts.add(opts);
    });
});
