var btn = document.getElementById('adicionar-paciente');
btn.addEventListener('click', function(event) {
    event.preventDefault();

    var campoNome   = document.querySelector('#campo-nome');
    var campoPeso   = document.querySelector('#campo-peso');
    var campoAltura = document.querySelector('#campo-altura');


    var novoPaciente = '<tr class="paciente">' +
                        '<td class="info-nome" id="nome-4">' + campoNome.value + '</td>' +
                        '<td class="info-peso" id="peso-4">' + campoPeso.value + '</td>' +
                        '<td class="info-altura" id="altura-4">' + campoAltura.value + '</td>' +
                        '<td class="info-imc" id="imc-4"></td>' +
                    '</tr>';

    var tabela = document.querySelector('table');
    tabela.innerHTML += novoPaciente;
});