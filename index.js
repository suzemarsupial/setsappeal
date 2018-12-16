'use strict';

const SetEngine = require('./setEngine');

const setEngine = new SetEngine; 

setEngine.newSet("01")
setEngine.newSet("02")

setEngine.addSetElement("01", 5)
setEngine.addSetElement("02", 3)


console.log(setEngine.sets)
