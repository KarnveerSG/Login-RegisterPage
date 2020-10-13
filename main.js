const electron = require('electron');
const firebase = require('firebase/app');
const firebaseAuth = require('firebase/auth');
const firebaseStore = require('firebase/firestore')
const url = require('url');
const path = require('path');
const { Menu } = require('electron/main');

const { app, BrowserWindow } = electron;

let mainWindow;
let addWindow;

//Listen for app to be ready
app.on('ready', function () {

    var firebaseConfig = {
        apiKey: "AIzaSyCEW4qfm5fsq9UXQZXPmmoJYAaVUsNnjTk",
        authDomain: "expensecalculator-8fc86.firebaseapp.com",
        databaseURL: "https://expensecalculator-8fc86.firebaseio.com",
        projectId: "expensecalculator-8fc86",
        storageBucket: "expensecalculator-8fc86.appspot.com",
        messagingSenderId: "202809031324",
        appId: "1:202809031324:web:bf0b994dc19e9d58a94b59",
        measurementId: "G-D2KCDBQFGC"
    };

    //Initializing Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics;

    //Create new window
    mainWindow = new BrowserWindow({});
    //Load HTML file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Build menu from template          //If template not provided, default menu bar goes in.
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Insert Menu
    Menu.setApplicationMenu(mainMenu);              
});


//Handle create add profile window
function createAddWindow() {
    //Create new window
    addWindow = new BrowserWindow({
        width: 500,
        height: 500,
        title: 'Add Profile'
    });
    //Load HTML file
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file:',
        slashes: true
    }));}

//Create menu bar template (Array of objects)
const mainMenuTemplate = [
    {
        label: 'Profile', 
        submenu: [                              //Submenu is also an array of objects similarly to menu bar.
            {
                label: 'New Profile',
                click() {               //<-When someone clicks on this option
                    createAddWindow();          //Do this
                }
            },
            {
                label: 'Edit Profile'
            },
            {
                label: 'Delete Profile'
            },
            {
                label: 'Exit Application',
                accelerator: process.platform == 'darwin' ? 'Command+Q' :               //Macs (darwin) -- Windows (win32) 
                    'Ctrl+Q',      //process.platform lets u know mac vs windows. 
                click() {
                    app.quit();
                }
            }
            ]
       }
];