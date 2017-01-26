/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// function goodtweet(tweet) {
//     if(tweet) {
//         console.log('empty tweet')
//         return "empty";
//     } else if (tweet.lenght > 140) {
//         console.log("too many characters")
//         return "too long";
//     } else {
//         return 0;
//     }
// }


$(function() {
  $('#submitTweet').on('click', function(event) {
    event.preventDefault();
    $userinput = $("textarea").val();
    if(!($userinput)) {
        alert("empty tweet");
   }else if ($userinput.length > 140) {
        alert("Too many characters")
    } else {
     $tweet = $("textarea").serialize();
     $.ajax({
       url: '/tweets',
       data: $tweet,
       method: 'POST',
       success: function (tweet) {
         loadTweets();
       }

     });
    }
    });

  $('#compose').on('click', function() {
    $(".new-tweet").slideToggle("slow");
    $("textarea").focus()
  });




  var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
  ];




  function createTweetElement(data) {
    var newTweet = $("#tweet-boxes");
    var tweet = $('<article>', {class: "tweet"});
    var header = $("<header>");
    var avatar = $("<img>", {class: "userimg", src: data.user['avatars'].small});
    var userName = $("<h3>", {class: "user-name", text: data.user['name']});
    var handle = $("<p>", {class: "handle", text: data.user['handle']});
    var content = $("<div>", {class: "tweet-content", text: data.content['text']});
    var footer = $('<footer>');
    var items = $("<div>", {class: "item"});
    var icon1 = $("<i>", {class: "fa fa-flag"});
    var icon2 = $("<i>", {class: "fa fa-retweet"});
    var icon3 = $("<i>", {class: "fa fa-heart"});
    var daysAgo = $("<p>", {class: "date", text: data['created_at']});


    header.append(avatar, userName, handle);
    items.append(icon1, icon2, icon3);
    footer.append(items, daysAgo);
    tweet.append(header);
    tweet.append(content);
    tweet.append(footer);
    newTweet.prepend(tweet);
  }

  // var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)



  function renderTweets(tweets) {
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      tweets.forEach(function(item) {
        createTweetElement(item);
      });

  }

  // renderTweets(data);

  function loadTweets() {
    $.ajax({
          url: '/tweets',
          method: 'GET',
          success: function (tweets) {
            renderTweets(tweets);
          }
        })
    }
    loadTweets();


});

