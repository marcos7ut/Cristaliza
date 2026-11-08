#!/usr/bin/env bash
# Cria uma loja nova a partir do modelo:  bash ferramentas/nova-loja.sh doces-da-cida
set -euo pipefail
nome="${1:?Diga o nome da pasta, ex.: bash ferramentas/nova-loja.sh doces-da-cida}"
[[ "$nome" =~ ^[a-z0-9-]+$ ]] || { echo "Use só letras minúsculas, números e hífen."; exit 1; }
raiz="$(cd "$(dirname "$0")/.." && pwd)"
destino="$raiz/exemplos/$nome"
[ -e "$destino" ] && { echo "Já existe: exemplos/$nome"; exit 1; }
cp -r "$raiz/exemplos/modelo" "$destino"
echo "Pronto: exemplos/$nome"
echo "1) Edite exemplos/$nome/catalogo.js (nome, WhatsApp, cores e produtos)"
echo "2) Fotos: python3 ferramentas/otimizar-imagens.py fotos-originais exemplos/$nome/img"
echo "3) Para aparecer na Rua das lojas, acrescente a loja em LOJAS no assets/app.js"
