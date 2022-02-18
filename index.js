const { app, BrowserWindow } = require('electron')
const express = require('express')
const express1 = express()

express1.use(express.static(__dirname + '/public'))

express1.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

express1.get('/teste', (req, res) => {
  res.sendFile(__dirname + '/teste.html')
})

require("electron-reload")(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
});

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      autoHideMenuBar: true,
      useContentSize: true,
      resizable: false
    })
  
    win.loadURL('http://localhost:3000/')
    win.focus();
  }

app.whenReady().then(() => {
  createWindow()
})

express1.listen(3000)