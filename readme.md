## Titulo do Projeto
Projeto de um ChatBot Whatsapp

## Fonte
https://medium.com/como-programar-em-1-dia/como-fazer-um-rob%C3%B4-de-whatsapp-chatbot-em-1-dia-644ee98054d7

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


## Biblioteca Brasileira utilizada
wppconnect
Firebase
