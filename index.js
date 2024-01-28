let vitorias;
let derrotas;

function calcularRank(vitorias, derrotas){
        let saldo = vitorias-derrotas; 
        return saldo
}
function ranking(){
    
let saldo = calcularRank(165, 70)
let nivel = "";
    
    if (saldo < 10){
        nivel = "Ferro";
    }
    else if ( saldo < 21){
        nivel = "Bronze";
        }
        else if ( saldo < 51){
                nivel = "Prata";
            }
            else if ( saldo < 81){
                    nivel = "Ouro";
                }
                else if ( saldo < 90){
                        nivel = "Diamante";
                    }
                    else if ( saldo < 100){
                            nivel = "Lendário";
                        }
                        else if ( saldo >= 101){
                                nivel = "Imortal";
                            }
return "O herói tem saldo de " + saldo + " e está no nível " +nivel;
    }
console.log(ranking());





