# 📋 Trabalho Avaliativo – Sistema de Cadastro (sem objetos)

## 🎯 Objetivo

Criar um sistema simples em JavaScript que trabalha com:

* dados de usuários
* arrays
* funções
* manipulação de strings

---

## 🧩 Parte 1 – Criar um Usuário

Crie uma função:

```js
criarUsuario(nome, idade, cidade, hobbies)
```

Essa função deve retornar um **array com os dados do usuário**:

```js
["João", 25, "Porto Alegre", ["música", "jogos"]]
```

---

## 🧩 Parte 2 – Formatar Hobbies

Crie:

```js
formatarHobbies(hobbies)
```

Entrada:

```js
["música", "jogos", "futebol"]
```

Saída:

```
"música, jogos e futebol"
```

---

## 🧩 Parte 3 – Gerar Descrição

Crie:

```js
gerarDescricao(usuario)
```

Lembrando que `usuario` é um array.

Saída esperada:

```
"João tem 25 anos, mora em Porto Alegre e gosta de: música, jogos e futebol."
```

👉 Dica: acesse os dados usando índices do array:

* nome → `usuario[0]`
* idade → `usuario[1]`
* cidade → `usuario[2]`
* hobbies → `usuario[3]`

---

## 🧩 Parte 4 – Sistema de Cadastro

Crie um array:

```js
const usuarios = []
```

---

### ➤ Adicionar usuário

```js
adicionarUsuario(usuarios, usuario)
```

Retorna um novo array com o usuário adicionado.

---

### ➤ Gerar relatório

```js
gerarRelatorio(usuarios)
```

Saída:

```
"Total de usuários: 2"
```

---

## ⭐ Desafios Extras (vale bônus)

* Colocar o nome em maiúsculo

```js
listarDescricoes(usuarios)
```

* Criar função que retorna todas as descrições

```js
listarCidades(usuarios)
```

* Criar função que retorna todas as cidades dos usuários

---

## 📊 Critérios de Avaliação

* ✔ Coompreensão e explicação do código
* ✔ Organização do código

---

## 🚀 Entrega

* Entregar o código em um arquivo `.js`, subido em um repositório próprio no github
* Enviar o link do repositório para prof.lebc@gmail.com
