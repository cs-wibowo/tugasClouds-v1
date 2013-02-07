
/*
 * GET users listing.
 */

exports.halaman = function(req, res){
	//var data = {"employees":{{"id" : "13001", "name" : "Dewi Persis", "department" : "Accounting", "salary" : 300 },{ "id" : "13022", "name" : "Julia Perez", "department" : "Purchasing", "salary" : 420 }}}
	res.render('mydbview');
};