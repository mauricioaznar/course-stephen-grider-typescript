import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumberCollection";
import {CharacterCollection} from "./CharacterCollection";
import {LinkedList} from "./LinkedList";

// const sorter = new Sorter(charactersCollection)
// sorter.sort()
const linkedList = new LinkedList()

linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(5)
linkedList.sort()
linkedList.print()
const numbersCollection = new NumbersCollection([10, 3, 20, -5, 0]);

numbersCollection.sort()
console.log(numbersCollection.data)
const charactersCollection = new CharacterCollection('poihfsAsdsdfa')
charactersCollection.sort()
console.log(charactersCollection.data)
