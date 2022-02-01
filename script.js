var btnContact = document.getElementById("contact"); 

var setupListener = {
    contacter : ()=>{
        window.open('mailto:annah.randriami@gmail.com');
    }
}

btnContact.onclick = setupListener.contacter