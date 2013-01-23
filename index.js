var fs = require('fs'),
    directory = fs.readdirSync(process.cwd());


directory.forEach(function(name) {
	if(name.lastIndexOf('manifest') === name.length-'manifest'.length) {
		var manifest = fs.readFileSync(process.cwd() + '/' + name,'binary').split('\n');
		var outFile = '';
		var outFilename = name.replace('.manifest','');
		manifest.forEach(function(fileName) {
			if(fileName.length) {
				var file = fs.readFileSync(process.cwd() + '/src/' + fileName,'binary');
				outFile += file;
			}
		})
		fs.writeFileSync(process.cwd() + '/' + outFilename,outFile,'binary');
	}
})
