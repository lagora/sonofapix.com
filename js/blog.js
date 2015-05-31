var blogPosts = new List('blog', {
    valueNames: ['blog-post'],
    page: 1,
    i: window.posts.length-1,
    plugins: [ ListPagination({})],
    item: '<li><p><span class="datetime"></span><br><small class="tags hidden"></small></p><p><small class="content"></small></p></li>'
});

window.posts.map(function (post) {
    $.ajax({
        url: 'blog/' + post.file
    })
    .done(function (content) {
        if (!isNaN(post.datetime)) {
            post.datetime =  moment.unix(post.datetime).format('YYYY-MM-DD HH:mm');
        }

        content = content.split('.').map(function (a) {
            var b = a.trim();
            b = b.substring(0,1).toUpperCase()+b.substring(1);
            return b;
        }).join('. ');

        post.content = marked(content);
        var opts = {
            datetime: post.datetime,
            content: post.content
        };

        if (post.tags) {
            opts.tags = post.tags.split(',').map(function(a){return '<a>'+a.trim()+'</a>'});
        }
        blogPosts.add(opts);
    });
});
