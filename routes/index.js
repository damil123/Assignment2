const express = require('express');
const router = express.Router();

/* router.get fetheces data from each page*/

// home
router.get('/', (req, res) => {
  res.render('index', { title: 'Home', active: 'home' });
});

// aabour
router.get('/about', (req, res) => {
  res.render('about', { title: 'About', active: 'about' });
});

// projetcs
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects', active: 'projects' });
});

// contanct
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact', active: 'contact' });
});

module.exports = router;

