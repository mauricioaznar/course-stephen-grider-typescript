"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var LinkedList_1 = require("./LinkedList");
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);
linkedList.sort();
linkedList.print();
var numbersCollection = new NumberCollection_1.NumbersCollection([10, 3, 20, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharacterCollection_1.CharacterCollection('poihfsAsdsdfa');
charactersCollection.sort();
console.log(charactersCollection.data);
