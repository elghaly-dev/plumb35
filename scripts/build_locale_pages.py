#!/usr/bin/env python3
"""Generate /ar/, /ru/, /zh/ locale index pages from root index.html."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"

LOCALES = {
    "ar": {
        "lang": "ar",
        "dir": "rtl",
        "canonical": "https://plumb-35.elghaly.dev/ar/",
    },
    "ru": {
        "lang": "ru",
        "dir": "ltr",
        "canonical": "https://plumb-35.elghaly.dev/ru/",
    },
    "zh": {
        "lang": "zh",
        "dir": "ltr",
        "canonical": "https://plumb-35.elghaly.dev/zh/",
    },
}


def build():
    src = INDEX.read_text(encoding="utf-8")
    for code, meta in LOCALES.items():
        out = src
        out = out.replace('<html lang="en">', f'<html lang="{meta["lang"]}" dir="{meta["dir"]}">', 1)
        out = out.replace(
            '<link rel="canonical" href="https://plumb-35.elghaly.dev/"/>',
            f'<link rel="canonical" href="{meta["canonical"]}"/>',
            1,
        )
        inject = f'<script>window.PLUMB_PAGE_LANG="{code}";</script>\n'
        out = out.replace("<script>\n/* Set the js flag", inject + "<script>\n/* Set the js flag", 1)
        out = out.replace(
            '<base href="/">',
            "",
        )  # idempotent if missing
        if '<base href="/">' not in out:
            out = out.replace("<head>", '<head>\n<base href="/"/>', 1)
        dest = ROOT / code / "index.html"
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(out, encoding="utf-8")
        print("wrote", dest.relative_to(ROOT))


if __name__ == "__main__":
    build()
