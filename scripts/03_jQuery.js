
//Query selector for buttom
//Add event listener to button
//Prevent multiple clicks / requests.
//Use fetch to...well fetch the information
//.json it
//Add it to our document
$(document).ready(()=>{
    const button = $('button')
    button.on("click", ()=>{

        button.disabled = true
        // $.ajax({
        //     url:'https://api.tvmaze.com/search/shows?q=house+of+dragons',
        //     success:(data)=>{
        //         // const list = document.createElement("ul")
        //         const list = $("<ul>");
        //         // document.querySelector('body').append(list)
        //         $('body').append(list);
        //         for(const entry of data){
        //             console.log(entry.show.name);
        //         //     let item = document.createElement("li")
        //         //     let text = document.createTextNode(entry.show.name)
        //         //     //<li>"House of the Dragon"</li>
        //         //     item.append(text)
        //             let item = $(`<li>${entry.show.name}</li>`)
        //         //     //<ul>
        //         //     //  <li>"House of the Dragon"</li>
        //         //     //</ul>
        //         //     document.querySelector('ul').append(item)
        //         list.append(item)
        //         }
        //     },
        //     error:(err)=>{
        //         console.log(err)
        //     }
        // })
        //Shorthand of code above
        $.get('https://api.tvmaze.com/search/shows?q=house+of+dragons')
        .then((data)=>{
            // const list = document.createElement("ul")
            const list = $("<ul>");
            // document.querySelector('body').append(list)
            $('body').append(list);
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