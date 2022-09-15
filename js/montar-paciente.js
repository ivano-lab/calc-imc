function montarPaciente() {
    var pacienteTr = trsPacientes[cont];

    var tdNome = pacienteTr.getElementsByClassName('info-nome')[0];
    var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0];
    var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0];

    var pacienteAtual = {
        nome            : tdNome.textContent,
        peso            : tdPeso.textContent,
        altura          : tdAltura.textContent,
        pegarImc        : function() {
                            if(this.altura != 0) {
                                var imc = this.peso / (this.altura * this.altura);
                                imc = imc.toFixed(1);
                                var situacao;
                                if (imc < 17) {
                                    situacao = "Muito abaixo do peso";
                                } else if (imc >= 17 && imc < 18.5) {
                                    situacao = "Abaixo do peso";
                                } else if (imc >= 18.5 && imc < 25) {
                                    situacao = "Peso ideal";
                                } else if (imc >= 25 && imc < 30) {
                                    situacao = "Sobrepeso";
                                } else if (imc >= 30 && imc < 35) {
                                    situacao = "Obesidade";
                                } else if (imc >= 35 && imc < 40) {
                                    situacao = "Obesidade Severa";
                                } else {
                                    situacao = "Obesidade Morbida"; 
                                }
                                return [imc, situacao];
                            } else {
                                alert("A altura deve ser maior que zero!"); 
                            }
                        }
                    }
                
                return pacienteAtual;
            }
        