fetch('https://api.tvmaze.com/search/shows?q=house+of+dragons')
    .then((response) => {
        return response.json(); // Convert JSON response binary / string into live JS array / object.
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });