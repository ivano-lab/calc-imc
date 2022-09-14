function imprimeNome(pacienteTr) {
    var paciente = montarPaciente(pacienteTr);

    console.log(paciente.nome); 
}

percorreArray(trsPacientes, imprimeNome); 
    
