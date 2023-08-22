const venom = require('venom-bot');
const tratarNumero = require('./services/tratarNumero.js')
const responderMensagem = require('./services/responderMensagem.js')

venom
  .create({session: 'teste'},
  (base64Qrimg, asciiQR, attempts, urlCode) => {
    console.log('Number of attempts to read the qrcode: \n', attempts);
    //console.log('Terminal qrcode: \n', asciiQR);
    //console.log('base64 image string qrcode: \n', base64Qrimg);
    console.log('urlCode (data-ref): \n', urlCode);
  },
  (statusSession, session) => {
    console.log('Status Session: ', statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken || chatsAvailable || deviceNotConnected || serverWssNotConnected || noOpenBrowser || initBrowser || openBrowser || connectBrowserWs || initWhatsapp || erroPageWhatsapp || successPageWhatsapp || waitForLogin || waitChat || successChat
    //Create session wss return "serverClose" case server for close
    console.log('Session name: ', session);
  },
  {
    browserPathExecutable: '', // browser executable path
    folderNameToken: 'tokens', //folder name when saving tokens
    mkdirFolderToken: '', //folder directory tokens, just inside the venom folder, example:  { mkdirFolderToken: '/node_modules', } //will save the tokens folder in the node_modules directory
    headless: true, // you should no longer use boolean false or true, now use false, true or 'new' learn more https://developer.chrome.com/articles/new-headless/
    devtools: false, // Open devtools by default
    debug: false, // Opens a debug session
    logQR: true, // Logs QR automatically in terminal
    browserWS: '', // If u want to use browserWSEndpoint
    browserArgs: [''], // Original parameters  ---Parameters to be added into the chrome browser instance
    addBrowserArgs: [''], // Add broserArgs without overwriting the project's original
    puppeteerOptions: {}, // Will be passed to puppeteer.launch
    disableSpins: true, // Will disable Spinnies animation, useful for containers (docker) for a better log
    disableWelcome: true, // Will disable the welcoming message which appears in the beginning
    updatesLog: true, // Logs info updates automatically in terminal
    autoClose: 60000, // Automatically closes the venom-bot only when scanning the QR code (default 60 seconds, if you want to turn it off, assign 0 or false)
    createPathFileToken: false, // creates a folder when inserting an object in the client's browser, to work it is necessary to pass the parameters in the function create browserSessionToken
    addProxy: [''], // Add proxy server exemple : [e1.p.webshare.io:01, e1.p.webshare.io:01]
    userProxy: '', // Proxy login username
    userPass: '' // Proxy password
  },
  )
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.isGroupMsg === false) {
      client
        .sendText(tratarNumero.tratar(message.from), responderMensagem.lerResponder(message.body))
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}