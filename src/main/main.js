import { app, BrowserWindow, nativeTheme,Tray, Menu} from 'electron';
import * as path from 'path';
import { menubar, } from 'menubar';

let mainWindow,trayWindow;
const isMac = 'darwin' === process.platform;
function createWindow() {
  const titleBarStyle = isMac ? 'hiddenInset' : 'default';
  mainWindow = new BrowserWindow({
    minHeight: 600,
    minWidth: 800,
    width: 1040,
    height: 715,
    show: true,
    titleBarStyle,
    webPreferences: {
      nodeIntegration: true,
      // nodeIntegrationInWorker: true,
      preload: path.join(__dirname, './dist/renderer/renderer.js')
    }
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:8000/#/');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(`file://${__dirname}/dist/renderer/index.html?isTray=1`);
    // mainWindow.loadURL(
    //   url.format({
    //     pathname: path.join(__dirname, './dist/renderer/index.html'),
    //     protocol: 'file:',
    //     slashes: true,
    //   }),
    // );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function createTrayWindow(){
  trayWindow = new menubar({
    index: process.env.NODE_ENV === 'development' ? 'http://localhost:8000/#/tray/index' : `file://${__dirname}/dist/renderer/index.html?isTray=1`,
    icon: path.join(__dirname,'./icon/kit.png'),
    browserWindow :{
      width: 350,
      height: 460,
      alwaysOnTop: true,
      resizable: false,
      frame: false,
      transparent: true,
      webPreferences: {
        backgroundThrottling: false,
      },
    },
    showDockIcon: true,
  });

  trayWindow.on('focus-lost', () => {
    trayWindow.window.hide();
  });

  // trayWindow.on('show', () => {
  //   mainWindow.hide();
  // });
  // trayWindow.on('hide', () => {
  //   mainWindow.show();
  // });
}


app.on('ready', ()=>{
  createWindow();
  createTrayWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

nativeTheme.on('updated', function theThemeHasChanged () {
  updateMyAppTheme(nativeTheme.shouldUseDarkColors)
})
