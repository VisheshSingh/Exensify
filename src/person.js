const isAdult = (x) => {
    if(x>=18) {
        console.log('Adult');
        return true
    } else {
        console.log ('not adult');
        return false
    }
}

const canDrink = (x) => (x>21)

export { isAdult, canDrink }