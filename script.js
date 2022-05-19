src = "https://apis.google.com/js/api.js"
var details=[
 totalRecords = 0,
 records = [],
 recPerPage = 0,
 nextPageToken = "",
 totalPages = 0]
var API_KEY = "";
var search = "";

var order = "relevance";

var maxResults = 10;

document.getElementById("search").addEventListener("click", async function (e) {
 e.preventDefault();


 var API_KEY = "API_KEY";

 var url = fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}
     &part=snippet&q=${search}&maxResults=${maxResults}`)

     console.log(url);
     urljson=await url.json;
     console.log(urljson)
})




function generateRecords(recPerPage, nextPageToken) {
 var url2 = fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}
   &part=snippet&q=${search}&maxResults=${maxResults}&pageToken=${nextPageToken}&publishedBefore=${beforedate}&publishedAfter=${afterdate}&order=${order}&videoDuration=${duration}&type=video`)
   console.log(url2);
     urljson=await url2.json;
     console.log(urljson)

  };
 

function displayVideos(data) {
 recPerPage = data.pageInfo.resultsPerPage;
 nextPageToken = data.nextPageToken;
 console.log(records);
 totalRecords = data.pageInfo.totalResults;
 totalPages = Math.ceil(totalRecords / recPerPage);
 
 

 var videoData = "";

 videoData =
               

 data.items.forEach((item) => {
  
                    
                   var a1= document.createElement("a");
                   a1.setAttribute("target","_blank");
                   a1.setAttribute("href","https://www.youtube.com/watch?v=${item.id.videoId")

                    
                   
                    a1=item.snippet.title
                    document.body.append(a1)
                    
                    var img=document.createElement("img");
                    src="item.snippet.thumbnails.high.url";
                    img.style.width=200;
                    img.style.height=200;
                    document.body.append(img)

                    var a2= document.createElement("a");
                   a2.setAttribute("target","_blank");
                   a2.setAttribute("href","https://www.youtube.com/channel/${item.snippet.channelId")
       
       a2=item.snippet.channelTitle

                    document.body.append(a2)
  
                    ;
  
                          document.getElementById("results").append(videoData);
 });

}

