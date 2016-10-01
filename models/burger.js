"use strict";

const Orm = require('../config/orm.js');

const orm = new Orm;

class Burger {

	all (cb) {
		orm.selectAll('burgers', (data) => {
			cb(data);
		});
	}

	create (cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, (data) => {
			cb(data);
		});
	}

	update (objColVals, condition, cb) {
		orm.updateOne('burgers', objColVals, condition, (data) => {
			cb(data);
		});
	}

	delete (condition, cb) {
		orm.deleteOne('burgers', condition, (data) => {
			cb(data);
		});
	}
	
}

module.exports = Burger;