#!/usr/bin/env python3
"""Confere o site antes de publicar: links quebrados, páginas pesadas, imagens grandes,
imagens embutidas em base64 e números de WhatsApp malformados.  Uso: python3 ferramentas/verificar.py"""
import re, sys
from pathlib import Path
from urllib.parse import urlsplit, unquote

RAIZ = Path(__file__).resolve().parent.parent
LIMITE_HTML = 200 * 1024
LIMITE_IMG = 300 * 1024
LIMITE_BASE64 = 10 * 1024
problemas = []
# Arquivos que seguem um design fechado e ficam exatamente como vieram (não são "corrigidos" pela verificação):
# o site original da Cristaliza (logo e bibliotecas embutidos) e os design systems usados nos exemplos.
PRESERVADOS = ('index.html', 'exemplos/moda/assets/')
def preservado(rel): return any(str(rel) == x or str(rel).startswith(x) for x in PRESERVADOS)

def alvo_existe(base: Path, ref: str) -> bool:
    p = unquote(urlsplit(ref).path)
    if not p:
        return True
    t = (base.parent / p).resolve()
    if p.endswith('/'):
        t = t / 'index.html'
    return t.exists()

for arq in sorted(RAIZ.rglob('*')):
    if any(part.startswith('.') for part in arq.relative_to(RAIZ).parts) or not arq.is_file():
        continue
    rel = arq.relative_to(RAIZ)
    tam = arq.stat().st_size
    if arq.suffix in {'.webp', '.jpg', '.jpeg', '.png', '.avif'} and tam > LIMITE_IMG and not preservado(rel):
        problemas.append(f'{rel}: imagem com {tam // 1024} KB (máximo {LIMITE_IMG // 1024} KB)')
    if arq.suffix not in {'.html', '.css', '.js'}:
        continue
    txt = arq.read_text(encoding='utf-8')
    for m in re.finditer(r'data:[a-z]+/[a-z0-9.+-]+;base64,([A-Za-z0-9+/=]+)', txt):
        if len(m.group(1)) > LIMITE_BASE64 and not preservado(rel):
            problemas.append(f'{rel}: imagem/fonte embutida em base64 ({len(m.group(1)) // 1024} KB). Salve como arquivo.')
    for n in re.findall(r'wa\.me/(\d*)', txt):
        if n and not re.fullmatch(r'55\d{10,11}', n):
            problemas.append(f'{rel}: número de WhatsApp estranho: {n}')
    if arq.suffix == '.html':
        if tam > LIMITE_HTML and not preservado(rel):
            problemas.append(f'{rel}: página com {tam // 1024} KB (máximo {LIMITE_HTML // 1024} KB)')
        for ref in re.findall(r'(?:href|src)="([^"]+)"', txt):
            if re.match(r'^(https?:|mailto:|tel:|#|data:|\$\{)', ref) or ref.startswith('data-') or ref.startswith('/'):
                continue
            if not alvo_existe(arq, ref):
                problemas.append(f'{rel}: link quebrado -> {ref}')
    if arq.suffix == '.css':
        for ref in re.findall(r'url\(["\']?([^"\')]+)', txt):
            if not ref.startswith(('data:', 'http', '#')) and not alvo_existe(arq, ref):
                problemas.append(f'{rel}: arquivo do CSS não encontrado -> {ref}')

if problemas:
    print('Encontrei', len(problemas), 'problema(s):')
    print('\n'.join(' - ' + p for p in problemas))
    sys.exit(1)
print('Tudo certo: links, pesos e números conferidos.')
