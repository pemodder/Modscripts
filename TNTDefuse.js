var x = 0;
var y = 0;
var z = 0;

function attackHook(attacker, victim) {
	if(Entity.getEntityTypeId(victim) == 65 && Player.getCarriedItem() == 259) {
		x = Math.floor(Entity.getX(victim));
		y = Math.floor(Entity.getY(victim));
		z = Math.floor(Entity.getZ(victim));
		Entity.remove(victim);
		Level.setTile(x, y, z, 46)
		clientMessage("Put out TNT");
	}
}
