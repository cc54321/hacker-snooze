
//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

//https://hacker-news.firebaseio.com/v0/item/{id}.json?print=pretty

let storiesButton = document.querySelector("#topButton");
let commentsButton = document.querySelector("#commentsButton");
let contentTable = document.querySelector('#content-table');

let newsStories = document.querySelector('#newsStories');
let headline = document.querySelector("#headline");
let source = document.querySelector("#source");
let score = document.querySelector("#score");
let author = document.querySelector("#by");
let body = document.querySelector('body');
let parent = document.createElement('div');

let generateStoryRow = function (storyData){
    let tr = document.createElement('tr');
    tr.class = "storyRow";

    tr.innerHTML =`<tr class="story-row">
    <td class="story-title">
     <a href=${storyData['url']}" target"_blank"=${storyData['title']}> ${storyData['title']} </a>
     </td>
    </tr>`;
     return tr;

     
}
 
    let getTopNewsStories = async () => {
    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    let data = await response.json();
    for(let i = 0; i < 100; i++){
        //console.log(data[i]);
        let storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);

        let storyData = await storyResponse.json();
        console.log(storyData);
        contentTable.appendChild(generateStoryRow(storyData));
       

        /*
         newsStories.innerHTML += `
        
         
         newsStories.innerHTML += `
         newsStories.innerHTML = data.id
         headline.innerHTML = data.title
         author.innerHTML = data.by
         source.innerHTML = data.url
         score.innerHTML = data.score

         <div class = "card-body">
         <h5> <a href=${storyData.url}>${storyData.title}</a> 
         <div class = "content-table"> Author: ${storyData.by} score: ${storyData.score} comments: ${storyData.descendants}
         
              let listParent = ("#parent");
              let newLi = ("#headline")
              let newP = ("response");
              listParent.append(newLi);
              listParent.append(newP);*/
            
           
      
            
       
    
    }

   
    console.log(data) 
    






    }
    getTopNewsStories()
