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
			arr.push(`${key} = ${ob[key]}`);
		}
	}

	return arr.toString();
}

class Orm {

	selectAll (table, cb) {
		var queryString = `SELECT * FROM ${table} ORDER BY id ASC`
		connection.query(queryString, (err, results) => {
			if (err) throw err;
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

	updateOne (table, objColVals, condition, cb) {
		var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
		console.log(queryString);
		connection.query(queryString, (err, results) => {
			if (err) throw err;
			cb(results);
		});
	}

	deleteOne (table, condition, cb) {
		var queryString = `DELETE FROM ${table} WHERE ${condition}`;
		connection.query(queryString, (err, results) => {
			if (err) throw err;
			cb(results);
		});
	}

}

module.exports = Orm;