---
title: "🐧 Meu Setup Fedora para Desenvolvimento"
tags: ["Linux", "Setup"]
date: 2026-02-21
cover: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
resume: "Meu setup utilizando o fedora para ganhar produtividade e desenvolver os meus softwares."
---

# 🐧 Meu Setup Fedora para Desenvolvimento

### Baseado no projeto: Fedora Mizu Setup Dev

Se você usa **Fedora Linux** para desenvolvimento, sabe que configurar tudo manualmente pode ser demorado. Pensando nisso, criei o projeto:

🔗 https://github.com/Jhonatanmizu/fedora-mizu-setup-dev

O objetivo é simples: **automatizar meu ambiente de desenvolvimento completo com um único script**, garantindo produtividade, padronização e rapidez sempre que preciso reinstalar o sistema.

---

# 🚀 O que é o Fedora Mizu Setup Dev?

O **Fedora Mizu Setup Dev** é um script shell opinativo que:

- ⚡ Automatiza a instalação de pacotes essenciais
- 📦 Configura ambiente de desenvolvimento completo
- 🗂️ Aplica dotfiles usando GNU Stow
- 🎨 Personaliza GNOME (temas, extensões, atalhos)
- 📦 Usa apenas `dnf` e `flatpak` (sem Snap)

Ele foi feito para ser **reprodutível, simples e rápido**.

---

# 🧠 Filosofia do Setup

Meu foco é:

- 🔁 Reprodutibilidade
- 🧹 Sistema limpo
- ⚡ Performance
- 🧩 Modularidade com dotfiles
- 🧠 Setup versionado no Git

Sempre que formato o computador ou preciso configurar uma nova máquina, basta rodar o script.

---

# 🛠️ Stack de Desenvolvimento

## 🧩 Ferramentas Base

- `git`
- `curl`
- `wget`
- `make`
- `gcc-c++`
- `openssl`
- `fzf`
- `ripgrep`
- `bat`
- `fastfetch`
- `btop`

---

## 💻 Editor e Terminal

- **Neovim** — Meu editor principal
- **VS Code** — Para projetos específicos
- **Alacritty** — Terminal rápido e minimalista
- **Starship** — Prompt moderno e informativo
- **Zsh** — Shell principal

---

## 🧰 Gerenciamento de Versões

- **mise** — Gerenciador de versões (Node, Python, etc.)

---

## 🐳 Containers

- Docker
- Docker Compose

---

## 📱 Mobile

- Android Studio

---

# 🎨 Personalização do GNOME

O setup também configura o ambiente gráfico:

## 🧩 Extensões GNOME

- Dash to Dock
- Blur My Shell
- Just Perfection
- AppIndicator

## 🎨 Temas

- Tema GTK: Layan
- Ícones: Tela

## ⚙️ Ajustes

- Atalhos personalizados
- Ajustes de performance
- Tweaks visuais

---

# 📦 Aplicativos via Flatpak

- Obsidian
- Spotify
- Dropbox
- Vivaldi
- VLC
- GIMP
- Krita
- Inkscape
- Kdenlive
- LocalSend

---

# 📁 Dotfiles

Os dotfiles são organizados com **GNU Stow**, permitindo modularidade e fácil manutenção.

Configurações incluídas:

- `zsh`
- `git`
- `nvim`
- `alacritty`
- `starship`
- `mise`
- `ulauncher`

Isso permite atualizar cada parte do ambiente sem quebrar o resto.

---

# ⚡ Como usar

```bash
git clone https://github.com/Jhonatanmizu/fedora-mizu-setup-dev.git
cd fedora-mizu-setup-dev
chmod +x setup.sh
./setup.sh
```

Após executar, o sistema estará pronto para desenvolvimento.

# 🧩 Por que manter isso versionado?

## Porque infraestrutura pessoal também é código.

Benefícios:

- Reprodutibilidade total
- Histórico de mudanças
- Evolução incremental do ambiente
- Fácil compartilhamento

# 💙 Conclusão

Esse setup representa meu workflow real como desenvolvedor.

Ele elimina tarefas repetitivas e me permite focar no que realmente importa: construir software.

Se quiser contribuir ou usar como base:

👉 https://github.com/Jhonatanmizu/fedora-mizu-setup-dev

Se você também usa Fedora, recomendo fortemente criar seu próprio setup versionado.
É um divisor de águas na produtividade.
