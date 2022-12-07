var inputBox=document.querySelector(".inputbox");
var inputEq=document.querySelector(".inputEq");
var historyDiv = document.querySelector(".history-div");
var answers = [];
var equations = [];
function setvalue(num){
    if(inputBox.value==0)
       inputBox.value=num;
    else
       inputBox.value+=num;
}

function clearInput(){
    inputBox.value=0;
}

function getAns(){
    inputEq.value = inputBox.value + " = ";
    inputBox.value=eval(inputBox.value);
}

function showHistory()
{
    alert("hello");
    historyDiv.innerHTML = "";

    for(let i=0; i<answers.length;i++)
    {
        historyDiv.innerHTML += '<div class="section"><h6>'+ equations[i]+ ' </h6><h6>'+answers[i]+'</h6></div>';
    }
}

function removeHistory()
{
    var status= confirm("Are You sure want to delete history ? ");
    if(status)
    {
        historyDiv.innerHTML = "";
        answers = [];
        equations = [];
    }

}