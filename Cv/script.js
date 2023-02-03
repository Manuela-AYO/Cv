var pre = document.getElementsByClassName("preloaded");

setTimeout(function(){
    if (pre){
        document.getElementById("opening").remove();
    }
}, 3200);


// function to change the side of the card 
function returnCard() {
    item1 = document.getElementsByClassName("card-back");
    item2 = document.getElementsByClassName("card-two");
    if(item1[0].hasAttribute("hidden")){
        item1[0].removeAttribute("hidden");
        item2[0].setAttribute("hidden", true);
    }
    else {
        item2[0].removeAttribute("hidden");
        item1[0].setAttribute("hidden", true);
    }
}

// display the details of card
function view_details() {
    item1 = document.getElementsByClassName("card-inner");
    item2 = document.getElementsByClassName("no_view");
    item3 = document.getElementsByClassName("view");

    if(item1[0].style.display == "block"){
        item1[0].style.display = "none";
        item3[0].style.display = "none";
        item2[0].style.display = "block";
    }
    else {
        item1[0].style.display = "block";
        item3[0].style.display = "block";
        item2[0].style.display = "none";
    }
}


// display the details of the account
function display(param) {
    item1 = document.getElementsByClassName("card-inner");
    item2 = document.getElementById("detail_account");
    item3 = document.getElementsByClassName("no_view");
    item4 = document.getElementsByClassName("view");

    if(param == "account") {
        item1[0].style.display = "none";
        item2.style.display = "block";
        //document.getElementById("board").style.display = "none";
        item3[0].style.display = "none";
        item4[0].style.display = "none";
        item = document.getElementById("account");
        item.style.color = "#cb6ce6"
        document.getElementById("card").style.color = "#fff"
    }
    else {
        item1[0].style.display = "block";
        // document.getElementById("board").style.display = "block";
        item4[0].style.display = "block";
        item3[0].style.display = "none";
        item2.style.display = "none";
        item = document.getElementById("card");
        item.style.color = "#cb6ce6"
        document.getElementById("account").style.color = "#fff"
    }

}