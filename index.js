 $(document).ready(function(){
 
 	function randomNumbers(){
 		return Math.floor(Math.random()*10);
 	}

 		$("#newquote").click(function(){
			$.ajax({
				headers:{
					"X-Mashape-Key":"n7DZOL6DmamshrI2x9G4916jaKI0p1zbF2rjsn4OmsfrtfQpo4",
					Accept:"application/json",
					"Content-Type":"application/x-www-form-urlencoded"
				},
			    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10",
			    type: "GET",
			    dataType: 'json',
			    cache: true,
			    success: function (data) {
					var index=randomNumbers();
					$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + data[index].quote + '" ' + data[index].author));
					$('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(data[index].quote)+'&content=' + encodeURIComponent(data[index].author)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
						$(".quote-text").hide().fadeIn("slow").html(data[index].quote);
						$("#author").hide().fadeIn(2000).html(data[index].author);	
			    }
			});
		});



 });
 	// $("button").on("click",function(){
 	// 	$("button").style.background="black";
 	// })
 	// var url='http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=5';
 	//  $.getJSON(url,function(data){
 	//  	 console.log("fuck");
 	//  	 var keys=Object.keys(data);
 	//  	 keys.forEach(function(key){
 	//  	 	console.log(data[key]);
 	//  	 });
 	 	 
 	//  });

// var tumblr = require('tumblr.js');
// var client = tumblr.createClient({
//   consumer_key: 'oawCp58OtbaATrJryHHCDgrJo2HZ7T4SatfZqHCQ3Ro7nM3kBk',
//   consumer_secret: '1j8gZOjnXFKfhxSklcCM6ehrUkuPNPmFjhOQmGTulPm85DknUQ',
//   token: 'JcO7y9ivjMPILuqIbGaLbtLqN9KW0fztgzECpIp56pxaaaEszE',
//   token_secret: 'lhrPNddhIfqQYW6ailFmXnrNOP0emmVoOdRNJSv57zucyJgEGA'
// });

// Make the request
// client.dashboard(function (err, data) {

// });


   //  $("#tum").on("click",function(){
			// $.ajax({
			
			//     url: "https://api.tumblr.com/v2/user/info",
			//     type: "GET",
			//     dataType: 'json',
			//     cache: true,
			//     success: function (data) {
			// 		console.log(data);
			//     }
			// });

    	
   //  });


// oawCp58OtbaATrJryHHCDgrJo2HZ7T4SatfZqHCQ3Ro7nM3kBk
		// headers:{
		// 				"consumer_key": 'oawCp58OtbaATrJryHHCDgrJo2HZ7T4SatfZqHCQ3Ro7nM3kBk',
		// 				"consumer_secret": '1j8gZOjnXFKfhxSklcCM6ehrUkuPNPmFjhOQmGTulPm85DknUQ',
		// 				"token": 'JcO7y9ivjMPILuqIbGaLbtLqN9KW0fztgzECpIp56pxaaaEszE',
		// 				"token_secret": 'lhrPNddhIfqQYW6ailFmXnrNOP0emmVoOdRNJSv57zucyJgEGA'
		// 		},
// https://api.tumblr.com/v2/blog/sophie.tumblr.com/post/type=text?api_key=oawCp58OtbaATrJryHHCDgrJo2HZ7T4SatfZqHCQ3Ro7nM3kBk
//working url |||

















 // curl -X POST --include '' \
 //  -H 'X-Mashape-Key: ' \
 //  -H 'Content-Type: ' \
 //  -H 'Accept:
  // http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=5








  // https://codepen.io/gaurav4559/full/dRyrBK/