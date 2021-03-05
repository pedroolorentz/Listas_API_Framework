window.onload = function() {
    call()
}

function call() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response){
        return response.json();
    })
    .then((response) => {
    //Card 1
    //Card 1
    var section = document.getElementById("section")


    for (let i = 0; i < response.length; i++) {
        const element = response[i];
        const progress = element.completed ? 'progress' : 'completed';
        var card = "<article>"+
                    "<div class='titles'>"+
                        "<p id='title'>"+element.title+"</p>"+
                        "<p class='"+ progress +"'>"+element.completed+"</p>"+
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