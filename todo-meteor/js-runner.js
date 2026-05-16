#!/usr/bin/env node

// js-runner.js: executa um arquivo JS e formata erros de forma amigável
const { spawn } = require('child_process');
const path = require('path');

if (process.argv.length < 3) {
  console.error('\x1b[31m[ERRO]\x1b[0m Informe o arquivo JS para rodar. Exemplo: node js-runner.js meuArquivo.js');
  process.exit(1);
}

const file = process.argv[2];
const absPath = path.isAbsolute(file) ? file : path.join(process.cwd(), file);

const child = spawn('node', [absPath], { stdio: 'pipe' });

child.stdout.on('data', (data) => {
  process.stdout.write(`\x1b[32m[SAÍDA]\x1b[0m ${data}`);
});

child.stderr.on('data', (data) => {
  process.stderr.write(`\x1b[31m[ERRO]\x1b[0m ${data}`);
});

child.on('close', (code) => {
  if (code === 0) {
    console.log('\x1b[34m[FIM]\x1b[0m Execução concluída com sucesso.');
  } else {
    console.log(`\x1b[31m[FIM]\x1b[0m Execução terminou com erro (código ${code}).`);
  }
});
