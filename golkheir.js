// تعریف فانکشن و بازگرداندن مقادیر
// تعریف و استفاده از آبجکت و پراپرتی های آن
// قرار دادن شرط در فانکشن ها

//علامت ابجکت اکولاد{}
//علامت فانکشن ()
function add(x, y) {
    return x + y;
}

function object(esm, khanevade, sen) {
    let human = {
        name: esm,
        fatherFamily: khanevade,
        age: sen,
        child: {
            name: 'farzand name',
            family: 'father khanevade'
        }
    }
    return human;
}

function sarbazi(age, meliat) {
    if (age < 18) {
        return 'بشین خونه'
    }
    else if (age >= 18 && meliat === 'iran') {
        return 'برو سربازی'
    }
    else {
        return 'تو راحتی'
    }
}

function rang(x) {
    if (x === 'white' || x === 'black') {
        return 'good color'
    }
    else if (x === 'green') {
        return 'go to doctor'
    }
    else if (x === 'blue') {
        return 'you are sad'
    }
    else if (x === 'red') {
        return 'you are angry'
    }
    else if (x === 'yellow') {
        return 'you are happy'
    }
    else {
        return 'i dont know what the f you are'
    }
}

function go(must) {
    if (must === true) {
        return 'go';
    }
    else {
        return 'dont go'
    }
}

console.log(sarbazi(12, iran))


// ======================== آرایه ها ==============================

let human={
    name: 'mamad',
    favoriteFoods: ['ghorme sozi', 'gheyme', 'letebe', 'pizza']
}


function addFood(food){
    human.favoriteFoods.push(food)
}

function deleteFood(food){
    let index=human.favoriteFoods.indexOf(food)
    console.log(index)
    if(index>= 0){
        human.favoriteFoods.splice(index,1)
    }
}
console.log(human.favoriteFoods)
addFood('dokh')
console.log(human.favoriteFoods)
deleteFood('gheyme')
console.log(human.favoriteFoods)
deleteFood('borger')
console.log(human.favoriteFoods)