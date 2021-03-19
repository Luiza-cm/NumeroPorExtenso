function Unidades(params) {
  var msg;
  switch(params){
    case 1: 
      msg = "um";
      break;
    case 2: 
      msg = "dois";
      break;
    case 3: 
      msg = "três";
      break;
    case 4: 
      msg = "quatro";
      break;
    case 5: 
      msg = "cinco";
      break;
    case 6: 
      msg = "seis";
      break;
    case 7: 
      msg = "sete";
      break;
    case 8: 
      msg = "oito";
      break;
    case 9: 
      msg = "nove";
      break;
  }
  return msg;
}

function PrimeiraDezena(params) {
  var msg;
  switch(params){
    case 10: 
      msg = "dez";
      break;
    case 11: 
      msg = "onze";
      break;
    case 12: 
      msg = "doze";
      break;
    case 13: 
      msg = "treze";
      break;
    case 14: 
      msg = "catorze";
      break;
    case 15: 
      msg = "quinze";
      break;
    case 16: 
      msg = "dezesseis";
      break;
    case 17: 
      msg = "dezessete";
      break;
    case 18: 
      msg = "dezoito";
      break;
    case 19: 
      msg = "dezenove";
      break;
  }
  return msg; 
}

function Dezenas(params) {
  var msg;
  switch(params){
    case 2: 
      msg = "vinte";
      break;
    case 3: 
      msg = "trinta";
      break;
    case 4: 
      msg = "quarenta";
      break;
    case 5: 
      msg = "cinquenta";
      break;
    case 6: 
      msg = "sessenta";
      break;
    case 7: 
      msg = "setenta";
      break;
    case 8: 
      msg = "oitenta";
      break;
    case 9: 
      msg = "noventa";
      break;
  }   
  return msg; 
}

function Centenas(params) {
  var msg;
  switch(params){
    case 1: 
      msg = "cento";
      break;  
    case 2: 
      msg = "duzentos";
      break;
    case 3: 
      msg = "trezentos";
      break;
    case 4: 
      msg = "quatrocentos";
      break;
    case 5: 
      msg = "quinhentos";
      break;
    case 6: 
      msg = "seiscentos";
      break;
    case 7: 
      msg = "setecentos";
      break;
    case 8: 
      msg = "oitocentos";
      break;
    case 9: 
      msg = "novecentos";
      break;
  }   
  return msg; 
}



function Resultado(param) {
  
    const regex = /[ -,.-/:-~]/g;
    var tam = param.length;

//    console.log(param);
//    console.log(param.match(regex));

    if ( param.match(regex) !== null && param != "favicon.ico" )
      return("Entrada com caracter invalido. Tente novamente.");

    if ( tam>6 && param != "favicon.ico" )
      return("Número fora do intervalo. Tente novamente.");

    
    var vetor = param.split(''),    //transforma a string param em vetor de caracteres
      vetornum=[10];

    //transformar o vetor de caracteres em vetor de inteiros
    for (var i=0; i < tam; i++){
      vetornum[i] = parseInt(vetor[i]);   
    }

    //verifica se o sinal negativo estah na posicao correta
    if(vetor.indexOf('-') !== -1 && vetor.indexOf('-') !== 0) {
      return("O sinal do numero esta na posicao errada.");
    }

    var num_extenso; //variavel que guardara o numero por extenso - a resposta
 
 
    //logica para escrever o valor de cada digito de acordo com o tamanho do vetor e a posicao ocupada por cada num 
    switch(tam){    
      case 1: 
          if(vetornum[0] == 0)
            num_extenso = "zero";
          else 
            num_extenso = Unidades(vetornum[0]);
          
        break;  

        
      case 2: 
          if(vetor[0] == '-'){
            num_extenso = "menos ";
            num_extenso += Unidades(vetornum[1]);            
          }
          else{
            if(vetornum[0]==1){
              var pdezena = vetornum[1] + 10;
              num_extenso = PrimeiraDezena(pdezena);
            }
            else{
              num_extenso = Dezenas(vetornum[0]);
              if(vetornum[1] == 0) break;
              num_extenso += " e ";
              num_extenso += Unidades(vetornum[1]);
            }
          }
          break;


      case 3:
          if(vetor[0] == '-'){
            num_extenso = "menos ";
            if(vetor[1] != 1){
              num_extenso += Dezenas(vetornum[1]);
              if(vetornum[2] == 0) break;
              num_extenso += " e " + Unidades(vetornum[2]);
            }
            
            else{
              
              var pdezena = vetornum[2] + 10;
              num_extenso += PrimeiraDezena(pdezena);
            }
          }
        else{
          if(vetornum[0]==1 && vetornum[1]==0 && vetornum[2]==0){
            num_extenso = "cem";
            break;
          }
          if(vetornum[1]==1){
              var pdezena = vetornum[2] + 10;
              console.log("Valor calculado: ", pdezena);
              num_extenso = Centenas(vetornum[0]);
              num_extenso += " e ";
              num_extenso += PrimeiraDezena(pdezena);
            }
            else{
              num_extenso = Centenas(vetornum[0]);
              if(vetornum[1] == 0 && vetornum[2] == 0) break;
              
              if (vetornum[1] != 0){
                num_extenso += " e "
                num_extenso += Dezenas(vetornum[1]);
              }
              
              if(vetornum[2] == 0) break;
              num_extenso += " e ";
              num_extenso += Unidades(vetornum[2]);
            }
          }
          break;



      case 4:
          if(vetor[0] == '-'){
            num_extenso = "menos ";
            
            if((vetornum[1] == 1) && (vetornum[2] == 0) && (vetornum[3] == 0)){
              num_extenso += "cem";
              break;
            }
            
            num_extenso += Centenas(vetornum[1]);
            
            if((vetornum[2] == 0) && (vetornum[3] == 0)) break;
            
            if((vetornum[2]!= 0) && (vetornum[2]!= 1))
                num_extenso += " e " + Dezenas(vetornum[2]);

            if(vetornum[2]==1){
              var pdezena = vetornum[3] + 10;
              num_extenso += " e " + PrimeiraDezena(pdezena);
              break;
            }

            if((vetornum[3] == 0)) break;
            num_extenso += " e " + Unidades(vetornum[3]);  
          }

        else{
          if(vetornum[0]==1){
            num_extenso = "mil";
          }
          if(vetornum[0] != 1)
            num_extenso = Unidades(vetornum[0]) + " mil";
          
          if(vetornum[1]==0 && vetornum[2]==0 && vetornum[3]==0) break;
            
          if(vetornum[1]!=0){
                num_extenso += " e " + Centenas(vetornum[1]);
            }
          if(vetornum[1]==1 && vetornum[2]==0 && vetornum[3]==0){
                num_extenso = "mil e cem";
                break
            }

            if(vetornum[2]!=0 && vetornum[2]!=1){
                num_extenso += " e " + Dezenas(vetornum[2]);
            }

          if(vetornum[2]==1){
                var pdezena = vetornum[3]+10;
                num_extenso += " e " + PrimeiraDezena(pdezena);
            }

            if(vetornum[2]!=1 && vetornum[3]!=0){
                num_extenso += " e " + Unidades(vetornum[3]);
            }

          
          }
          break;


      case 5:
          if(vetor[0] == '-'){
            num_extenso = "menos ";
            
            
            if((vetornum[1] == 1)){
              num_extenso += "mil";
            }
            else{
              num_extenso += Unidades(vetornum[1]);
              num_extenso += " mil";
            }
            if((vetornum[2] == 0) && (vetornum[3] == 0 )&& (vetornum[4] == 0)){ 
              break;
            }        
            
            if((vetornum[2]==1) && (vetornum[3]==0) && (vetornum[4]==0)){
              num_extenso += " e cem";
              break;
            }

            if(vetornum[2] != 0){
              num_extenso += " e ";
              num_extenso += Centenas(vetornum[2]);
            }
              
            if((vetornum[3] != 0) && (vetornum[3] != 1)){
                num_extenso += " e ";
                num_extenso += Dezenas(vetornum[3]);
            }
            if(vetornum[3] == 1){
              var pdezenas = vetornum[4] + 10;
              num_extenso += " e ";
              num_extenso += PrimeiraDezena(pdezenas);
            }
            if((vetornum[4] != 0) && (vetornum[3] != 1)){
              num_extenso += " e ";
              num_extenso += Unidades(vetornum[4]);
            }
            
          }
          
        else{
      
          if(vetornum[0]==1){
            var pdezena = vetornum[1] + 10;
            num_extenso = PrimeiraDezena(pdezena);
          }

          if(vetornum[0]!=1){
            num_extenso = Dezenas(vetornum[0]);
          }
          if((vetornum[1] != 0) && (vetornum[0] != 1)){
            num_extenso += " e ";
            num_extenso += Unidades(vetornum[1]);
          }
          num_extenso += " mil";

          
          if((vetornum[1] == 0) && (vetornum[2] == 0) && (vetornum[3] == 0) && (vetornum[4] == 0))
            break;


          if((vetornum[2]==1) && (vetornum[3]==0) && (vetornum[4]==0)){
            num_extenso += " e cem";
            break;
          }

          if(vetornum[2] != 0){
            num_extenso += " e ";
            num_extenso += Centenas(vetornum[2]);
          }

          if(vetornum[3] == 1){
            var pdezena = vetornum[4] + 10;
            num_extenso += " e ";
            num_extenso += PrimeiraDezena(pdezena); 
          }

          if((vetornum[3] != 0) && (vetornum[3] != 1)){
            num_extenso += " e ";
            num_extenso += Dezenas(vetornum[3]);
          }
          
          if((vetornum[4] != 0) && (vetornum[3] != 1)){
            num_extenso += " e ";
            num_extenso += Unidades(vetornum[4]);
          }
          
        }
          break;

      case 6:
        num_extenso = "menos ";
        if(vetornum[1]==1){
            var pdezena = vetornum[2] + 10;
            num_extenso += PrimeiraDezena(pdezena);
          }

          if(vetornum[1]!=1){
            num_extenso += Dezenas(vetornum[1]);
          }
          if((vetornum[1] != 1) && (vetornum[2] != 0)){
            num_extenso += " e ";
            num_extenso += Unidades(vetornum[2]);
          }
          num_extenso += " mil";

          
          if((vetornum[2] == 0) && (vetornum[3] == 0) && (vetornum[4] == 0) && (vetornum[5] == 0))
            break;


          if((vetornum[3]==1) && (vetornum[4]==0) && (vetornum[5]==0)){
            num_extenso += " e cem";
            break;
          }

          if(vetornum[3] != 0){
            num_extenso += " e ";
            num_extenso += Centenas(vetornum[3]);
          }

          if(vetornum[4] == 1){
            var pdezena = vetornum[5] + 10;
            num_extenso += " e ";
            num_extenso += PrimeiraDezena(pdezena); 
          }

          if((vetornum[4] != 0) && (vetornum[4] != 1)){
            num_extenso += " e ";
            num_extenso += Dezenas(vetornum[4]);
          }
          
          if((vetornum[5] != 0) && (vetornum[4] != 1)){
            num_extenso += " e ";
            num_extenso += Unidades(vetornum[5]);
          }
            

    }

    return num_extenso;
}


const express = require('express')
const app = express()
const port = 3000

app.get('/:numero', (req, res) => {
  res.send({
     extenso: Resultado(req.params.numero),
  })
})

app.get('/', (req, res) => {
  res.send(
     "No final da URL, acrescente / e um número"
  )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
