var stack = [];
var error = 0;

function procCmd(c) {
    var cmd = c.split(" ");
    if (cmd[0] == "mob") {
        if (cmd[1]) {
        	cmd.shift();
            mobstack(cmd);
        }
    }
}
var mobstack = function (stack) {
    var i = 0;
    for (i = 0; i < stack.length; i++) {
        switch (stack[i].toLowerCase()) {
        case "chicken":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 10, "mob/chicken.png");
            break;
        case "cow":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 11, "mob/cow.png");
            break;
        case "pig":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 12, "mob/pig.png");
            break;
        case "sheep":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 13, "mob/sheep_0.png");
            break;
        case "wolf":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 14, "mob/wolf.png");
            break;
        case "villager":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 15, "mob/villager/villager.png");
            break;
        case "mushroomcow":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 16, "mob/mooshroom.png");
            break;
        case "zombie":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 32, "mob/zombie.png");
            break;
        case "creeper":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 33, "mob/creeper.png");
            break;
        case "skeleton":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 34, "mob/skeleton.png");
            break;
        case "spider":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 35, "mob/spider.png");
            break;
        case "pigzombie":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 36, "mob/pigzombie.png");
            break;
        case "slime":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 37, "mob/slime.png");
            break;
        case "enderman":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 38, "mob/enderman.png");
            break;
        case "silverfish":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 39, "mob/silverfish.png");
            break;
        case "tnt":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 65, "mob/cow.png");
            break;
        case "sand":
            stack[i] = Level.spawnMob(Player.getX(), Player.getY() + i, Player.getZ(), 66, "mob/cow.png");
            break;
        default:
            for(i = 0; i < stack.length; i++) {
                Entity.remove(stack[i]);
            }    
            error = 1;
            break;
        }
    }
    for (i = 1; i < stack.length && error === 0; i++) {
        Entity.rideAnimal(stack[i], stack[i - 1]);
    }
};
