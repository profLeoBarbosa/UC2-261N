# Projeto Final — Criar Algoritmos com JavaScript
# A Retomada de Khazad-dûm

---

# Contexto

Após a retomada de Erebor, Balin lidera uma expedição para reconquistar as antigas minas anãs de Khazad-dûm, também conhecidas como Moria.

Você será um dos anões escolhidos para entrar nas profundezas da montanha e enfrentar os perigos escondidos nas minas abandonadas.

Seu objetivo será sobreviver aos perigos das minas e ajudar os anões na retomada do antigo reino.

---

# Objetivo

Desenvolver um sistema de RPG em JavaScript executado no terminal utilizando os conteúdos estudados durante a disciplina.

O projeto deve obrigatoriamente utilizar:

- Variáveis e constantes;
- Condicionais;
- Estruturas de repetição;
- Funções;
- Arrays;
- Objetos literais;
- Números aleatórios;
- Organização de código.

---

# Requisitos Obrigatórios

Seu sistema deve possuir obrigatoriamente:

- criação de personagem;
- escolha de classe;
- sistema de combate;
- inimigos aleatórios;
- uso de funções;
- uso de arrays;
- uso de objetos literais;
- sistema de vitória e derrota;
- combate em turnos;
- mensagens organizadas no terminal.

---

# Requisito Importante

## Todo o código deve ser escrito em inglês.

Isso inclui:

- nomes de variáveis;
- nomes de funções;
- propriedades dos objetos;
- arrays;
- comentários;
- mensagens exibidas no terminal.

---

# Sistema de Personagem

O jogador deve:

- inserir um nome;
- escolher uma classe.

---

# Classes

O jogo deve possuir no mínimo 3 classes diferentes.

Cada classe deve possuir:

- nome;
- vida;
- defesa;
- quantidade de poções;
- uma função de ataque própria.

---

# Estrutura Obrigatória das Classes

As classes devem obrigatoriamente seguir uma estrutura semelhante a esta:

```js
let warrior = {
    className: "Warrior",
    health: 120,
    defense: 8,
    potions: 3,
    attack: warriorAttack
}
```

---

# Sistema de Combate

O combate deve funcionar em turnos.

Durante o turno do jogador, o sistema deve exibir no mínimo as seguintes opções:

```txt
1 - Attack
2 - Defend
3 - Use Potion
```

---

# Sistema de Defesa

Quando o jogador escolher defender:

- o próximo ataque inimigo deve causar menos dano.

Exemplo:
- reduzir dano pela metade;
OU
- bloquear parte do dano.

---

# Sistema de Poções

O jogador deve começar com uma quantidade limitada de poções.

Ao utilizar uma poção:
- recuperar vida;
- diminuir a quantidade de poções.

---

# Sistema de Inimigos

O jogo deve possuir no mínimo 5 inimigos diferentes.

Os inimigos devem ser armazenados em um array.

---

# Estrutura Obrigatória dos Inimigos

Os inimigos devem obrigatoriamente seguir uma estrutura semelhante a esta:

```js
let enemies = [

    {
        name: "Mine Goblin",
        health: 40,
        minDamage: 5,
        maxDamage: 10
    },

    {
        name: "Moria Orc",
        health: 60,
        minDamage: 8,
        maxDamage: 15
    }

]
```

---

# Inimigos Aleatórios

A cada combate, o sistema deve selecionar um inimigo aleatoriamente.

Dica:

```js
Math.floor(Math.random() * enemies.length)
```

Exemplo:

```js
let index = Math.floor(Math.random() * enemies.length)

let selectedEnemy = enemies[index]
```

---

# Objetivo do Jogo

O jogador deve derrotar 5 inimigos para vencer.

O jogo termina quando:

- o jogador derrotar 5 inimigos;
OU
- a vida do jogador chegar a 0.

---

# Funções Obrigatórias

Seu sistema deve possuir obrigatoriamente as seguintes funções:

---

# 1. createCharacter()

## Objetivo
Criar o personagem do jogador.

## Parâmetros
Não obrigatório.

## Retorno
Deve retornar um objeto contendo os dados do personagem.

## Exemplo

```js
let character = createCharacter()
```

---

# 2. generateEnemy(enemies)

## Objetivo
Selecionar um inimigo aleatório.

## Parâmetros

```js
enemies
```

## Retorno
Deve retornar um objeto inimigo.

## Exemplo

```js
let enemy = generateEnemy(enemies)
```

---

# 3. attackClass()

Cada classe deve possuir sua própria função de ataque.

Exemplos:
- warriorAttack()
- berserkerAttack()
- guardianAttack()

---

## Objetivo
Realizar o ataque da classe.

---

## Obrigatoriamente deve:

- mostrar uma mensagem temática no terminal;
- calcular dano aleatório;
- retornar o dano causado.

---

## Exemplo

```js
function warriorAttack() {

    console.log("⚒️ The warrior strikes with a powerful attack!")

    let damage = Math.floor(Math.random() * 9) + 12

    return damage
}
```

---

# 4. attack(character, enemy)

## Objetivo
Aplicar dano ao inimigo.

## Parâmetros

```js
character
enemy
```

## Retorno
Não obrigatório.

---

# 5. defend(character)

## Objetivo
Ativar estado de defesa temporária.

## Parâmetros

```js
character
```

## Retorno
Não obrigatório.

---

# 6. usePotion(character)

## Objetivo
Recuperar vida do personagem.

## Parâmetros

```js
character
```

## Retorno
Não obrigatório.

---

# 7. combatMenu()

## Objetivo
Mostrar as opções do turno do jogador.

## Parâmetros
Não obrigatório.

## Retorno
Deve retornar a opção escolhida.

---

# 8. startCombat(character, enemy)

## Objetivo
Controlar todo o combate.

## Parâmetros

```js
character
enemy
```

## Retorno
Não obrigatório.

---

# Estruturas de Repetição

O jogo deve utilizar estruturas de repetição para:

- manter o jogo funcionando;
- controlar os turnos;
- repetir combates;
- validar entradas quando necessário.

Exemplo:

```js
while (character.health > 0 && defeatedEnemies < 5)
```

---

# Interface no Terminal

O jogo deve possuir mensagens claras e organizadas no terminal.

Exemplo:

```txt
========================
⚔️ COMBAT TURN ⚔️
========================

1 - Attack
2 - Defend
3 - Use Potion
```

---

# Organização do Código

O código deve:

- possuir indentação;
- utilizar nomes claros;
- ser dividido em funções;
- evitar repetição desnecessária.

---

# Dicas

---

# Número aleatório entre mínimo e máximo

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

---

# Selecionar item aleatório de um array

```js
let index = Math.floor(Math.random() * array.length)

let item = array[index]
```

---

# Exibir dano causado

```js
console.log("You dealt " + damage + " damage!")
```

---

# Verificar derrota

```js
if (character.health <= 0)
```

---

# Exemplo de Loop Principal

```js
while (character.health > 0 && defeatedEnemies < 5) {

    let enemy = generateEnemy(enemies)

    startCombat(character, enemy)

}
```

---

# Sistemas Extras (Bônus)

Os seguintes sistemas NÃO são obrigatórios, mas contarão como diferencial:

- ataque crítico;
- chefão final;
- sistema de ouro;
- recuperação entre batalhas;
- habilidades especiais;
- arte ASCII;
- cores no terminal;
- narrativa adicional;
- sons;
- inventário.

---

# Critérios de Avaliação

A avaliação considerará principalmente:

- explicação individual do código;
- entendimento da lógica implementada;
- organização do projeto;
- boas práticas de programação;
- clareza das funções;
- legibilidade do código;
- utilização correta dos conteúdos estudados;
- código escrito em inglês.

---

# Entrega

O projeto deverá ser entregue obrigatoriamente através de um repositório no GitHub.

---

# Boa sorte, filhos de Durin.
