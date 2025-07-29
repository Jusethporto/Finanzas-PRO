const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3002;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

const dbPath = path.join(__dirname, 'db', 'users.json');

// Función para leer los usuarios de la base de datos
const readUsers = (callback) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err, null);
        }
        try {
            const users = JSON.parse(data);
            callback(null, users);
        } catch (parseErr) {
            callback(parseErr, null);
        }
    });
};

// Función para escribir los usuarios en la base de datos
const writeUsers = (users, callback) => {
    fs.writeFile(dbPath, JSON.stringify(users, null, 2), 'utf8', (err) => {
        callback(err);
    });
};

// Ruta para el registro de usuarios
app.post('/api/register', (req, res) => {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
        return res.status(400).json({ message: 'El usuario y la contraseña son obligatorios.' });
    }

    readUsers((err, users) => {
        if (err) {
            return res.status(500).json({ message: 'Error al leer la base de datos.' });
        }

        const userExists = users.find(u => u.usuario === usuario);
        if (userExists) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
        }

        users.push({ usuario, contrasena });

        writeUsers(users, (writeErr) => {
            if (writeErr) {
                return res.status(500).json({ message: 'Error al guardar el usuario.' });
            }
            res.status(201).json({ message: 'Usuario registrado con éxito.' });
        });
    });
});

// Ruta para el inicio de sesión
app.post('/api/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    readUsers((err, users) => {
        if (err) {
            return res.status(500).json({ message: 'Error al leer la base de datos.' });
        }

        const validUser = users.find(u => u.usuario === usuario && u.contrasena === contrasena);

        if (validUser) {
            res.status(200).json({ message: 'Inicio de sesión exitoso.' });
        } else {
            res.status(401).json({ message: 'Usuario o contraseña incorrectos.' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
