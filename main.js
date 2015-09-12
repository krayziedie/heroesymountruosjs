//Crear un constructor de Monstruo, que tenga como argumentos
//salud, poder de ataque y raza.
//Crear un metodo de prototipo que reciba una instancia de Heroe
//y que este metodo le descuente la energía al heroe.
//Si la energía del heroe llega por debajo de 0, debe indicar
//que el heroe se murió.

//Crear un constructor de Heroe, que tenga como argumentos
//salud, poder de ataque y raza.
//Crear un metodo de prototipo que reciba una instancia de Monstruo
//y que este método le descuente energía al monstruo.
//Si la energía del monstruo llega por debajo de 0, debe indicar
//que el heroe mató con éxito al monstruo.
//Al constructor de Heroe, agregar la propiedad de experiencia.
//Cada vez que el heroe mate a un monstruo, debe aumentar su experiencia.
//si, la experiencia que tiene el Heroe es mayor que un multiplo de 1000
//El heroe debe subir de nivel, y multiplicar su ataque y salud por
//el nivel que tenga el heroe.

//Crear otro método de prototipo que reciba una instancia de constructor
//Pocion, y esta aumente la cantidad de salud del heroe.

//Crear un constructor Pocion que reciba como parametro la cantidad
//de energía que recupera.

function Mounstruo (salud,poder,raza){
	this.salud=salud;
	this.poder=poder;
	this.raza=raza;
}
	Mounstruo.prototype.ataquem = function(Heroe){
	if (Heroe.salud >= 1){
	console.log("atacaste con"+""+this.poder+""+"de poder al Heroe");
	Heroe.salud=Heroe.salud - this.poder;
	}
	else{
		console.log("Heroe esta muerto");
	}
}
function Heroe (salud,poder,raza,experiencia,nivel){
	this.salud=salud;
	this.poder=poder;
	this.raza=raza;
	this.experiencia=experiencia;
	this.nivel=nivel;
}
	Heroe.prototype.ataqueh = function(Mounstruo){
	if (Mounstruo.salud > 0){
	console.log("atacaste con"+""+this.poder+""+"de poder al Mounstruo");
	Mounstruo.salud=Mounstruo.salud - this.poder;
	}
	else{
		this.experiencia=this.experiencia+10;
		alert("Mounstruo esta muerto");
		if (this.experiencia%1000 === 0);
			this.poder=this.poder*this.nivel;
			this.salud=this.salud*this.nivel;

	}
}
function Pocion(tipo,cantidad){
	this.tipo=tipo;
	this.cantidad=cantidad;
}
Pocion.prototype.Sana = function (Heroe){
	Heroe.salud=Heroe.salud+this.cantidad;
}
heroe1=new Heroe(100,30,"numano",20,1);
mounstruo1= new Mounstruo(100,20,"orco");



	//this.disminuye = function(heroe){
					
	//				this.salud=this.salud - energia;
	//				}

//funcion prototype  mounstruo.prototype.nombre
//se hace un if para que cuando sea mayor a 0 le quita energia si no el heroe esta muerto
//la forma optima de crear el contructor es function mounstruo (args)



