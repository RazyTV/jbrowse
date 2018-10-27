const electron = require('electron')
const {app, BrowserWindow, ipcMain} = require('electron')



  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({show: false,
       title: "jbrowse",
       icon: "icon/JB.png"
     });
    win.maximize()
    win.show()
    win.setMenu(null);
    win.loadFile('mainWindow.html')
    win.toggleDevTools()
  }

  app.on('ready', createWindow)
