let horarioSelecionado = ""; // Variável global para armazenar o horário selecionado

function escolherHorario() {
    let data = document.getElementById("data-agendamento").value;

    // Verifica se a data foi fornecida antes de continuar
    if (!data) {
        return; // Se não houver data, não faz nada
    }

    let dia_semana = new Date(data.split("/").reverse().join("-")).getDay(); // Ajuste a data para o formato ISO
    let horarios_disponiveis = document.getElementsByClassName("dia");

    // Oculta todos os dias e reseta as cores dos horários
    for (let i = 0; i < horarios_disponiveis.length; i++) {
        horarios_disponiveis[i].style.display = "none";
        
        let horarios = horarios_disponiveis[i].getElementsByClassName("hora");
        for (let j = 0; j < horarios.length; j++) {
            horarios[j].style.background = "";
            horarios[j].style.color = ""; 
        }
    }

    // Exibe o dia selecionado
    let diaSelecionado = horarios_disponiveis[dia_semana];
    if (diaSelecionado) {
        diaSelecionado.style.display = "block";
    }
}

function selecionarHora(elemento) {
    // Altera a cor do horário selecionado
    if (elemento.style.background === 'rgb(247, 202, 24)') { 
        elemento.style.background = '';
        elemento.style.color = '';
        horarioSelecionado = ""; // Limpa a seleção se o horário for desmarcado
    } else {
        const horarios = document.getElementsByClassName("hora");
        for (let i = 0; i < horarios.length; i++) {
            horarios[i].style.background = ''; 
            horarios[i].style.color = '';      
        }

        elemento.style.background = '#f7ca18';
        elemento.style.color = 'white';
        horarioSelecionado = elemento.textContent; // Armazena o horário selecionado
    }
}

function abrirCalendario() {
    const calendario = document.getElementById("data-agendamento");
    calendario.style.display = 'block'; // Exibe o input de data
    calendario.focus(); // Foca no input para abrir o calendário

    // Usar um timeout para garantir que o campo esteja visível antes de clicar
    setTimeout(() => {
        calendario.click(); // Abre o seletor de data
    }, 50);
}

// Adiciona um evento ao Flatpickr para chamar a função ao selecionar uma data
flatpickr("#data-agendamento", {
    locale: "pt",
    dateFormat: "d/m/Y",
    allowInput: true,
    onChange: function(selectedDates, dateStr, instance) {
        escolherHorario(); // Chama a função quando a data é alterada
    }
});

function confirmarHorario(){
    let data = document.getElementById("data-agendamento").value;
    if (horarioSelecionado) {
        alert("Data: " + data + "\nHorário: " + horarioSelecionado);
    } else {
        alert("Por favor, selecione um horário."); // Aviso se nenhum horário foi selecionado
    }
}