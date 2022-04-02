var click1 = document.getElementById("add1");
var click2 = document.getElementById("add2");
var click3 = document.getElementById("add3");
var click4 = document.getElementById("add4");
var click5 = document.getElementById("add5");
var clicks = [click1, click2, click3, click4, click5];
function active1() {
    click1.classList.toggle('active');
    click2.classList.remove('active');
    click3.classList.remove('active');
    click4.classList.remove('active');
    click5.classList.remove('active');
}
function active2() {
    click2.classList.toggle('active');
    click1.classList.remove('active');
    click3.classList.remove('active');
    click4.classList.remove('active');
    click5.classList.remove('active');
}
function active3() {
    click3.classList.toggle('active');
    click1.classList.remove('active');
    click2.classList.remove('active');
    click4.classList.remove('active');
    click5.classList.remove('active');
}
function active4() {
    click4.classList.toggle('active');
    click1.classList.remove('active');
    click3.classList.remove('active');
    click2.classList.remove('active');
    click5.classList.remove('active');
}
function active5() {
    click5.classList.toggle('active');
    click1.classList.remove('active');
    click3.classList.remove('active');
    click4.classList.remove('active');
    click2.classList.remove('active');
}

var ratedHTML = `
<div class="col">
    <div class="row">
        <div class="col result">
            You selected ${active} out of 5
        </div>
    </div>
    <div class="row col-ty">
        <div class="col">
            <h3>Thank you!</h3>
        </div>
    </div>

    <div class="row col-ty">
        <div class="col">
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    </div>
</div>

`;

function submit() {
    for (let index = 0; index < clicks.length; index++) {
        if(clicks[index].classList == "rate active"){
            var active = clicks[index].innerHTML;
        }
        
    }
    var ratedHTML = `
    <div class="col">
        <div class="row">
            <div class="col col-ty">
                <img src="./illustration-thank-you.svg" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col result">
                You selected ${active} out of 5
            </div>
        </div>
        <div class="row col-ty">
            <div class="col">
                <h3>Thank you!</h3>
            </div>
        </div>

        <div class="row col-ty">
            <div class="col">
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
        </div>
    </div>

    `;
    if (click1.classList == "rate active" || click2.classList == "rate active" || click3.classList == "rate active" || click4.classList == "rate active" || click5.classList == "rate active") {
        document.querySelector(".row.cont-row").innerHTML = ratedHTML;
            
        
    } else {
        console.log("not active");
    }
}