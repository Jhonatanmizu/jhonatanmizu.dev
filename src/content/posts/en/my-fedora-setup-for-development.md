---
title: "🐧 My Fedora Setup for Development"
tags: ["Linux", "Setup"]
date: 2026-02-21
cover: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
resume: "My setup using Fedora to gain productivity and develop my software."
lang: "en"
---

# 🐧 My Fedora Setup for Development

### Based on the project: Fedora Mizu Setup Dev

If you use **Fedora Linux** for development, you know that configuring everything manually can be time-consuming. With that in mind, I created the project:

🔗 [https://github.com/Jhonatanmizu/fedora-mizu-setup-dev](https://github.com/Jhonatanmizu/fedora-mizu-setup-dev)

The goal is simple: **automate my entire development environment with a single script**, ensuring productivity, standardization, and speed whenever I need to reinstall the system.

---

# 🚀 What is Fedora Mizu Setup Dev?

**Fedora Mizu Setup Dev** is an opinionated shell script that:

- ⚡ Automates the installation of essential packages
- 📦 Configures a complete development environment
- 🗂️ Applies dotfiles using GNU Stow
- 🎨 Customizes GNOME (themes, extensions, shortcuts)
- 📦 Uses only `dnf` and `flatpak` (no Snap)

It was built to be **reproducible, simple, and fast**.

---

# 🧠 Setup Philosophy

My focus is on:

- 🔁 Reproducibility
- 🧹 Clean system
- ⚡ Performance
- 🧩 Modularity with dotfiles
- 🧠 Version-controlled setup on Git

Whenever I format my computer or need to set up a new machine, I just run the script.

---

# 🛠️ Development Stack

## 🧩 Base Tools

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

## 💻 Editor and Terminal

- **Neovim** — My primary editor
- **VS Code** — For specific projects
- **Alacritty** — Fast and minimalist terminal
- **Starship** — Modern and informative prompt
- **Zsh** — Main shell

---

## 🧰 Version Management

- **mise** — Version manager (Node, Python, etc.)

---

## 🐳 Containers

- Docker
- Docker Compose

---

## 📱 Mobile

- Android Studio

---

# 🎨 GNOME Customization

The setup also configures the graphical environment:

## 🧩 GNOME Extensions

- Dash to Dock
- Blur My Shell
- Just Perfection
- AppIndicator

## 🎨 Themes

- GTK Theme: Layan
- Icons: Tela

## ⚙️ Tweaks

- Custom shortcuts
- Performance adjustments
- Visual tweaks

---

# 📦 Apps via Flatpak

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

Dotfiles are organized with **GNU Stow**, allowing for modularity and easy maintenance.

Included configurations:

- `zsh`
- `git`
- `nvim`
- `alacritty`
- `starship`
- `mise`
- `ulauncher`

This allows updating each part of the environment without breaking the rest.

---

# ⚡ How to use

```bash
git clone https://github.com/Jhonatanmizu/fedora-mizu-setup-dev.git
cd fedora-mizu-setup-dev
chmod +x setup.sh
./setup.sh
```

After execution, the system will be ready for development.

# 🧩 Why keep this versioned?

Because personal infrastructure is also code.
Benefits:

Total reproducibility 
- Change history
- Incremental environment evolution
- Easy sharing

# 💙 Conclusion

This setup represents my actual workflow as a developer.

It eliminates repetitive tasks and allows me to focus on what really matters: building software.

If you want to contribute or use it as a base:

👉 https://github.com/Jhonatanmizu/fedora-mizu-setup-dev

If you also use Fedora, I strongly recommend creating your own versioned setup. It is a game-changer for productivity.