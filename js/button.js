function swicth_button(){

    var p1 =getElementByClassName("photo_one");
    var p2 =getElementByClassName("photo_two");
    var message = getElementByClassName("photo_desc");



    if (p1.style.display === "none"){
        p1.style.display = "block";
        p2.style.display = "block";
        message.innerHTML = "Photos Of The Week:";
    } else {
        p1.style.display = "none";
        p2.style.display = "none";
        message.innerHTML = "A Wee Note For You:";

    }
}