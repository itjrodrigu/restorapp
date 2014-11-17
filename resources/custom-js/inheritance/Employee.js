Ext.define("Employee", {
	config: {
		employeeId: "",
		name: "",
		salary: 0
	},
	constructor: function(config){
		this.initConfig(config);
	},
	work: function(){
		Ext.Msg.alert(this.getName + " is working.");
	}
});