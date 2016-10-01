var Orm = require('./config/orm.js');

var object = new Orm;

object.updateOne('burgers', ['burger_name'], ['Delicious burger'] , (data) => {
	console.log(data);
});