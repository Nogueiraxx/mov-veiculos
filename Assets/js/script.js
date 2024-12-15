document.addEventListener("DOMContentLoaded", function () {
    const capturaForm = document.querySelector("#envio");
    if (capturaForm) {
        capturaForm.addEventListener("click", function (event) {
            event.preventDefault();
            const model = document.querySelector('#modelo').value;
            const hora = document.querySelector('#hora').value;
            const ocorrencia = document.querySelector('#ocorrencia').value;
            const condutor = document.querySelector('#condutor').value;
            const placa = document.querySelector('#placa').value;
            const km = document.querySelector('#km-rodados').value;
            const orgDest = document.querySelector('#localizacao').value;

            // Salvando dados no localStorage
            localStorage.setItem('formData', JSON.stringify([model, hora, ocorrencia, condutor, placa, km, orgDest]));

            window.location.href = 'confirmation.html';
        });
    } else {
        console.error("Botão capturaForm não encontrado. teste");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        document.getElementById('confModelo').innerText = formData[0];
        document.getElementById('confHorario').innerText = formData[1];
        document.getElementById('confOcorrencia').innerText = formData[2];
        document.getElementById('confCondutor').innerText = formData[3];
        document.getElementById('confPlaca').innerText = formData[4];
        document.getElementById('confKmRodados').innerText = formData[5];
        document.getElementById('confOrigDest').innerText = formData[6];
    } else {
        console.error("Dados do formulário não encontrados.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const botaoVoltar = document.getElementById('botao-voltar');
    if (botaoVoltar) {
        botaoVoltar.addEventListener("click", function () {
            if (document.referrer) {
                window.location.href = document.referrer; // Retorna para a página que chamou
            } else {
                window.history.back(); // Fallback se não houver referrer
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    const horaAtual = `${horas}:${minutos}:${segundos}`;

    // Verifica e atribui horaAtual ao campo 'horaEntrada' se existir
    const horaEntrada = document.getElementById('hora');
    if (horaEntrada) {
        horaEntrada.value = horaAtual;
    } else {
        console.warn("Elemento 'horaEntrada' não encontrado.");
    }

    // Verifica e atribui horaAtual ao campo 'horarioSaida' se existir
    const horarioSaida = document.getElementById('hora');
    if (horarioSaida) {
        horarioSaida.value = horaAtual;
    } else {
        console.warn("Elemento 'horarioSaida' não encontrado.");
    }
});


function confirmar() {
    alert('Dados confirmados e salvos!');
}


function redirect(cValue) {
    if (cValue == 'entrada') {
        window.location.href = 'formularioEntrada.html';
    } else {
        window.location.href = 'formularioSaida.html';
    }
}

function retornaIndex(){
    window.location.href = 'index.html';
}



