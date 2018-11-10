$(document).ready ( function () {
	var queryURL = "https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=671033c49a4a4f5392b09b572445e7fc"
	var newsArray = [];
	

	$.ajax({
	url: queryURL,
	method: "GET"
	}).done(function(response) {
	makeNews(response);
	});
});

function makeNews (newsResponse) {
	var newsArray = [];
	for (var i = 0; i < newsResponse.articles.length; i++){
	        var currentItem = {
                                number: i+1,
                                title: newsResponse.articles[i].title, 
                                url: newsResponse.articles[i].url,
                                description: newsResponse.articles[i].description
                            };

        newsArray.push(currentItem);

      

    }

    displayNews(newsArray);

}

function displayNews (newsToDisplay) {
    for (var i = 0; i < newsToDisplay.length; i++){

        var objectToDisplay = newsToDisplay[i];
        $('.search-results-shown').append(
            `
            <div>
                <h3>${objectToDisplay.number}. ${objectToDisplay.title}</h3>
                        
                <a href="${objectToDisplay.url}" target="_blank">${objectToDisplay.url}</a>

                <p>${objectToDisplay.description}</p>

                <hr>
            </div>

            `
		)
    }
}