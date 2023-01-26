// var container = $('#site-content')
var results = $('#results')


$("#buttonsearch").click(function () {
    redditsearch();
});

$("#query").keypress(function (e) {
    if (e.which == 13) {
        e.preventDefault();
        redditsearch();
    }
});


function redditsearch() {
    var query = $("#query").val();
    var type = document.getElementById('typeselect');
    var time = $('input[name="time"]:checked').val();
    var val = type.options[type.selectedIndex].value;
    $("#results").html("");

    $.getJSON("http://www.reddit.com/search.json?q=" + query + "&sort=" + val + "&t=" + time, function (data) {

        var i = 0
        $.each(data.data.children, function (i, item) {
            var title = item.data.title
            var url = item.data.url
            var id = item.data.id
            var sub = item.data.subreddit
            var selftext = item.data.selftext

            //check for imgur or youtube
            if (selftext == "") {
                if (url.indexOf("reddit") >= 0) {
                    selftext = ''
                }
                else if (url.indexOf("imgur.com/a") >= 0) {
                    selftext = '<a href="' + url + '" target="_blank">Click for album</a>'
                }
                else if (url.indexOf("imgur") >= 0) {
                    selftext = '<a href="' + url + '" target="_blank"><img src="' + url + '.jpg" height="30%" width="30%"></img></a>'
                }
                else if (url.indexOf("gif") >= 0) {
                    selftext = '<a href="' + url + '" target="_blank"><img src="' + url + '" height="30%" width="30%"></img></a>'
                }
                else if (url.indexOf("jpg") >= 0) {
                    selftext = '<a href="' + url + '" target="_blank"><img src="' + url + '" height="30%" width="30%"></img></a>'
                }
                if (url.indexOf("youtu") >= 0) {
                    selftext = '<a href="' + url + '" target="_blank">Youtube Video</a>'
                }

            }

            var selftextpost = '<p style="display: none">' + selftext + '</p><hr size="1" width ="98%" noshade>'
            var post = '<div>' + '<a href="' + url + '" target="_blank">' + title + '</a>' + '</div>'

            results.append(post)

            $.getJSON("http://www.reddit.com/r/" + sub + "/comments/" + id + ".json?&limit=5", function (data) {
                $.each(data[1].data.children, function (i, item) {
                    var comment = item.data.body
                    var author = item.data.author
                    var postcomment = '<p>[Author]' + author + '<br>' + comment + '</p>'
                    results.append(postcomment)
                });
            });


            var showhide = $('<input type="button" id="hider" value="Show"></input>');
            results.append(showhide);
            $(showhide).click(function () {

                if ($(this).val() == 'Hide') {
                    $(this).val('Show');
                } else {
                    $(this).val('Hide');
                }
                $(this).next().toggle();
            });
            results.append(selftextpost)

            i++
        });
    });
};


// const dropdown = document.querySelector(".post-type");
// const container = document.querySelector(".post-container");

// const renderPosts = (postType) => {
//     // Our proxy that makes cross origin fetching possible
//     const proxy = "https://cors-anywhere.herokuapp.com/";

//     fetch(`${proxy}https://old.reddit.com/r/AskReddit/${postType}.json`)
//         .then(function (res) {
//             // Return the response in JSON format
//             return res.json();
//         })
//         .then(function (res) {
//             // We render our posts to the UI in this block
//             let currPost, markup = ``;

//             // The array that contains our posts
//             const postsArr = res.data.children;

//             // Add a title based on post type
//             markup = `<h3>${postType} posts from r/AskReddit</h3>`;

//             // Iterate through our posts array and chain
//             // the markup based on our HTML structure
//             for (let i = 0; i < postsArr.length; i++) {
//                 currPost = postsArr[i].data; // a single post object
//                 markup += `
//           <a class="post" href="https://www.reddit.com/${currPost.permalink}">
//             <div class="title"> ${currPost.title} </div>
//             <div class="content"> 
//               ${currPost.selftext} 
//               </br></br>
//               <span>${currPost.url}</span>
//             </div>
//             <div class="author"> Posted by ${currPost.author} </div>
//           </a>`;
//             }
//             // Insert the markup HTML to our container
//             container.insertAdjacentHTML('afterbegin', markup);
//         })
//         .catch(function (err) {
//             console.log(err); // Log error if any
//         });
// };


// dropdown.addEventListener("change", () => {
//     // Gets the currently selected option index
//     let index = dropdown.selectedIndex;
//     // Gets the currently selected option value
//     let value = dropdown.options[index].value;

//     renderPosts(value);
// });

// // Load hot posts on page load
// renderPosts("hot");




// var app = {
//     init: function () {
//         console.log('Running...');
//         if (document.readyState != 'loading') {
//             this.startApp();
//         } else {
//             document.addEventListener('DOMContentLoaded', this.startApp);
//         }
//     },

//     //fetch helpers
//     status: function (response) {
//         if (response.status >= 200 && response.status < 300) {
//             return Promise.resolve(response)
//         } else {
//             return Promise.reject(new Error(response.statusText))
//         }
//     },
//     json: function (response) {
//         return response.json()
//     },

//     //Main
//     startApp: function () {
//         //Get Feed
//         console.log('Fetching feed...');
//         fetch('https://old.reddit.com/r/AskReddit/.json')
//             .then(app.status)
//             .then(app.json)
//             .then(app.getCommentsFromJSON)
//             .then(app.addCommentstoHTML)
//             .catch(function (error) {
//                 console.log('request failed', error.message)
//             });
//     },

//     //Drop the text into the HTML
//     addCommentstoHTML: function (text) {
//         console.log('Printing...');
//         var comments = document.querySelector('.reddit-dump');
//         comments.innerHTML = text;
//     },

//     getCommentsFromJSON: function (json) {
//         console.log('Finding comments...');
//         var text = app.getCommentsFromArray(json[1].data.children);

//         return text;
//     },

//     //Recursively go through the object tree and compile all the comments
//     getCommentsFromArray: function (arr) {
//         var text = '';

//         arr.forEach(function (item) {
//             if (typeof item !== 'undefined') {
//                 text += item.data.body;

//                 if (typeof item.data.replies !== 'undefined' && item.data.replies !== '') {
//                     text += app.getCommentsFromArray(item.data.replies.data.children);
//                 }
//             }
//         });

//         return text;
//     }
// };

// app.init();


