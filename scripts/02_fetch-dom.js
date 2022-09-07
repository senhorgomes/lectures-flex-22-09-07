
//Query selector for buttom
const searchButton = document.querySelector('button');
//Add event listener to button
searchButton.addEventListener('click', ()=>{
    //Prevent multiple clicks / requests.
    searchButton.disabled = true;
    //Use fetch to...well fetch the information
    fetch('https://api.tvmaze.com/search/shows?q=house+of+dragons')
    .then((response) => {
        //.json it
        return response.json(); // Convert JSON response binary / string into live JS array / object.
    })
    .then((data) => {
        //Add it to our document
        const list = document.createElement("ul")
        document.querySelector('body').append(list)
        for(const entry of data){
            console.log(entry.show.name)
            let item = document.createElement("li")
            let text = document.createTextNode(entry.show.name)
            //<li>"House of the Dragon"</li>
            item.append(text)
            //<ul>
            //  <li>"House of the Dragon"</li>
            //</ul>
            document.querySelector('ul').append(item)
        }
    })
    .catch((error) => {
        console.error(error);
    });
})