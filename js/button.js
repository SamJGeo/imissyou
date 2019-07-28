var counter = 0;

function switch_button(){

    var p1 =document.getElementsByClassName("photo_one")[0];
    var p2 =document.getElementsByClassName("photo_two")[0];
    var message = document.getElementsByClassName("main_button")[0];
    var note = document.getElementsByClassName("note_wrapper")[0];
    var spotify = document.getElementsByClassName("spotify_wrapper")[0];

    counter +=1
    
    if (counter%3 === 0) {
        p1.style.display = "block";
        p2.style.display = "block";
        note.style.display = "none";
        spotify.style.display = "none";
    } else if (counter%3 === 1){
        p1.style.display = "none";
        p2.style.display = "none";
        note.style.display = "block"
        spotify.style.display = "none";
    } else {
        p1.style.display = "none";
        p2.style.display = "none";
        note.style.display = "none";
        spotify.style.display = "block";
    }
}