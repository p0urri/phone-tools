# PHONE CONTROL v4.1.3

**Un outil de contrôle à distance pour Android**

[![Version](https://img.shields.io/badge/version-4.0-green.svg)](https://github.com/shonor/phone-tools)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Bash](https://img.shields.io/badge/shell-bash-red.svg)](https://www.gnu.org/software/bash/)

## Description

PHONE CONTROL est un outil en ligne de commande permettant de contrôler un téléphone Android depuis un PC. Il offre des fonctionnalités avancées comme le streaming d'écran, le scan réseau, la capture d'écran, et bien plus.

### Fonctionnalités

| Commande | Description |
|----------|-------------|
| `connect` | Connexion à un téléphone via ADB Wi-Fi |
| `info` | Affichage des informations complètes |
| `contacts` | Export des contacts |
| `emails` | Récupération des comptes email |
| `location` | Google Maps + capture d'écran |
| `capture` | Capture d'écran instantanée |
| `stream` | Streaming en direct de l'écran |
| `scan` | Scan réseau complet (ports, vulnérabilités) |
| `bt-list` | Détection des appareils Bluetooth |
| `install` | Installation d'applications |
| `screen` | Verrouillage à distance |

## ⚠️ Conditions d'utilisation

**Ce logiciel est fourni à des fins éducatives uniquement.**

- Utilisez-le uniquement sur vos propres appareils
- Ne l'utilisez pas sans consentement explicite
- Respectez les lois et règlements en vigueur
- L'auteur décline toute responsabilité en cas d'usage abusif

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/shonor/phone-tools.git
cd phone-tools

# Rendre le script exécutable
chmod +x phone

# Option: installer dans /usr/local/bin
sudo ./install.sh