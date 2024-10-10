let horarioSelecionado = ""; 

function escolherHorario() {
    let data = document.getElementById("data-agendamento").value;

    if (!data) {
        return;
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
        document.getElementById("selhorar").style.display = 'block';
    } else {
        document.getElementById("selhorar").style.display = 'none'; 
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
    if (horarioSelecionado) {
        alert("Data: " + data + "\nHorário: " + horarioSelecionado);
    } else {
        alert("Por favor, selecione um horário."); 
    }
}
