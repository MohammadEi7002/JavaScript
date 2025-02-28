
function car(x) {
    let cars={
        mo:['germany', 'italy', 'usa', 'japan'],
        hajm:[4.4, 6, 6, 3.5],
        brand:['bmw', 'mercedes', 'lamborghni', 'camaro', 'nissan gtr35']
    }
    if (x === 'bmw' || x === 'mercedes') {
        return 'bmw 4.4 germany';
    }
    else if (x === 'lamborghni') {
        return 'lamborghni 6 italy';
    }
    else if (x === 'camaro') {
        return 'camaro 6 usa';
    }
    else if (x === 'nissan gtr35') {
        return 'nissan gtr35 3.5 japan';
    }
    else {
        return 'coming soon'
    }
}
console.log()