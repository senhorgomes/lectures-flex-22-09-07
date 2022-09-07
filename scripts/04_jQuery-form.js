
//Query selector for buttom
//Add event listener to button
//Prevent multiple clicks / requests.
//Use fetch to...well fetch the information
//.json it
//Add it to our document
$(document).ready(()=>{
    const form = $('form')
    form.on("submit", (event)=>{
        event.preventDefault()
        //Retrieve your tweet
        console.log('input value', $('input').val())
        //Capture the information, then pass it into the url query
        const searchTerm = $('#api-search-field').val();
        $.ajax({
            //Only when this is done, it will either succeed or provide an error
            url:`https://api.tvmaze.com/search/shows?q=${searchTerm}`,
            //We can use the success key, or .then
            // success:(data)=>{
            //     const list = $('#search-results')
            //     list.empty()
            //     for(const entry of data){
            //         console.log(entry.show.name);
            //     //     let item = document.createElement("li")
            //     //     let text = document.createTextNode(entry.show.name)
            //     //     //<li>"House of the Dragon"</li>
            //     //     item.append(text)
            //         let item = $(`<li>${entry.show.name}</li>`)
            //     //     //<ul>
            //     //     //  <li>"House of the Dragon"</li>
            //     //     //</ul>
            //     //     document.querySelector('ul').append(item)
            //     list.append(item)
            //     }
            // },
            // error:(err)=>{
            //     console.log(err)
            // }
        }).then((data)=>{
            const list = $('#search-results')
            list.empty()
            for(const entry of data){
                console.log(entry.show.name);
            //     let item = document.createElement("li")
            //     let text = document.createTextNode(entry.show.name)
            //     //<li>"House of the Dragon"</li>
            //     item.append(text)
                let item = $(`<li>${entry.show.name}</li>`)
            //     //<ul>
            //     //  <li>"House of the Dragon"</li>
            //     //</ul>
            //     document.querySelector('ul').append(item)
            list.append(item)
            }
        })
    })
})