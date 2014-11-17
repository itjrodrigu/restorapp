
//This instructs EXTjs to create a new class definition and we pass:
//	1. A name for the class
//	2. An object to declare class' properties and a constructor
//	A default set of parameters for default values to be used in constructor can be passed through "config" property
Ext.define("Supplier", {
	/* 
		Static properties can be defined as well, and you do through an object labeled "static" as follows
	*/
	statics: {
		units: "lbs",
		getUnits: function(){
			return this.units;
		}
	},
	nombre: "Cisco",
	direccion: "630 W Santa Gertrudis, Kingsville, Texas",
	telefono: "001-361-522-1297",
	producto: "carne",
	/*
		The config method creates some apply methods automatically so if you need to override them you can through
		apply[property-name] from here on all is like creating a normal function but you're overriding it.
	*/
	config: {
		nombre: "Cisco",
		direccion: "630 W Santa Gertrudis, Kingsville, Texas",
		telefono: "001-361-522-1297",
		producto: "carne",
	},
	constructor: function(config){
		console.log("Running class:Supplier constructor");
		this.initConfig(config);
		/* 
			Just as in java you can use getClass() or getType() in EXTjs you can use "self" as follows
		*/
		console.log(this.self.getUnits);
	},
	setNombre(nombre){
		if(nombre !== ""){
			this.nombre = nombre;
		}else{
			console.log("please provide a valid name");
		}
	},
	getNombre(){
		return this.nombre;
	},
	/* 
		appart from setter and getter methods you can create custom methods and you can access them through dot notation
	*/
	mostrarNombre: function(){
		console.log(this.nombre);
	}
});

