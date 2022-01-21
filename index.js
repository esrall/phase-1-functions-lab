function distanceFromHqInBlocks(value) {
    let counter = 42
    let distance = value - counter
    let blocks = distance 
    return blocks
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(value) {
    let counter = 42
    let distance = value - counter
    let feet = distance * 264
    return feet
}

distanceFromHqInFeet (38);

function distanceTravelledInFeet(value, value2) {
   let distance = value2 - value
   let feet = distance * 264
   return feet
}

distanceTravelledInFeet(48, 43);

function calculatesFarePrice(start, destination) {
    let feet = (start - destination) * 264
    
    if (feet < 400) {
        return "gives customers a free sample"
    } else if (feet > 400 ) {
        let price = ((feet - 400) * 0.02 )
        return price
    } else { (feet >= 2500) 
        return "cannot travel that far"
    }

}

calculatesFarePrice(48, 43);