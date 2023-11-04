# i18nGPT

This library helps you translate your app into other languages using country codes and ChatGPT's API

## Install

```bash
git clone https://github.com/joeblau/i18n-gpt.git
cd i18n-gpt
npm install
```

## Run

```bash
node index.js --file <path-to-input> --codes <language-codes-comma-separated>
```

## File format

An example of an input file

```
"key_1" = "value_translation_1";
"key_2" = "value_translation_2";
"key_3" = "value_translation_3";
```

License: MIT
