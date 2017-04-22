$(document).ready(function() {

	console.log("first test");

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

/*
var d = new Date();

if ($("#endYr").val() == 2017) {

	var month = d.getMonth()+1;
	var day = d.getDate();

	var end_date = d.getFullYear() + '/' +
   		(month<10 ? '0' : '') + month + '/' +
   		(day<10 ? '0' : '') + day;
} 

else {
	end_date = $("#endYr").val() + "1231"; 
};

*/

url += '?' + $.param({
  'api-key': "75fd902bfcca4a9d90c2f5188fb1d9b2",
  'q': $("#searchTxt").val(),
  'begin_date': "20170101",
  'end_date': "20170422"
});

$(".search").click(function() {

	console.log("test");
	$.ajax({
  	url: url,
  	method: 'GET',
		}).done(function(result) {


	for (var i = 0; i <= parseInt($("#numOfRec").val()); i++) {

 		var search = result.response;

  		console.log(url);
  		console.log(search.docs[i].headline.print_headline);

  	}

	/*
	}).fail(function(err) {
  	throw err; 
  	*/

});
})

})

