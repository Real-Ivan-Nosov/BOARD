const board = document.querySelector('#board');
const clearBtn = document.querySelector('.clear');
const colorBtns = document.querySelectorAll('.chooseColor');

const SQUARES_NUMBER = 1650;
const RND_COLORS = ['lime', 'skyblue', 'blue', 'white', 'pink', 'red', 'yellow'];
const WHITE = 'white';
const BLUE = 'blue';
const RED = 'red';
const YELLOW = 'yellow';
const GREEN = 'lime';
const PINK = 'pink';
const GAY = 'skyblue';

let currentColor = RND_COLORS;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    })

    board.append(square);
}

clearBtn.addEventListener('click', () => {
    clearBoard();
})

colorBtns.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        setCurrentColor(evt);
    })
})

const setCurrentColor = (evt) => {
    switch (evt.target.id) {
        case 'white':
            currentColor = WHITE;
            break;
        case 'blue':
            currentColor = BLUE;
            break;
        case 'red':
            currentColor = RED;
            break;
        case 'yellow':
            currentColor = YELLOW;
            break;
        case 'green':
            currentColor = GREEN;
            break;
        case 'pink':
            currentColor = PINK;
            break;
        case 'gay':
            currentColor = GAY;
            break;
        case 'random':
            currentColor = RND_COLORS;
            break;
        default:
            currentColor = RND_COLORS;
    }
}

const clearBoard = () => {
    const elements = document.querySelectorAll('.square');
    elements.forEach(element => {
        element.style.backgroundColor = '#1d1d1d';
        element.style.boxShadow = `0 0 2px #000`;
    });
}

const setColor = (el) => {
    let styleColor;
    switch (currentColor) {
        case RND_COLORS:
            styleColor = getRndColor();
            break;
        case WHITE:
            styleColor = WHITE;
            break;
        case BLUE:
            styleColor = BLUE;
            break;
        case RED:
            styleColor = RED;
            break;
        case YELLOW:
            styleColor = YELLOW;
            break;
        case GREEN:
            styleColor = GREEN;
            break;
        case PINK:
            styleColor = PINK;
            break;
        case GAY:
            styleColor = GAY;
            break;
        default:
            styleColor = getRndColor();
    }
    el.style.backgroundColor = styleColor;
    el.style.boxShadow = `0 0 2px ${styleColor}, 0 0 10px ${styleColor}`;
}

const getRndColor = () => {
    const id = Math.floor(Math.random() * RND_COLORS.length);
    return RND_COLORS[id];
}