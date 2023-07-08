const { app, BrowserWindow, dialog } = require('electron')
const path = require('path')
let fs = require('fs')
const { Client, Authenticator } = require('minecraft-launcher-core');
const { log, error } = require('console');
const installRoot = path.join(process.env.appdata, '.minecraft')
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

const launchCustom = (username, custom) => {
  console.log('[DEBUG] Could not ping server, VORTEX-FILES');
}