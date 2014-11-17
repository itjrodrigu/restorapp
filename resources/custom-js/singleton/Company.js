Ext.define("Company", {
	//A singleton cannot be instantiated so when you try to create an instance you will get an error.
	/* NOTE	****
		this works different than in other programming languages such as Java, as in EXTjs when you're defining a class as a singleton, you
		are at the same time creating the one and only instance of the object.
	*/

	singleton: true,
	config: {
		title: "iMindloop inc.,"
	},
	getNumberOfEmployees: function() {
		return 154;
	}
});

console.log(Company.title);
console.log(Company.getNumberOfEmployees); 