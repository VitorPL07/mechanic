const { app, BrowserWindow, nativeImage } = require("electron");

function createWindow() {
    // Adicionando um ícone na barra de tarefas/dock
    const icon = nativeImage.createFromPath(`${app.getAppPath()}/build/icon.png`);

    if (app.dock) {
        app.dock.setIcon(icon);
    }

    // Cria uma janela de desktop
    const win = new BrowserWindow({
        icon,
        title: "Mechanic",
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    });

    win.maximize();

    win.loadFile("./views/login.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    // Fecha a janela no MacOS e impede que ela fique executando em segundo plano
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // Esse evento é disparado pelo MacOS quando clica no ícone do aplicativo no Dock.
    // Basicamente cria a janela se não foi criada.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});