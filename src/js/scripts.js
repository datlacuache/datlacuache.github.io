// This file is intentionally blank
// Use this file to add JavaScript to your project

// DOM HTML Back-end

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/nosotros', (req, res) => {
    res.sendFile('about.html', { root: __dirname });
});