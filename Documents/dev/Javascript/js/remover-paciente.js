var tabela = document.querySelector("table");  //faz referencia ao table do html.

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
});

 /*var alvoEvento = event.target; Clicando só pegamos o TD.
    var paiDoAlvo = alvoEvento.parentNode;  // retorna um parente do DOM.
    paiDoAlvo.remove();  //removemos a TR inteira.*/

/*pacientes.forEach(function(paciente{
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com um duplo click");
        this.remove();
    })
})*/