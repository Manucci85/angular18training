#!/usr/bin/env bash

# Nom du fichier de sortie
output="code.txt"

# Chemin du dossier
folder="./staticDesign"

# Vider le fichier de sortie s'il existe déjà
> "$output"

# Parcourir tous les fichiers du dossier spécifié
for file in "$folder"/*; do
    # Vérifier que c'est bien un fichier régulier (pas un dossier, un lien, etc.)
    if [ -f "$file" ]; then
        # Écrire le nom du fichier
        echo "$(basename "$file")" >> "$output"
        # Écrire le contenu du fichier
        cat "$file" >> "$output"
        # Ajouter une ligne vide pour séparer les fichiers
        echo "" >> "$output"
    fi
done
