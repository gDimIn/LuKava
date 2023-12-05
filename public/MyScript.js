var pos = 0;

window.addButton = function addButton(buttonText){
    let newButton = document.createElement('button')
    //let id = pos
    newButton.textContent = buttonText
    //newButton.id = id
    newButton.setAttribute('disable', "")

    document.getElementById('button-container').appendChild(newButton)
    newButton.addEventListener('click', ()=> {
        newButton.remove()
    })
    
}


function myInner( id,  insert)
{
    document.getElementById(id).innerHTML = insert;
}

/*infoDrinkCap.addEventListener('click', () =>{
    var newButton = document.createElement("button");
    newButton.innerText = infoDrinkCap.getAttribute("name");
    
    var buttonContainer = document.getElementById("button-container");
        if (buttonContainer.firstChild) {
            buttonContainer.insertBefore(newButton, buttonContainer.firstChild);
        } else {
            buttonContainer.appendChild(newButton);
        }
    
} );*/

/*infoDrinkLat.addEventListener('click', () =>{
    let newButton = document.createElement("button");
    newButton.innerText = infoDrinkLat.getAttribute("name");
    
    let buttonContainer = document.getElementById("button-container");
        if (buttonContainer.firstChild) {
            buttonContainer.insertBefore(newButton, buttonContainer.firstChild);
        } else {
            buttonContainer.appendChild(newButton);
        }
    
} );*/

function clickBtn (){
    //myInner("info-drink", infoDrinkBtn.getAttribute("rows"));
    
}