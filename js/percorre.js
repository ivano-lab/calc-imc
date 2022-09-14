var trsPacientes = document.getElementsByClassName('paciente');

function percorreArray(trsPacientes, comportamento) {
    for(cont = 0; cont < trsPacientes.length; cont++) {
        var pacienteTr = trsPacientes[cont];

        comportamento(pacienteTr)
    }
}

