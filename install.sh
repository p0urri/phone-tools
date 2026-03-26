#!/bin/bash
# Script d'installation pour PHONE CONTROL

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo " Installation de PHONE CONTROL..."

# Vérifier si ADB est installé
if ! command -v adb &> /dev/null; then
    echo -e "${RED} ADB n'est pas installé${NC}"
    echo "Installation: sudo apt install adb"
    exit 1
fi

# Copier le script
sudo cp phone /usr/local/bin/
sudo chmod +x /usr/local/bin/phone

echo -e "${GREEN} Installation terminée !${NC}"
echo "Utilise 'phone' pour lancer l'outil"