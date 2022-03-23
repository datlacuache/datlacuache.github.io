// This file is intentionally blank
// Use this file to add JavaScript to your project

// DOM HTML Back-end

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './js/particlesjs-config.json', function () {
    console.log('Particles.js loaded successfully!');
});


// Lightbox
lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    fadeDuration: 250,
    imageFadeDuration: 250,
});


// Express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/nosotros', (req, res) => {
    res.sendFile('about.html', { root: __dirname });
});

app.get('/soluciones', (req, res) => {
    res.sendFile('solutions.html', { root: __dirname });
});

app.get('/contacto', (req, res) => {
    res.sendFile('contact.html', { root: __dirname });
});