---
title: "SNUTS.js: Detectando Test Smells em JavaScript/TypeScript"
tags: ["Test Smells", "Engenharia de Software", "Qualidade de Código", "Pesquisa Científica"]
date: 2026-03-28
cover: "/assets/posts/sbes_2024_concha_curitiba_optimized.jpg"
resume: "Durante minha graduação em Sistemas de Informação, desenvolvi o SNUTS.js, uma ferramenta para detecção automatizada de test smells em projetos JavaScript e TypeScript."
lang: "pt"
---

## 🧠 Introdução

Durante o final da minha graduação em Sistemas de Informação, em 2024, desenvolvi o [SNUTS.js](https://github.com/Jhonatanmizu/SNUTS.js), uma ferramenta voltada para a detecção automatizada de *test smells* em projetos JavaScript e TypeScript.

A motivação surgiu de um problema recorrente: embora testes automatizados sejam essenciais para garantir qualidade, muitos deles acabam introduzindo más práticas que dificultam a manutenção, o entendimento e a evolução do código ao longo do tempo.

Mais do que escrever testes, é necessário garantir que eles sejam **bons testes**.

---

## 🔍 O que são Test Smells?

De acordo com Kucuk e Garousi (2018), *test smells* são escolhas de design inadequadas que degradam a qualidade geral e a eficácia das suítes de testes. Sua presença pode tornar os testes menos confiáveis, mais difíceis de manter e menos eficientes, comprometendo a capacidade de garantir a correção e a robustez do software.

Alguns exemplos comuns incluem:

- **Test Without Description** – ausência de descrição clara do comportamento sendo testado  
- **Conditional Test** – uso de lógica condicional dentro do teste  
- **Overcommented Test** – excesso de comentários que poluem e mascaram o código  

Esses problemas tornam os testes mais frágeis, difíceis de manter e menos confiáveis ao longo do tempo.

---

## ⚙️ O que é o SNUTS.js?

O **SNUTS.js** é uma ferramenta que analisa código de testes e identifica automaticamente possíveis *test smells* utilizando análise estática.

### Principais características:

- Suporte a **JavaScript** e **TypeScript**
- Suporte às principais bibliotecas de teste: **Jest, Vitest, Mocha e Jasmine**
- Análise baseada em AST (*Abstract Syntax Tree*)
- Regras customizáveis
- Logs estruturados para diagnóstico
- Integração com pipelines de CI/CD

---

## 🏗️ Como funciona?

A ferramenta realiza o parsing do código para gerar uma AST e, a partir dela, aplica regras que detectam padrões suspeitos.

O fluxo básico é:

1. Leitura dos arquivos de teste  
2. Geração da AST  
3. Aplicação de regras (via queries estruturais)  
4. Geração de relatórios com os *smells* encontrados  

Essa abordagem permite uma análise muito mais robusta do que o uso de regex ou ferramentas tradicionais de lint.

---

## 🧩 Exemplo de Detecção

```ts
it("should test everything", () => {
   const userAge = 18;
   const valid = userService.isValidUserAge(userAge)
   
   if (userAge >= 18) {
     expect(valid).toBeEqual(true)
   } else {
     expect(valid).toBeEqual(false)
   }
});
``` 

Smell identificado: Conditional Test

➡️ O teste utiliza lógica condicional para validar o comportamento, o que pode mascarar cenários distintos e reduzir a clareza do teste. Idealmente, cada comportamento deveria ser validado em testes separados.

## 🚀 Por que isso importa?

Testes são parte fundamental da engenharia de software moderna. No entanto, testes ruins podem ser tão prejudiciais quanto a ausência deles.

Com o SNUTS.js, é possível:

Melhorar a legibilidade dos testes
Reduzir débito técnico
Aumentar a confiabilidade da suíte de testes
Facilitar a manutenção a longo prazo


## 🔬 Contribuição Acadêmica

O desenvolvimento do SNUTS.js também teve um forte viés acadêmico.

A ferramenta foi publicada no Simpósio Brasileiro de Engenharia de Software (SBES) 2024, na trilha de ferramentas:

- 📄 [SNUTS.js: Sniffing Nasty Unit Test Smells in Javascript](https://sol.sbc.org.br/index.php/sbes/article/view/30417)

Posteriormente, em 2025, evoluí a pesquisa para compreender a percepção de desenvolvedores sobre test smells e sua relevância na prática:

- 📄 [Identifying and Addressing Test Smells in JavaScript: A Developer-Centric Study](https://sol.sbc.org.br/index.php/sbes/article/view/36998)

Esses estudos reforçam a importância de tratar qualidade de testes como um problema real e recorrente na indústria.


## 🛣️ Próximos Passos

Algumas evoluções planejadas:

CLI mais robusta para análise de test smells
Integração com IDEs (VSCode, Neovim)
Expansão do conjunto de smells detectados


## 🧪 CLI @snutsjs/core

Recentemente, criei o [@snutsjs/core](https://www.npmjs.com/package/@snutsjs/core)
, que representa o núcleo de detecção de test smells previamente desenvolvido no SNUTS.js.

O objetivo é evoluir essa base para permitir integrações mais profundas, como extensões de IDE e feedback em tempo real durante o desenvolvimento.

Atualmente, o pacote já pode ser utilizado via CLI, permitindo detectar test smells enquanto o desenvolvedor escreve seus testes.

Uso:

```
npx @snutsjs/core watch .
```
➡️ Isso permite uma abordagem shift-left, identificando problemas ainda durante a escrita dos testes.


## 💭 Conclusão

O SNUTS.js nasceu de uma necessidade real: enquanto outras linguagens já possuíam ferramentas consolidadas para análise de qualidade de testes, o ecossistema JavaScript/TypeScript ainda carecia de soluções nesse sentido.

Desde então, evoluiu para uma ferramenta que auxilia desenvolvedores a escrever testes melhores, mais claros e mais sustentáveis.

Mais do que detectar problemas, a proposta é fomentar uma cultura de qualidade e boas práticas no desenvolvimento de software.

Se você quiser acompanhar ou contribuir com o projeto, fique à vontade para explorar e dar feedback 🚀
