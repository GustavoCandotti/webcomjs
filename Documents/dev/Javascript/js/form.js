var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();  //prevenindo o comportamento padrão do evento para nao recarregar a pagina.
    
    var form = document.querySelector("#form-adiciona");
    
    //extraindo informacoes do paciente do form.
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset(); //limpa os campos.
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";  //usamos para limpar as mensagens.
    
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);  //cria a tr e a td do paciente.
    var tabela = document.querySelector("#tabela-pacientes"); //adicionando o paciente na tabela.
    tabela.appendChild(pacienteTr);  //adicionamos o tr pra tabela tbody.
}


function obtemPacienteDoFormulario(form){

    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value),
    }

    return paciente;

}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");  //createElement, permite criar qualquer tag do HTML.
    pacienteTr.classList.add("paciente");  //adicionando a classe paciente.

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));  //adicionou tds dentro do tr.
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");

    if( paciente.nome.length == 0){
        erros.push("O nome não pode ficar em branco");
    }

    if( paciente.gordura.length == 0){
        erros.push("A gordura não pode ficar em branco");
    }

    if( paciente.peso.length == 0){
        erros.push("O peso não pode ficar em branco");
    }

    if( paciente.altura.length == 0){
        erros.push("A altura não pode ficar em branco");
    }

    return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";  //para nao repetir as mensagens quando clicarmos em ADICIONAR.

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}