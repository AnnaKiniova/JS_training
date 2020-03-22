let airplane = {
    flies: true,
    hasWings: true,
    getOff() {
        this.getOff = true;
    },
    travel() {
        this.travels = true;
        this.speed = '800kmph'    
    }
}
let airbusA320 = Object.create(airplane);
console.log(airbusA320.flies);
airbusA320.flies = false
console.log(airbusA320.flies)
console.log(airplane)
// {flies: true, hasWings: true, getOff: ƒ, travel: ƒ}
console.log(airplane.flies)
//true
airbusA320.travel();
airbusA320.speed
//"800kmph"
airbusA320.getOff
//ƒ getOff() {
//         this.getOff = true;
//     }
airbusA320.color = 'green';
airplane.color
//undefined
airplane.speed
//undefined
airbusA320.hasOwnProperty('speed');
//true

function defineProp(obj) {
    for (let prop in obj) {
        let isOwn = airbusA320.hasOwnProperty(prop);
        if (isOwn) {
            return (`own:+ ${prop}`)
        } else {
            return(`inherited: + ${prop}`)
        }  
    }
}
undefined
defineProp(airbusA320);