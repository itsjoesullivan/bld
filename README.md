bld
===

common sense build

Project tree:

	project/
		src/
			componentA.js
			componentB.js
		app.js.manifest


Inside app.js.manifest:

	componentA.js
	componentB.js
	
To use bld:

	cd project
	bld
	
Result:

	project/
		src/
			componentA.js
			componentB.js
		app.js
		app.js.manifest