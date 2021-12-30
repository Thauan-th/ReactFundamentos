// function gerarNumeros(qtdNum){
//     if(qtdNum >15 ||qtdNum<=0){
//         return 'Voce inseriu um numero errado'
//     }
//     let vetor = [];
//     while(qtdNum !=0){
//         vetor.push(parseInt(Math.random()*(100)+0))
//         qtdNum--
//     }
//     return vetor
// }
function gerarNumeros(qtde){
    const numeros = Array(qtde).fill(0).reduce((nums)=>{
        const novoNumero =  gerarNumeroNaoContido(1,60,nums)
        return [...nums, novoNumero]},[]).sort((n1,n2)=>n1-n2)   
    return numeros;
    }
let megasena = gerarNumeros(7);
console.log(megasena);

function gerarNumeroNaoContido(min,max,array){
    const aleatorio = parseInt(Math.random()*(max+1-min))+min;
    return array.includes(aleatorio)?gerarNumeroNaoContido(min,max,array):aleatorio
}
