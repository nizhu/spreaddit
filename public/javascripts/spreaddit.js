var loadListing = function(path, params){
  params = params || "";
  $.getJSON("http://api.reddit.com"+path+".json?limit=75"+params+"&jsonp=?",
  { format: "json" },
  function(data) {
    $.each(data.data.children, function(i,item){
      $('#content').append('<tr><td>'+
        '<a href="http://'+window.location.host+'/r/'+item.data.subreddit+'">'+item.data.subreddit+'</a></td><td>'+
        item.data.score+'</td><td>'+
        '<a href="http://'+window.location.host+item.data.permalink+'">'+item.data.num_comments+'</td><td>'+
        item.data.over_18+'</td><td>'+
        '<a href="'+item.data.url+'">'+item.data.title+'</td></tr>'
      );
    });
    $('#content').css('display', 'block');
    $('#loadMessage').css('display', 'none');
    if ($('#loadNext').css('display') == 'none'){
      $('#loadNext').css('display','block');
    } 
    $('#loadNext').attr('onClick', 'loadListing("'+path+'", "&after='+data.data.after+'")');
  });
}

var loadComments = function(path){
  console.log("http://api.reddit.com"+path+".json?jsonp=?");
  $.getJSON("http://api.reddit.com"+path+".json?jsonp=?",
    { format: "json" },
    function(data) {
      if (data[0].data.children[0].data.is_self){
        $('#post-title').append(data[0].data.children[0].data.title);
      } else {
        $('#post-title').append('<a href="'+data[0].data.children[0].data.url+'">'+data[0].data.children[0].data.title+'</a>');
      }
      $('#post-selftext').append(data[0].data.children[0].data.selftext);
      if (data[1].data.children){
        $.each(data[1].data.children, function(i,item){
          loadChildren(item, 0);
        });
      }
      $('#loadMessage').css('display', 'none');
    }
  );
};

var loadChildren = function(item, depth){
  $('#comments').append('<tr><td>'+
    item.data.author+'</td><td>'+
    (item.data.ups-item.data.downs)+'</td><td style="padding-left:'+depth+'cm">'+
    item.data.body+'</td></tr>'
  );
  if (item.data.replies && item.data.replies.data && item.data.replies.data.children && item.data.replies){
    $.each(item.data.replies.data.children, function(i, child){
      if (child.data.author) {
        loadChildren(child, (depth+1));
      }
    });
  }
};