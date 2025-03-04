const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

// **NY RUTE FOR `/`**
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// **Bruker PORT-variabelen riktig**
app.listen(PORT, function () {
    console.log(`Server is running on http://localhost:${PORT}`);
});