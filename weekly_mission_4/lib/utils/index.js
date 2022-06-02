const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService")

const explorers = Reader.readJsonFile("explorers.json");

//console.log (explorers)

// Aplicación del ExplorerService sobre la lista de explorers
console.log (ExplorerService.filterByMission(explorers, "node"))