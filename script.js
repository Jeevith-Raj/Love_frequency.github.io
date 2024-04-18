window.onload = function() {
    let button = document.getElementById("Calculate");
    button.addEventListener("click",calculatelove());

}

function calculatelove(){
    let yourname = document.getElementById("your-name").value;
    let crushname = document.getElementById("your-crush").value;

    document.getElementById("result-message").innerText = yourname +" the chances of you getting "+crushname+"is";

    if(yourname !=""&& crushname !=""){
        let percentage =Math.floor(Math.random()*101);
        document.getElementById("result-message").innerText = yourname +" the chances of you getting "+crushname+"is";
        document.getElementById("result-percentage").innerText = percentage.toString()+"%";
    }
}