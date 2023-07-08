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

const launchCustomFabric = async (username, custom, version) => {
  if (!fs.existsSync(path.join(installRoot, 'versions', custom))) {
    console.log('[DEBUG] ' + custom + ' folder not found, trying to download.')
    fs.mkdirSync(path.join(installRoot, 'versions', custom))
    ipcRenderer.send('download', installRoot, 'versions', custom)
    // await download(BrowserWindow.getFocusedWindow(), 'https://thevortexfiles.luiswilfredowil.repl.co/' + custom + '.json', {directory: path.join(installRoot, 'versions', custom)})
    console.log('[DEBUG] Waiting 10 seconds to execute...')
    setTimeout(launchCustomFabric, 10000, username, custom, version)
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