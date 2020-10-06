enum Owner {"Player1", "Player2", "None"};
enum ResourceType {"wood", "iron"};
enum FieldType {"water","grass","mountain"};
enum UnitType {"Swordsman","Archer","Farmer"};






class SupplyLine: {
	id: int,
	owner: Owner,
	startPoint: Field,
	endPoint: Field,
	fields: Field[]
}


class CombatStrength {
	offenseMod: int,
	defenseMod: int,
	reach: int
}

class Resource {
	resourceType: ResourceType,
	amount: int

	constructor(resourceType:ResourceType,amount){
		this.resourceType = resourceType;
		this.amount = amount;
	}

}

class UnitArchetype: {
	buildCost: Resource[],
	combatStrength: CombatStrength,
	demant: int,
	canWalk: int
	unitType: UnitType,
	canCounter: int
}


// declare UnitArchetypes

class Archer extends UnitArchetype{
	constructor(){
		this.buildCost = [
			new Resource("wood",1),
			new Resource("iron",1),
		]
		this.combatStrength = {
			offenseMod: 1,
			defenseMod: 1,
			reach: 1,
			canCounter = 1;
		};
		this.demant= 1;
		this.canWalk = 1;
		this.unitType = "Archer";
	}
}

class Swordsman extends UnitArchetype{
	constructor(){
		this.buildCost = [
			new Resource("wood",1),
			new Resource("iron",1),
		]
		this.combatStrength = {
			offenseMod: 1,
			defenseMod: 1,
			reach: 1,
			canCounter = 1;
		};
		this.demant= 1;
		this.canWalk = 1;
		this.unitType = "Swordsman";
	}
}

class Farmer extends UnitArchetype{
	constructor(){
		this.buildCost = [
			new Resource("wood",1),
			new Resource("iron",1),
		]
		this.combatStrength = {
			offenseMod: 1,
			defenseMod: 1,
			reach: 1,
			canCounter = 1;
		};
		this.demant= 1;
		this.canWalk = 1;
		this.unitType = "Farmer";
	}
}

class Unit {
	id: int,
	unitType: UnitType,
	currentField: Field,
	owner: Owner,
	canWalk: int,
	demant: int,
	buildCost: Resource[],
	combatStrength: CombatStrength,
	selected: false,
	constructor(owner:Owner,field:Field,archeType:ArcheType){
		this.owner = owner;
		this.currentField = field;
		this.buildCost = archeType.buildCost;
		this.combatStrength = archeType.combatStrength;
		this.demant= archeType.demant;
		this.canWalk = archeType.canWalk;
		this.unitType = archeType.unitType;
	}

	MoveTo(fromField:Field,toField:Field){
		// todo can move to this?
		this.currentField = toField;
	}

}

class Field: {
	x:int,
	y:int,
	id: int,
	height:int, // todo
	type:FieldType // todo
	constructor(x,y,height,type){
		this.x = x;
		this.y = y;
		this.height = height;
		this.type = type;
	}
}



class Building {
	owner: Owner,
	name: string,
	id: int,
	resources: Resource[],
	produce: function(){
	}
}

class Map {
	fields: Field[]
	width: int;
	height: int;
}
