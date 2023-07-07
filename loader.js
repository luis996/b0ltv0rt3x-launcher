const { app, BrowserWindow, dialog } = require('electron')
const { Client, Authenticator } = require('minecraft-launcher-core');
const installRoot = './minecraft';


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