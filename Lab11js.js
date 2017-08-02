$(function() {

  var url = 'https://www.reddit.com/r/aww/.json';
  $.get(url).done(function(responseBody) {
    //console.log(responseBody.data.children[1].data.thumbnail);

    responseBody.data.children.forEach(function(post) {
      var $post = $('<section class = "post">');
      var $title = $('<h3>').text(post.data.title);
      $post.append($title);
      //var $img = $("https//b.thumbs.redditmedia.com/uLeXsGVPV61prjKBILaaHGXnGzQgcCNpKoN4q03z50M.jpg").attr('src')
      //$("<img>").attr("src", 'https//b.thumbs.redditmedia.com/uLeXsGVPV61prjKBILaaHGXnGzQgcCNpKoN4q03z50M.jpg');
      // create a thumbnail img element and add it to the post section
      //var $thumbnail = $('<section class ="post">').text(post.data.thumbnail);
      //$post.append($thumbnail);
      var $thumbnail = $('<section class="post">').text(post.data.thumbnail);
      $("<img /> ").attr("src",post.data.thumbnail).appendTo($post);

      //var $img = $(<img src = "https://b.thumbs.redditmedia.com/fzd0aW3AC5zDGvFG59Y9nuimnIrfC_5sHP1wpUXYQ5k.jpg"/>
      //$<img src = "https://b.thumbs.redditmedia.com/fzd0aW3AC5zDGvFG59Y9nuimnIrfC_5sHP1wpUXYQ5k.jpg"/>;
      //$("<img>").attr("src", "https://b.thumbs.redditmedia.com/fzd0aW3AC5zDGvFG59Y9nuimnIrfC_5sHP1wpUXYQ5k.jpg");
      //$post.append($thumbnail);
      $("#main").append($post);
    });




  });




//$.get(url).done(function(responseBody) {
  //console.log(responseBody.data.children[0].data.subreddit);
//})//



});
