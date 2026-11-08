#!/usr/bin/env python3
"""Deixa as fotos leves para o site: converte para WebP, largura máxima 720 px, sem dados de GPS/EXIF.

Uso:  python3 ferramentas/otimizar-imagens.py pasta-com-fotos-originais exemplos/minha-loja/img
Precisa do Pillow:  pip install pillow
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

if len(sys.argv) != 3:
    sys.exit(__doc__)
origem, destino = Path(sys.argv[1]), Path(sys.argv[2])
destino.mkdir(parents=True, exist_ok=True)
LARGURA, QUALIDADE = 720, 72

for f in sorted(origem.iterdir()):
    if f.suffix.lower() not in {'.jpg', '.jpeg', '.png', '.webp', '.heic'}:
        continue
    im = ImageOps.exif_transpose(Image.open(f))       # gira certo e descarta o EXIF
    if im.width > LARGURA:
        im = im.resize((LARGURA, round(im.height * LARGURA / im.width)), Image.LANCZOS)
    if im.mode not in ('RGB', 'RGBA'):
        im = im.convert('RGB')
    nome = f.stem.lower().replace(' ', '-') + '.webp'
    im.save(destino / nome, 'WEBP', quality=QUALIDADE, method=6)
    print(f'{f.name:40} -> {nome:30} {(destino / nome).stat().st_size // 1024} KB')
