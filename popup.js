
const msg = document.querySelector('.msg');
var changeButton1 = document.getElementById("pet-change1");
var changeButton2 = document.getElementById("pet-change2");
var changeButton3 = document.getElementById("pet-change3");
var changeButton4 = document.getElementById("pet-change4");
var changeButton5 = document.getElementById("pet-change5");



changeButton1.addEventListener('click', onChange1);
changeButton2.addEventListener('click', onChange2);
changeButton3.addEventListener('click', onChange3);
changeButton4.addEventListener('click', onChange4);
changeButton5.addEventListener('click', onChange5);

const changeSubmit = document.getElementById("pet-submit");
var petName = "Meiko";



function newMsg(chineseName, image){
    var newContent = `<h3 id="pet-name"> ${chineseName} </h3>` +
                    `<p>`+
                    `<img height="100" style="max-width: 120px;background-position: top left;" src=${image} />`+
                    `</p>`;
    return newContent;
}

function onChange1(e) {
    e.preventDefault();
    petName = "Flandre";
    chineseName = "Flandre";
    let image = "/images/" + petName + "Pet128.png";
    let newContent = newMsg(chineseName,image);
    msg.innerHTML = newContent;
}


function onChange2(e) {
    e.preventDefault();
    petName = "Jiejie";
    chineseName = "Jiejie";
    let image = "/images/" + petName + "Pet128.png";
    let newContent = newMsg(chineseName,image);
    msg.innerHTML = newContent;
}


function onChange3(e) {
    e.preventDefault();
    petName = "Scout";
    chineseName = "Scout";
    let image = "/images/" + petName + "Pet128.png";
    let newContent = newMsg(chineseName,image);
    msg.innerHTML = newContent;                
}


function onChange4(e) {
    e.preventDefault();
    petName = "Viper";
    chineseName = "Viper";
    let image = "/images/" + petName + "Pet128.png";
    let newContent = newMsg(chineseName,image);
    msg.innerHTML = newContent;
}


function onChange5(e) {
    e.preventDefault();
    petName = "Meiko";
    chineseName = "Meiko";
    let image = "/images/" + petName + "Pet128.png";
    let newContent = newMsg(chineseName,image);
    msg.innerHTML = newContent;
}


changeSubmit.onclick= function(e) {
    e.preventDefault();
    chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {getName: petName});
    });
}


