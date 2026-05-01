const ask = require('readline-sync')

function criarUsuario(nome, idade, cidade, hobbies) {
    return [nome, idade, cidade, hobbies];
}

function formatarHobbies(hobbies) {
    return hobbies.slice(0, -1).join(', ') + ' e ' + hobbies.slice(-1);
}

function gerarDescricao(usuario){
    return `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de ${formatarHobbies(usuario[3])}`
}

function adicionarUsuario(usuarios, usuario){
    let usuarioAtualizado = [...usuarios, usuario]
    return usuarioAtualizado
}

function gerarRelatorio(usuarios){
    return `Total de usuarios: ${usuarios.length}`
}


//----------------------------------------------




let usuarios = []

// CRIACAO DO USUARIO ---------
let nome = ask.question('Digite seu nome: ')
let idade = Number(ask.question('Digite sua idade: '))
let cidade = ask.question('Digite sua cidade: ')
let primeiroHobby = ask.question('Digite seu primeiro Hobbie: ')
let segundoHobby = ask.question('Digite o segundo hobby: ')
let terceiroHobby = ask.question('Digite o terceiro hobby: ')
let user1 = criarUsuario(nome, idade, cidade, [primeiroHobby, segundoHobby, terceiroHobby])
usuarios = adicionarUsuario(usuarios, user1)
//-----------


console.clear()
console.log(gerarDescricao(user1))
console.log(gerarRelatorio(usuarios))

