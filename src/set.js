'use strict';

class Set {

    constructor (id) {

        this.id = id; 
        this.elements = [];

    }

    addElement (element) {

        this.elements.push(element)
        
    }

}

module.exports = Set; 