const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;

// Configuración de CORS para permitir solicitudes desde tu página en GitHub Pages
app.use(cors({ origin: 'https://phibby-bot.github.io' }));

// Endpoint para el estado del bot
app.get('/api/bot-status', (req, res) => {
    res.json({ status: 'Bot en línea' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor API escuchando en el puerto ${PORT}`);
});
