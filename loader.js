const { app, BrowserWindow, dialog } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
require('@electron/remote/main').initialize()
const { ipcMain } = require('electron/main');
const {download} = require('electron-dl');
const { Client, Authenticator } = require('minecraft-launcher-core');
let fs = require('fs');
const { electron } = require('process');
const decompress = require('decompress');
const { log, error } = require('console');
//Client imports
const userDataPath = app.getPath('userData');
const installRoot = userDataPath;
const gamePath = `${userDataPath}/versions/1.20.1/1.20.1`
const installPath = `${userDataPath}/versions/1.20.1/`

const launch1164 = (username) => {
    const launcher = new Client();
    let opts = {
      // For production launchers, I recommend not passing 
      // the getAuth function through the authorization field and instead
      // handling authentication outside before you initialize
      // MCLC so you can handle auth based errors and validation!
      javaPath: `${installRoot}/java8/bin/java.exe`,
      authorization: Authenticator.getAuth(username, ""),
      root: installRoot,
      version: {
          number: "1.16.4",
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