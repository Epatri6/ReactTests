/**
 * Generates a random game square object
 */
const generateSquare = () => {
    const validNames = ['AddFlow', 'SubtractFlow', 'Empty'];
    const validDirections = ['Up', 'Right', 'Down', 'Left', 'None', 'None', 'None', 'None'];
    const name = validNames[Math.floor(validNames.length * Math.random())];
    return {
        name: name,
        direction: (name === 'Empty') ? '' : validDirections[Math.floor(validDirections.length * Math.random())],
        passed: false
    }
}

/** 
 * Renders a square based on its game square object
 */
const renderSquareState = (gameObj) => {
    let res = ''
    switch(gameObj.name) {
        case 'AddFlow':
            res += '+1';
            break;
        case 'SubtractFlow':
            res += '-1';
            break;
        case 'Start':
            res += 'Start';
            break;
        default:
            break;
    }
    res += ' '
    switch(gameObj.direction) {
        case 'Up':
            res += '\u2191';
            break;
        case 'Right':
            res += '\u2192';
        break;
        case 'Down':
            res += '\u2193';
        break;
        case 'Left':
            res += '\u2190';
        break;
        default:
            break;
    }
    return res;
}

export default {
    renderSquareState,
    generateSquare
}