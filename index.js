const {app, BrowserWindow, globalShortcut} = require('electron');
const url = require('url');

let win;

function boot() {
    console.log(process.type);
    win = new BrowserWindow({
        width : 1300,
        height : 500,
        frame: false
    });
    win.loadURL(url.format({
       pathname: 'index.html',
        slashes: true
    }))
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', boot);