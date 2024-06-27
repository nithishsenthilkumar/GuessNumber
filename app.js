const submitbutton = document.getElementById('checkButton');
console.log(submitbutton);
const messages = document.getElementById('attemptLabel');
const lives = document.getElementById('attemptCount');
var randomnumber = Math.round(Math.random()*100
);
console.log(randomnumber);
var live = 10;
var text;
submitbutton.onclick =() =>
{
    var inputValue= document.getElementById('textBox').value;
    console.log(inputValue);
    live--;
    if(inputValue == randomnumber)
    {
        text = `You have guessed the correct number.`;
        location.href="./win.html"
    }
    else if(live==0)
    {
        location.href="./lose.html"
    }
    else if(inputValue > randomnumber)
    {
        text = `You have entered the largest number.`;
    }
    else if(inputValue < randomnumber)
    {
        text = `You have entered the smallest number.`;
    }
    
    console.log(live);
    console.log(text);

    messages.style.display = "inherit";
    messages.innerHTML = text;
    lives.innerHTML = live;
}