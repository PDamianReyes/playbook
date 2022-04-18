class Pokemon{  //constructor
	constructor(name){
		this.name=name

	}

	//Métodos

	sayHello(){
		console.log('Mi Pokemon ' + this.name + ' dice Hello')
	}

	sayMessage(message){
		console.log('Mi Pokemon ' + this.name + ' dice ' + message)
	}



}

module.exports = Pokemon