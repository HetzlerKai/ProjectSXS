function canCounter(defense:Unit,targetField:Field){
	let result = false;
	let currentField = defense.currentField;
	let ValidateX = (difference(targetField.x,defense.currentField.x) <= defense.combatStrength.reach);
	let ValidateY = (difference(targetField.x,defense.currentField.x) <= defense.combatStrength.reach);
	if( ValidateX <= defense.combatStrength.reach && ValidateY <= defense.combatStrength.reach){
		result = true;
	}
	return result;	
}



function fight(offense:Unit,defense:Unit){
	let diceResult = rollDice(1,6);
	if(defense.combatStrength.defenseMod <= diceResult){
		alert((diceResult-defense.combatStrength)+"Offense won"); // toDo
	}else{
		if(canCounter){
			diceResult = rollDice(1,6);
			if(offense.combatStrength.defenseMod <= diceResult){
				alert(("Counter: "+diceResult-defense.combatStrength)+"Offense won"); // toDo
			}
			
		}		
	}
	
}