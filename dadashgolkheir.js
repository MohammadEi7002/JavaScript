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
