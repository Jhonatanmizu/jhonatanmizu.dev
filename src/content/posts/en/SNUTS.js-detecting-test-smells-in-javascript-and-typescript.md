---
title: "SNUTS.js: Detecting Test Smells in JavaScript/TypeScript"
tags: ["Test Smells", "Software Engineering", "Code Quality", "Scientific Research"]
date: 2026-03-28
cover: "/assets/posts/sbes_2024_concha_curitiba_optimized.jpg"
resume: "During my undergraduate studies in Information Systems, I developed SNUTS.js, a tool for automated detection of test smells in JavaScript and TypeScript projects."
lang: "en"
---

## 🧠 Introduction

During the final stage of my undergraduate degree in Information Systems, in 2024, I developed [SNUTS.js](https://github.com/Jhonatanmizu/SNUTS.js), a tool focused on the automated detection of *test smells* in JavaScript and TypeScript projects.

The motivation came from a recurring problem: although automated tests are essential to ensure quality, many of them end up introducing bad practices that make maintenance, understanding, and evolution of the code more difficult over time.

More than writing tests, it is necessary to ensure they are **good tests**.

---

## 🔍 What are Test Smells?

According to Kucuk and Garousi (2018), *test smells* are poor design choices that degrade the overall quality and effectiveness of test suites. Their presence can make tests less reliable, harder to maintain, and less efficient, compromising the ability to ensure software correctness and robustness.

Some common examples include:

- **Test Without Description** – lack of a clear description of the behavior being tested  
- **Conditional Test** – use of conditional logic within the test  
- **Overcommented Test** – excessive comments that clutter and obscure the code  

These issues make tests more fragile, harder to maintain, and less reliable over time.

---

## ⚙️ What is SNUTS.js?

**SNUTS.js** is a tool that analyzes test code and automatically identifies potential *test smells* using static analysis.

### Key features:

- Support for **JavaScript** and **TypeScript**
- Support for major testing libraries: **Jest, Vitest, Mocha, and Jasmine**
- AST-based analysis (*Abstract Syntax Tree*)
- Customizable rules
- Structured logging for diagnostics
- CI/CD pipeline integration

---

## 🏗️ How does it work?

The tool parses the code to generate an AST and, based on it, applies rules that detect suspicious patterns.

The basic workflow is:

1. Reading test files  
2. Generating the AST  
3. Applying rules (via structured queries)  
4. Generating reports with the detected *smells*  

This approach enables a much more robust analysis compared to using regex or traditional linting tools.

---

## 🧩 Detection Example

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
Detected smell: Conditional Test

➡️ The test uses conditional logic to validate behavior, which can mask distinct scenarios and reduce test clarity. Ideally, each behavior should be validated in separate test cases.

## 🚀 Why does it matter?

Tests are a fundamental part of modern software engineering. However, bad tests can be just as harmful as having no tests at all.

With SNUTS.js, you can:

Improve test readability
Reduce technical debt
Increase test suite reliability
Facilitate long-term maintenance


## 🔬 Academic Contribution

The development of SNUTS.js also had a strong academic focus.

The tool was published at the Brazilian Symposium on Software Engineering (SBES) 2024, in the tools track:

📄 SNUTS.js: Sniffing Nasty Unit Test Smells in Javascript

Later, in 2025, I expanded the research to understand developers’ perceptions of test smells and their practical relevance:

📄 Identifying and Addressing Test Smells in JavaScript: A Developer-Centric Study

These studies reinforce the importance of treating test quality as a real and recurring problem in the industry.

## 🛣️ Next Steps

Some planned improvements:

A more robust CLI for test smell analysis
Integration with IDEs (VSCode, Neovim)
Expansion of the set of detected smells

## 🧪 CLI @snutsjs/core

Recently, I created @snutsjs/core
, which represents the core engine for test smell detection originally developed in SNUTS.js.

The goal is to evolve this foundation to enable deeper integrations, such as IDE extensions and real-time feedback during development.

Currently, the package can already be used via CLI, allowing developers to detect test smells while writing their tests.

Usage:

```ts
npx @snutsjs/core watch .
``` 
➡️ This enables a shift-left approach, identifying issues during the test-writing phase.

## 💭 Conclusion

SNUTS.js was born from a real need: while other languages already had well-established tools for test quality analysis, the JavaScript/TypeScript ecosystem still lacked solutions in this area.

Since then, it has evolved into a tool that helps developers write better, clearer, and more sustainable tests.

More than detecting issues, the goal is to foster a culture of quality and best practices in software development.

If you'd like to follow or contribute to the project, feel free to explore it and share your feedback 🚀
