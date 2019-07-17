function switch_button(){

    var p1 =document.getElementsByClassName("photo_one")[0];
    var p2 =document.getElementsByClassName("photo_two")[0];
    var message = document.getElementsByClassName("main_button")[0];
    var note = document.getElementsByClassName("note_wrapper")[0];



    if (p1.style.display === "none"){
        console.log(p1)

        p1.style.display = "block";
        p2.style.display = "block";
        note.style.display = "none";

        message.innerHTML = "Show Note";
    } else {
        console.log(p1)

        p1.style.display = "none";
        p2.style.display = "none";
        note.style.display = "block"

        message.innerHTML = "Show Photos";

    }
}