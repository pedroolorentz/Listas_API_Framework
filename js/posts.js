window.onload = function() {
    call()
}

function call() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response){
        return response.json();
    })
    .then((response) => {
    //Card 1
    //Card 1
    var section = document.getElementById("section")


    for (let i = 0; i < response.length; i++) {
        const element = response[i];
        var card = "<article>"+
                    "<div class='titles'>"+
                        "<p id='title'>"+element.title+"</p>"+
                        "<p id='body'>"+element.body+"</p>"+
                    "</div>"+

                    "<div class='ids'>"+
                        "<p>User ID: <p id='uid'>"+element.userId+"</p></p>"+
                        "<p>Post ID:<p id='id'>"+element.id+"</p></p>"+
                    "</div>"+
                "</article>"

        section.innerHTML += card
    }
})
}