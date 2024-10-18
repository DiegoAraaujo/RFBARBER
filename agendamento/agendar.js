let horarioSelecionado = ""; 
let servicoSelecionado = ""; 

function selecionarServico(elemento) {
    const servicos = document.getElementsByClassName("servico");
    for (let i = 0; i < servicos.length; i++) {
        servicos[i].style.backgroundColor = ""; 
        servicos[i].style.color = ""; 
    }

    elemento.style.backgroundColor = "#f7ca18"; 
    elemento.style.color = "white";
    servicoSelecionado = elemento.textContent;
}

function escolherHorario() {
    let data = document.getElementById("data-agendamento").value;

 let avisoDataDiv = document.getElementById("aviso-data");

 if (!data) {
     avisoDataDiv.style.display = "block"; 
     return; 
 } else {
     avisoDataDiv.style.display = "none";
 }

    horarioSelecionado = ""; 

    let dia_semana = new Date(data.split("/").reverse().join("-")).getDay(); 
    let horarios_disponiveis = document.getElementsByClassName("dia");

    for (let i = 0; i < horarios_disponiveis.length; i++) {
        horarios_disponiveis[i].style.display = "none";
        
        let horarios = horarios_disponiveis[i].getElementsByClassName("hora");
        for (let j = 0; j < horarios.length; j++) {
            horarios[j].style.background = "";
            horarios[j].style.color = ""; 
        }
    }

    let diaSelecionado = horarios_disponiveis[dia_semana];
    if (diaSelecionado) {
        diaSelecionado.style.display = "block";
    }
}

function selecionarHora(elemento) {
    if (elemento.style.background === 'rgb(247, 202, 24)') { 
        elemento.style.background = '';
        elemento.style.color = '';
        horarioSelecionado = "";
    } else {
        const horarios = document.getElementsByClassName("hora");
        for (let i = 0; i < horarios.length; i++) {
            horarios[i].style.background = ''; 
            horarios[i].style.color = '';      
        }

        elemento.style.background = '#f7ca18';
        elemento.style.color = 'white';
        horarioSelecionado = elemento.textContent; 
    }
}



flatpickr("#data-agendamento", {
    locale: "pt",
    dateFormat: "d/m/Y",
    allowInput: true,
    onChange: function(selectedDates, dateStr, instance) {
        escolherHorario(); 
    }
});

function confirmarHorario() {
    let data = document.getElementById("data-agendamento").value;
    if (horarioSelecionado && servicoSelecionado) {
        alert("Data: " + data + "\nHorário: " + horarioSelecionado + "\nServiço: " + servicoSelecionado);
    } else {
        alert("Por favor, preencha as informações."); 
    }
}

