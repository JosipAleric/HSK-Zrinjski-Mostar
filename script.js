let alert1 = document.getElementById("alert1")
let alert2 = document.getElementById("alert2")
alert1.style.display = "none"
alert2.style.display = "none"

function pretplata_gumb(){
    let gumb = document.getElementById("gumb")
    let email = document.getElementById("email").value
    
    if(email.includes("@")){
        gumb.style.display = "inline"
    } else{
        gumb.style.display = "none"
    }

}

function pretplata(){
    let email = document.getElementById("email").value

    if(email.length > 10){
        alert1.style.display = "inline"
        setTimeout(function(){
            alert1.style.display = "none"
        }, 3000)
    } else{
        alert2.style.display = "inline"
        setTimeout(function(){
            alert2.style.display = "none"
        }, 3000)
    }
}

function validacija(){
    let ime = document.getElementById("ime")
    let prezime = document.getElementById("prezime")
    let email = document.getElementById("email")
    let godine = document.getElementById("godine")

    if(ime.value.length <= 2 || prezime.value.length <= 2 || email.value.length < 10 || godine.value < 3 || godine.value > 19){
        alert2.style.display = "inline"
        setTimeout(function(){
            alert2.style.display = "none"
        }, 3000)
    } else{
        alert1.style.display = "inline"
        setTimeout(function(){
            alert1.style.display = "none"
        }, 3000)
    }

}
