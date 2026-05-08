# Exercício — Sistema Arcano da Torre dos Magos

## Lore

Na antiga região de Eldoria ergue-se a imponente **Torre dos Magos**, uma construção ancestral criada há séculos pelos Arquimagos do Conselho Arcano.

Dizem que sua estrutura não é sustentada apenas por pedra e magia comum, mas sim por quatro Cristais Primordiais espalhados pelos andares da torre.

Cada cristal concentra uma reserva de mana responsável por manter ativa a grande Barreira Arcana que protege o reino contra criaturas sombrias, tempestades mágicas e invasões vindas das Terras Nebulosas.

Entretanto, os cristais não são eternos.

Com o passar do tempo, batalhas mágicas, feitiços proibidos e o desgaste natural da energia arcana fazem com que a mana dos cristais diminua.

Dependendo da quantidade de mana restante, cada cristal assume um estado diferente:

- **ESTÁVEL** → o cristal possui energia suficiente e funciona normalmente.
- **INSTÁVEL** → o cristal começa a apresentar falhas e oscilações mágicas perigosas.
- **MORTO** → toda a mana foi consumida; o cristal perde completamente seu poder.

Os magos da torre precisam monitorar constantemente o nível de mana de cada cristal.

Se muitos cristais entrarem em estado instável — ou pior, mortos — a Barreira Arcana pode colapsar, deixando Eldoria vulnerável ao caos mágico.

Seu papel é atuar como aprendiz dos Arquimagos e desenvolver um sistema capaz de analisar os cristais, identificar seus estados e determinar a situação atual da Torre dos Magos.

---

# Regras

Você deve usar:

- arrays
- funções
- condicionais
- `readline-sync`

---

# O Programa Deve Fazer

## 1. Ler o nome de 4 cristais mágicos

Exemplo:

- Rubi Solar
- Safira Lunar
- Ônix Sombrio
- Esmeralda Viva

Guardar em um array.

---

## 2. Ler a mana de cada cristal

Valores entre 0 e 100.

Guardar em outro array.

---

# Regras do Sistema

## Níveis de Mana

Crie uma função chamada `classificarMana()`:

- mana menor que 25 → `"MORTO"`
- mana entre 25 e 59 → `"INSTÁVEL"`
- mana maior ou igual a 60 → `"ESTÁVEL"`

---

# Desafio Principal

Você deverá criar funções reutilizáveis para evitar repetição.

---

# Funções Obrigatórias

## 1. `classificarMana(mana)`

Retorna o status do cristal.

---

## 2. `mostrarCristal(nome, mana)`

Mostra:

```txt
Rubi Solar -> 80 -> ESTÁVEL
```

Essa função deve reutilizar `classificarMana()`.

---

## 3. `somarMana(a, b, c, d)`

Retorna a soma total.

---

## 4. `mediaMana(total)`

Retorna a média da mana.

---

## 5. `statusTorre(media)`

Regras:

- média menor que 30 → `"COLAPSO IMINENTE"`
- média entre 30 e 59 → `"BARREIRA INSTÁVEL"`
- média maior ou igual a 60 → `"TORRE SEGURA"`

---

# Saída Esperada

```txt
===== TORRE DE ELDORIA =====

Rubi Solar -> 80 -> ESTÁVEL
Safira Lunar -> 44 -> INSTÁVEL
Ônix Sombrio -> 12 -> MORTO
Esmeralda Viva -> 91 -> ESTÁVEL

Mana total: 227
Mana média: 56.75

STATUS DA TORRE: BARREIRA INSTÁVEL
```

---

# Objetivo Pedagógico

Esse exercício força o aluno a:

- reutilizar funções
- evitar repetição excessiva
- trabalhar arrays
- separar responsabilidades
- usar funções menores e organizadas

---

# Exemplo de Estrutura Esperada

```js
function classificarMana(mana) {

}

function mostrarCristal(nome, mana) {

}

function statusTorre(media) {

}
```

---

# Desafio Extra

Crie uma função `existeCristalMorto()` que retorna `true` se qualquer cristal estiver com mana abaixo de 25.
