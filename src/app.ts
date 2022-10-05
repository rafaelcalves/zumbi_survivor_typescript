import { Level } from "./level"
import { Survivor } from "./survivor"

console.log("teste")

let jack = new Survivor("Jack")
console.log(jack)
let count:number = 0;
while(jack.getLevel()!==Level.Red) { 
    jack.kill()
    console.log(jack)
    console.log(++count)
}
