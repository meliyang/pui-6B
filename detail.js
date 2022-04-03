console.log("product detail");

function helpFreq() {
    console.log("helpFreq called");
    let helpElem = document.getElementById('help-frequency');
    helpElem.addEventListener("click", ()=>{
        console.log("clicked help button");
        alert("Frequency of subscription -- \nday: shipped every day at 8 am\nweek: shipped every week on Monday\nmonth: shipped every month on the first day of each month");
    });
}





window.onLoad = function() {
  helpFreq();

};
console.log("what");