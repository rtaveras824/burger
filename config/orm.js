"use strict";

var connection = require('./connection.js');

var printQuestionMarks  = (num) => {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

var objToSql = (ob) => {
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(`${key} = ${connection.escape(ob[key])}`);
		}
	}

	return arr.toString();
}

class Orm {

	selectAll (table, cb) {
		var queryString = `SELECT * FROM ${table};`
		connection.query(queryString, (err, results) => {
			if (err) throw err;
			console.log(results);
			cb(results);
		});
	}

	insertOne (table, cols, values, cb) {
		var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(values.length)})`;
		console.log(queryString);
		connection.query(queryString, values, (err, results) => {
			if (err) throw err;
			cb(results);
		});
	}

	updateOne (table, objColVals, value, cb) {
		var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
		console.log(queryString);
		connection.query(queryString, value, (err, results) => {
			if (err) throw err;
			cb(results)
		});
	}
	
}

module.exports = Orm;