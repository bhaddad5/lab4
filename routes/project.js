exports.viewProject = function(req, res) {
	res.render('project', {
    'projectName': name
  });
	
	var name = req.params.name;
  console.log("The project name is: " + name);
};