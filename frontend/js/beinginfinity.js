//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";
var searchbar = document.getElementById("search-bar");
var searchSuggestions =document.getElementById("search-suggestions"); 
//get data from user input
//use user typed data in query in API call
//API call
//Append all search suggestions to div tag in ul
searchbar.addEventListener("input",function(){
    var query = searchbar.value.trim(); //1.get the user typed data
    //to remove spaces use trim
    fetchSuggestions(query);
})
function fetchSuggestions(query){
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        showSuggestions(data);
    })

     .catch(function(err){
                console.log("Error : " + err);
            })
}
function showSuggestions(data){
    var suggestionsList =data.results;
    if(data.count == 0){
        searchSuggestions.innerHTML="<div> No Matching Results found! </div>";
    }
    else{
        var htmlString = "";
        for(var i = 0 ; i <  suggestionsList.length ; i++){
            htmlString += "<div><span class='suggestion-item'>" + suggestionsList[i].text + "</span><span class='item-weight'>" + suggestionsList[i].weight + "</span></div>";
        }
        searchSuggestions.innerHTML = htmlString;
    }
}