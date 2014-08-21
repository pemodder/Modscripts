var powertools = [];

ModPE.callCommand = function(command) {
    net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod("procCmd", command);
};

function procCmd(c) {
    var cmd = c.split(" ");
    if (cmd[0] == "powertool" || "pt") {
        cmd.shift();
        powertools[powertools.length] = [Player.getCarriedItem(), cmd];
        clientMessage("Bound /" + powertools[powertools.length - 1][1] + " to item " + powertools[powertools.length - 1][0]);
    }
}

function useItem(x, y, z, itemId) {
    var cmd = searchpowertools(itemId);
    if (cmd !== 0) {
        ModPE.callCommand(cmd);
    }
}

function searchpowertools(query) {
    var result = 0;
    for (var i = 0; i < powertools.length; i++) {
        if (powertools[i][0] == query) {
            result = powertools[i][1];
        }
    }
    return result;
}
