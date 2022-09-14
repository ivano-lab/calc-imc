var btn = document.getElementById('adicionar-paciente');
btn.addEventListener('click', function(event) {
    event.preventDefault();

    var campoNome   = document.querySelector('#campo-nome');
    var campoPeso   = document.querySelector('#campo-peso');
    var campoAltura = document.querySelector('#campo-altura');


    var novoPaciente = '<tr class="paciente">' +
                        '<td class="info-nome" id="nome">' + campoNome.value + '</td>' +
                        '<td class="info-peso" id="peso">' + campoPeso.value + '</td>' +
                        '<td class="info-altura" id="altura">' + campoAltura.value + '</td>' +
                        '<td class="info-imc" id="imc"></td>' +
                        '<td class="info-situacao" id="situacao"></td>' +
                    '</tr>';

    var tabela = document.querySelector('table');
    tabela.innerHTML += novoPaciente;
});