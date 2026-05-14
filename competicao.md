# Exercícios de JavaScript — Lógica de Programação

Crie 3 exercícios de JavaScript para alunos iniciantes.

Os exercícios devem ser simples e focados em fixação de lógica de programação.

---

# Exercício 1 — Cadastro de Produtos

Crie um sistema simples de cadastro de produtos utilizando um array de arrays.

## Regras

Cada produto deve ser armazenado da seguinte forma:

```js
[
  id,
  nome,
  precoVenda,
  precoFabricacao,
  quantidadeEstoque
]
```

Exemplo:

```js
[
  1,
  "Mouse Gamer",
  150,
  80,
  12
]
```

Todos os produtos devem ficar armazenados dentro de um único array principal.

O ID deve ser gerado automaticamente, começando em 1 e aumentando de 1 em 1.

## O sistema deve possuir as seguintes funções

### cadastrarProduto()

Deve cadastrar um novo produto no array principal.

### buscarProdutoPorId()

Deve receber um ID e retornar o produto correspondente.

### buscarProdutoPorNome()

Deve receber um nome e procurar produtos com esse nome.

### mostrarProdutos()

Deve mostrar todos os produtos formatados no terminal.

Exemplo de saída:

```txt
ID: 1
Nome: Mouse Gamer
Preço de Venda: R$150
Preço de Fabricação: R$80
Quantidade em Estoque: 12
```

---

# Exercício 2 — Cadastro de Usuários

Crie um sistema simples de usuários utilizando array de arrays.

## Estrutura

Cada usuário deve ser armazenado assim:

```js
[
  usuario,
  senha
]
```

Todos os usuários devem ficar dentro de um array principal.

## O sistema deve possuir

### criarConta()

Deve cadastrar um novo usuário e senha.

### fazerLogin()

Deve verificar se o usuário digitado possui a senha correta.

Se estiver correto:

```txt
Login realizado com sucesso
```

Caso contrário:

```txt
Usuário ou senha incorretos
```

## Requisito extra

Quando o usuário estiver digitando a senha no terminal, os caracteres digitados devem aparecer como `*`.

Exemplo:

```txt
Digite sua senha:
******
```

---

# Exercício 3 — Controle de Notas

Crie um sistema simples de notas escolares utilizando arrays.

Cada aluno deve possuir:

```js
[
  nome,
  nota1,
  nota2,
  nota3
]
```

## O sistema deve possuir

### cadastrarAluno()

Cadastra um novo aluno.

### calcularMedia()

Recebe um aluno e calcula sua média.

### verificarSituacao()

Mostra:

- “Aprovado” se média >= 7
- “Recuperação” se média >= 5 e < 7
- “Reprovado” se média < 5

### mostrarAlunos()

Mostra todos os alunos formatados no terminal.

Exemplo:

```txt
Aluno: Carlos
Notas: 7, 8, 9
Média: 8
Situação: Aprovado
```

---

# Regras gerais

- Utilize funções para organizar o código.
- Utilize arrays de arrays.
- Utilize laços de repetição sempre que necessário.
- Não utilize objetos.
- Não utilize bibliotecas externas.
- O código deve funcionar no terminal do Node.js.
