"use strict";

const express = require('express');
const router = express.Router();
const Burger = require('../models/burger.js');

const burger = new Burger;

router.get('/', (req, res) => {
	burger.all((data) => {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/create', (req, res) => {
	var name = req.body.name;
	burger.create(['burger_name'], [name], () => {
		res.redirect('/');
	})
});

router.put('/update/:id', (req, res) => {
	var id = req.params.id;
	var devoured = req.body.devoured;
	burger.update({ devoured: devoured }, 'id = ' + id, () => {
		res.redirect('/');
	});
});

router.delete('/delete/:id', (req, res) => {
	var id = req.params.id;
	burger.delete('id = ' + id, () => {
		res.redirect('/');
	});
})

module.exports = router;