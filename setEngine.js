'use strict'

const Set = require('./src/set');


class SetEngine {

    constructor () {

        this.sets = [];

    }

    newSet (id) {

        const newSet = new Set(id);
        const newEntry = {
                  "id": id, 
              "set": newSet
            };

       this.sets.push(newEntry)

    }

    addSetElement (setID, element) {

        const set = this.sets.find((object) => object.id === setID);

        set.set.addElement(element);

    }

}
module.exports = SetEngine;