const { app, BrowserWindow, dialog, ipcRenderer } = require('electron')
const path = require('path')
const fs = require('fs')
const { Client, Authenticator } = require('minecraft-launcher-core');
const { log, error } = require('console');
const installRoot = path.join(process.env.appdata, '.minecraft')
const { download } = require('electron-dl')
console.log('[DEBUG] InstallRoot Detected:');
console.log(installRoot);

const launchGeneric = (username, version) => {
    if (!(fs.existsSync(installRoot + '/java8/'))) {
      console.log('[DEBUG] Java folder not found, we are downloading javas.zip into ' + installRoot + '.')
      console.log('[DEBUG] Extract the java8, java16, and java17 as folders, like ' + installRoot + '/java8/ and etc.');
      ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
      return;
    }
    if (!(fs.existsSync(installRoot + '/java16/'))) {
      console.log('[DEBUG] Java folder not found, we are downloading javas.zip into ' + installRoot + '.')
      console.log('[DEBUG] Extract the java8, java16, and java17 as folders, like ' + installRoot + '/java8/ and etc.');
      ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
      return;
    }
    if (!(fs.existsSync(installRoot + '/java17/'))) {
      console.log('[DEBUG] Java folder not found, we are downloading javas.zip into ' + installRoot + '.')
      console.log('[DEBUG] Extract the java8, java16, and java17 as folders, like ' + installRoot + '/java8/ and etc.');
      ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
      return;
    }
    // Set java default to 8, then check if there is versions that need another versions of java, then change it.
    let java = "8"
    if (version === "1.17.1") {java = "16"}
    if (version === "1.17") {java = "16"}
    if (version === "1.18.1") {java = "17"}
    if (version === "1.18.2") {java = "17"}
    if (version === "1.18") {java = "17"}
    if (version === "1.19") {java = "17"}
    if (version === "1.19.1") {java = "17"}
    if (version === "1.19.2") {java = "17"}
    if (version === "1.19.3") {java = "17"}
    if (version === "1.19.4") {java = "17"}
    if (version === "1.20") {java = "17"}
    if (version === "1.20.1") {java = "17"}
    const launcher = new Client();
    let opts = {
      // For production launchers, I recommend not passing 
      // the getAuth function through the authorization field and instead
      // handling authentication outside before you initialize
      // MCLC so you can handle auth based errors and validation!
      javaPath: `${installRoot}/java${java}/bin/java.exe`,
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
  if (!(fs.existsSync(installRoot + '/java8/'))) {
    console.log('[DEBUG] Java folder not found, we are downloading javas.zip into ' + installRoot + '.')
    console.log('[DEBUG] Extract the java8, java16, and java17 as folders, like ' + installRoot + '/java8/ and etc.');
    ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
    return;
  }
  if (!(fs.existsSync(installRoot + '/java16/'))) {
    console.log('[DEBUG] Java folder not found, we are downloading javas.zip into ' + installRoot + '.')
    console.log('[DEBUG] Extract the java8, java16, and java17 as folders, like ' + installRoot + '/java8/ and etc.');
    ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
    return;
  }
  if (!(fs.existsSync(installRoot + '/java17/'))) {
    console.log('[DEBUG] Java folder not found, we are downloading javas.zip into ' + installRoot + '.')
    console.log('[DEBUG] Extract the java8, java16, and java17 as folders, like ' + installRoot + '/java8/ and etc.');
    ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
    return;
  }
  // Set java default to 8, then check if there is versions that need another versions of java, then change it.
  let java = "8"
  if (version === "1.17.1") {java = "16"}
  if (version === "1.17") {java = "16"}
  if (version === "1.18.1") {java = "17"}
  if (version === "1.18.2") {java = "17"}
  if (version === "1.18") {java = "17"}
  if (version === "1.19") {java = "17"}
  if (version === "1.19.1") {java = "17"}
  if (version === "1.19.2") {java = "17"}
  if (version === "1.19.3") {java = "17"}
  if (version === "1.19.4") {java = "17"}
  if (version === "1.20") {java = "17"}
  if (version === "1.20.1") {java = "17"}
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
      javaPath: `${installRoot}/java${java}/bin/java.exe`,
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
  if (!(fs.existsSync(installRoot + '/java8/'))) {
    console.log('[DEBUG] Java folder not found, we are downloading javas.zip into ' + installRoot + '.')
    console.log('[DEBUG] Extract the java8, java16, and java17 as folders, like ' + installRoot + '/java8/ and etc.');
    ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
    return;
  }
  if (!(fs.existsSync(installRoot + '/java16/'))) {
    console.log('[DEBUG] Java folder not found, we are downloading javas.zip into ' + installRoot + '.')
    console.log('[DEBUG] Extract the java8, java16, and java17 as folders, like ' + installRoot + '/java8/ and etc.');
    ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
    return;
  }
  if (!(fs.existsSync(installRoot + '/java17/'))) {
    console.log('[DEBUG] Java folder not found, we are downloading javas.zip into ' + installRoot + '.')
    console.log('[DEBUG] Extract the java8, java16, and java17 as folders, like ' + installRoot + '/java8/ and etc.');
    ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
    return;
  }
  // Set java default to 8, then check if there is versions that need another versions of java, then change it.
  let java = "8"
  if (version === "1.17.1") {java = "16"}
  if (version === "1.17") {java = "16"}
  if (version === "1.18.1") {java = "17"}
  if (version === "1.18.2") {java = "17"}
  if (version === "1.18") {java = "17"}
  if (version === "1.19") {java = "17"}
  if (version === "1.19.1") {java = "17"}
  if (version === "1.19.2") {java = "17"}
  if (version === "1.19.3") {java = "17"}
  if (version === "1.19.4") {java = "17"}
  if (version === "1.20") {java = "17"}
  if (version === "1.20.1") {java = "17"}
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
      javaPath: `${installRoot}/java${java}/bin/java.exe`,
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

const launchCustom = async (username, custom, version) => {
  if (!(fs.existsSync(installRoot + '/java8/'))) {
    console.log('[DEBUG] Java folder not found, we are downloading javas.zip into ' + installRoot + '.')
    console.log('[DEBUG] Extract the java8, java16, and java17 as folders, like ' + installRoot + '/java8/ and etc.');
    ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
    return;
  }
  if (!(fs.existsSync(installRoot + '/java16/'))) {
    console.log('[DEBUG] Java folder not found, we are downloading javas.zip into ' + installRoot + '.')
    console.log('[DEBUG] Extract the java8, java16, and java17 as folders, like ' + installRoot + '/java8/ and etc.');
    ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
    return;
  }
  if (!(fs.existsSync(installRoot + '/java17/'))) {
    console.log('[DEBUG] Java folder not found, we are downloading javas.zip into ' + installRoot + '.')
    console.log('[DEBUG] Extract the java8, java16, and java17 as folders, like ' + installRoot + '/java8/ and etc.');
    ipcRenderer.send('download', 'https://drive.usercontent.google.com/download?id=1KvEnKxk2F-dacJjJDevGqZ45lmkvSHsh&export=download&authuser=1&confirm=t&uuid=e5f1dd07-79f2-47ba-b86c-99182edba5aa&at=APZUnTWnj2A1cQbjsvVrsCWOj6DB:1694529240677', installRoot, '', '')
    return;
  }
  // Set java default to 8, then check if there is versions that need another versions of java, then change it.
  let java = "8"
  if (version === "1.17.1") {java = "16"}
  if (version === "1.17") {java = "16"}
  if (version === "1.18.1") {java = "17"}
  if (version === "1.18.2") {java = "17"}
  if (version === "1.18") {java = "17"}
  if (version === "1.19") {java = "17"}
  if (version === "1.19.1") {java = "17"}
  if (version === "1.19.2") {java = "17"}
  if (version === "1.19.3") {java = "17"}
  if (version === "1.19.4") {java = "17"}
  if (version === "1.20") {java = "17"}
  if (version === "1.20.1") {java = "17"}
  const launcher = new Client();
  let opts = {
    // For production launchers, I recommend not passing 
    // the getAuth function through the authorization field and instead
    // handling authentication outside before you initialize
    // MCLC so you can handle auth based errors and validation!
    javaPath: `${installRoot}/java${java}/bin/java.exe`,
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
// shpaguetti code