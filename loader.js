const { app, BrowserWindow, dialog, ipcRenderer } = require('electron')
const zlib = require('zlib'); 
const path = require('path')
const fs = require('fs')
const { Client, Authenticator } = require('minecraft-launcher-core');
const { log, error } = require('console');
const installRoot = path.join(process.env.appdata, '.minecraft')
const { download } = require('electron-dl')
console.log('[DEBUG] InstallRoot Detected:');
console.log(installRoot);

const launchGeneric = (username, version) => {
    if (!(fs.existsSync(installRoot + '/javas.rar'))) {
      console.log('[DEBUG] Java folder not found, trying to download then restarting in 90 seconds.')
      ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
      setTimeout(launchGeneric, 90000, username, version)
      return;
    }
    if (!(fs.existsSync(installRoot + '/java8/'))) {
      const inputFile = fs.createReadStream(installRoot + '/javas.rar');
      const outputFile = fs.createWriteStream(installRoot + '/*');
      inputFile.pipe(zlib.createUnzip()).pipe(outputFile);    
    }
    let java = "8"
    if (version === "1.17.1") {let java = "16"}
    if (version === "1.17") {let java = "16"}
    if (version === "1.18.1") {let java = "17"}
    if (version === "1.18.2") {let java = "17"}
    if (version === "1.18") {let java = "17"}
    if (version === "1.19") {let java = "17"}
    if (version === "1.19.1") {let java = "17"}
    if (version === "1.19.2") {let java = "17"}
    if (version === "1.19.3") {let java = "17"}
    if (version === "1.19.4") {let java = "17"}
    if (version === "1.20") {let java = "17"}
    if (version === "1.20.1") {let java = "17"}
    const launcher = new Client();
    let opts = {
      // For production launchers, I recommend not passing 
      // the getAuth function through the authorization field and instead
      // handling authentication outside before you initialize
      // MCLC so you can handle auth based errors and validation!
      javaPath: `${installRoot}/${java}/bin/java.exe`,
      authorization: Authenticator.getAuth(username, ""),
      root: installRoot,
      version: {
          number: `${version}`,
          type: "release"
      },
      memory: {
          max: "3G",
          min: "2G"
      }
    }
    launcher.launch(opts);
    launcher.on('debug', (e) => console.log(e));
    launcher.on('data', (e) => console.log(e));
  }

const launchCustomTechnic = async (username, custom, version) => {
  if (!fs.existsSync(path.join(installRoot, 'versions', custom))) {
    console.log('[DEBUG] ' + custom + ' folder not found, trying to download.')
    fs.mkdirSync(path.join(installRoot, 'versions', custom))
    ipcRenderer.send('download', 'https://thevortexfiles.luiswilfredowil.repl.co/', path.join(installRoot, 'versions', custom), custom, '.json')
    // await download(BrowserWindow.getFocusedWindow(), 'https://thevortexfiles.luiswilfredowil.repl.co/' + custom + '.json', {directory: path.join(installRoot, 'versions', custom)})
    console.log('[DEBUG] Waiting 10 seconds to execute...')
    // I will remember this stupid fail for all my life
    // setTimeout(launchCustomFabric, 10000, username, custom, version)
    setTimeout(launchCustomTechnic, 10000, username, custom, version)
  } else {
    const launcher = new Client();
    let opts = {
      // For production launchers, I recommend not passing 
      // the getAuth function through the authorization field and instead
      // handling authentication outside before you initialize
      // MCLC so you can handle auth based errors and validation!
      // javaPath: `${installRoot}/java8/bin/java.exe`,
      authorization: Authenticator.getAuth(username, ""),
      root: installRoot,
      version: {
          custom: custom,
          number: `${version}`,
          type: "release"
      },
      memory: {
          max: "3G",
          min: "2G"
      }
    }
    launcher.launch(opts);
    launcher.on('debug', (e) => console.log(e));
    launcher.on('data', (e) => console.log(e));
  }
}
const launchCustomForge = async (username, forge, version) => {
  if (!fs.existsSync(path.join(installRoot) + '/' + forge + '.jar')) {
    console.log('[DEBUG] ' + forge + '.jar file not found, trying to download.')
    ipcRenderer.send('download', 'https://thevortexfiles.luiswilfredowil.repl.co/', installRoot, forge, '.jar')
    // await download(BrowserWindow.getFocusedWindow(), 'https://thevortexfiles.luiswilfredowil.repl.co/' + custom + '.json', {directory: path.join(installRoot, 'versions', custom)})
    console.log('[DEBUG] Waiting 15 seconds to execute...')
    setTimeout(launchCustomForge, 15000, username, forge, version)
  } else {
    const launcher = new Client();
    let opts = {
      // For production launchers, I recommend not passing 
      // the getAuth function through the authorization field and instead
      // handling authentication outside before you initialize
      // MCLC so you can handle auth based errors and validation!
      // javaPath: `${installRoot}/java8/bin/java.exe`,
      authorization: Authenticator.getAuth(username, ""),
      root: installRoot,
      forge: path.join(installRoot) + '/' + forge + '.jar',
      version: {
          number: `${version}`,
          type: "release"
      },
      memory: {
          max: "3G",
          min: "2G"
      }
    }
    launcher.launch(opts);
    launcher.on('debug', (e) => console.log(e));
    launcher.on('data', (e) => console.log(e));
  }
}

// shpaguetti code