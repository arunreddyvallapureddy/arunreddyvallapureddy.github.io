let myImage  = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/guvi-icon.png') {
        myImage.setAttribute('src','images/avengers-icon.png')
    }
    else{
        myImage.setAttribute('src','images/guvi-icon.png')
    }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter you name');
    if(!myName) {
        myHeading.textContent = 'Mozilla is cool'
    } else {
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
    

}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}