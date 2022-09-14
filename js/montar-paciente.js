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
                                var situacao;
                                if (imc < 17) {
                                    situacao = "Muito abaixo do peso";
                                } else {
                                    situacao = "Valor padrao";
                                }
                                return [imc, situacao];
                            } else {
                                alert("A altura deve ser maior que zero!"); 
                            }
                        }/*,
        pegarSituacao   : function() {
                            if(this.altura > 0) {
                                var situacao = "Muito abaixo do peso";
                                return situacao;
                            } else {
                                var situacao = "Padrao";
                            }
                        }*/
                    }
                
                return pacienteAtual;
            }
        