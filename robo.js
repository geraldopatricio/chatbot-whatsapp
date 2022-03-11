const wppconnect = require('@wppconnect-team/wppconnect');
// const firebaseadmin = require('firebase-admin');
/*

const firebaseServiceAccount = require('./Firebase/chatbotwhatsapp-2ef75-firebase-adminsdk-n4y5c-17ff7c442a.json');
firebaseadmin.initializeApp({
    credential: firebaseadmin.credential.cert(firebaseServiceAccount)
});
const db = firebaseadmin.firestore();
*/

var userStages = [];

wppconnect.create({
        session: 'whatsbot',
        autoClose: false,
        puppeteerOptions: { args: ['--no-sandbox'] }
    })
    .then((client) =>
        client.onMessage((message) => {
            console.log('Mensagem digitada pelo usuário: ' + message.body);
            stages(client, message);
        }))
    .catch((error) =>
        console.log(error));

        
function stages(client, message) {
    stage = userStages[message.from];
    switch (stage) {
        case 'Nome':
            const nome = message.body;
            sendWppMessage(client, message.from, 'Obrigada, ' + nome);
            sendWppMessage(client, message.from, 'Digite seu *CPF*:');
            userStages[message.from] = 'CPF';
            break;
        case 'CPF':
            const cpf = message.body;
            sendWppMessage(client, message.from, 'Obrigada por informar seu CPF: ' + cpf);
            sendWppMessage(client, message.from, 'Digite sua *Data de Nascimento*:');
            userStages[message.from] = 'Data de Nascimento';
            break;
        case 'Data de Nascimento':
            const dtNascimento = message.body;
            sendWppMessage(client, message.from, 'Obrigada por informar sua Data de Nascimento: ' + dtNascimento);
            sendWppMessage(client, message.from, 'Obrigado por informar todos os dados!');
            userStages[message.from] = 'Fim';
            break;
        case 'Fim':
            sendWppMessage(client, message.from, 'Fim');
            break;
        default:
            console.log('*Usuário atual* from:' + message.from);
            // saveUser(message);
            sendWppMessage(client, message.from, 'Digite seu *NOME*:');
            sendWppMessage(client, message.from, 'Bem vindo ao Robô de Whatsapp do ChatBotGPSOFT!');
            userStages[message.from] = 'Nome';
    }
}

function sendWppMessage(client, sendTo, text) {
    client
        .sendText(sendTo, text)
        .then((result) => {
            console.log('SUCESSO: ', result);
        })
        .catch((erro) => {
            console.error('ERRO: ', erro);
        });
}

/*
// salvando dados no banco
async function saveUser(message) {
    let user = {
        'pushname': (message['sender']['pushname'] != undefined) ? message['sender']['pushname'] : '',
        'whatsapp': (message.from).replace(/[^\d]+/g, '')
    }
    let newUser = await db.collection('usuarios').add(user);
    return newUser;
}
*/