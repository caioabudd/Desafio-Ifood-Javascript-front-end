
function frango() {
    
document.getElementById("frango").style.borderColor = "green";
document.getElementById("salada").style.borderColor = "white";
document.getElementById("macarrao").style.borderColor = "white";
comida = "frango";
}
function salada() {
    document.getElementById("salada").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("macarrao").style.borderColor = "white";
    comida = "salada";
}

function macarrao() {
    document.getElementById("macarrao").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("salada").style.borderColor = "white";
    comida = "macarrão";

}

function finalizarPedido() {
    let mensagem;
    
    if(mensagem = ""){
        alert("Clique em alguma comida!");

    } else {
        mensagem = "Olá gostaria de pedir um " + comida;
    alert(mensagem);
    }
}