let programacao = ['Heloa', 'Maria Rafaela', 'Maria Eduarda', 'Diego', 'João Victor', 'Gabriel', 'Luana', 'Thauanne', 'Aline', 'Lucas'];

let seguranca = ['Leonardo', 'Miguel', 'João Paulo', 'Rafael'];

seguranca.pop();
programacao.push("Rafael");

console.log("Time de seguanca", programacao);
console.log("##########################")
console.log("Time de seguranca:", seguranca)


//let empresa = funcionarios.concat (segurança)
//console.log (empresa)

let funcionarios = programacao.concat(seguranca);

console.log(funcionarios);