## Titulo do Projeto
Projeto de um ChatBot Whatsapp

## Pré-Requisitos
Instalar NodeJS
Instalar o gerenciador de pacotes npm
Instalar a IDE Visual Studio Code
Ter 1 número de whatsapp(chip) disponível para o teste

## Iniciando a arquitetura do projeto

Crie uma pasta e execute o comando abaixo para criar o pacote inicial
    npm init   

crie um arquivo robo.js para colocar seu codigo

Instalar a biblioteca do robô:
    npm i --save @wppconnect-team/wppconnect

Após criar seu codigo do Robô parar testar se está funcionando, execute:
    node robo.js

Coloque esta linha no package para iniciar o projeto:
    'start ' : 'node robo.js',

Após colocar as linhas no pacote, execute:
    node robo.js

Após isto pegue seu celular e leia o QRCode que irá apresentar par iniciar os testes

Para cancelar a qualquer momento tecle Control+C no terminal

Instale a biblioteca:
    npm install firebase-admin --save


## Bibliotecas utilizada
wppconnect
Firebase
