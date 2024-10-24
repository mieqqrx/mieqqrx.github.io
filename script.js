let uScore = document.getElementById("u-score");
let cScore = document.getElementById("c-score"); 
let button = document.getElementById("button"); 
let tryAgainButton = document.getElementById("try-again"); 
let res = document.getElementById("res");
let attempt = document.getElementById('attempt');
let uPoints = 0;
let cPoints = 0;
let current = 0;
const rounds = 3;

let cards = [
    {src: 'img/6_of_clubs.png', value: 6},
    {src: 'img/6_of_diamonds.png', value: 6},
    {src: 'img/6_of_hearts.png', value: 6},
    {src: 'img/6_of_spades.png', value: 6},

    {src: 'img/7_of_clubs.png', value: 7},
    {src: 'img/7_of_diamonds.png', value: 7},
    {src: 'img/7_of_hearts.png', value: 7},
    {src: 'img/7_of_spades.png', value: 7},

    {src: 'img/8_of_clubs.png', value: 8},
    {src: 'img/8_of_diamonds.png', value: 8},
    {src: 'img/8_of_hearts.png', value: 8},
    {src: 'img/8_of_spades.png', value: 8},

    {src: 'img/9_of_clubs.png', value: 9},
    {src: 'img/9_of_diamonds.png', value: 9},
    {src: 'img/9_of_hearts.png', value: 9},
    {src: 'img/9_of_spades.png', value: 9},

    {src: 'img/10_of_clubs.png', value: 10},
    {src: 'img/10_of_diamonds.png', value: 10},
    {src: 'img/10_of_hearts.png', value: 10},
    {src: 'img/10_of_spades.png', value: 10},

    {src: 'img/jack_of_clubs.png', value: 2},
    {src: 'img/jack_of_diamonds.png', value: 2},
    {src: 'img/jack_of_hearts.png', value: 2},
    {src: 'img/jack_of_spades.png', value: 2},

    {src: 'img/queen_of_clubs.png', value: 3},
    {src: 'img/queen_of_diamonds.png', value: 3},
    {src: 'img/queen_of_hearts.png', value: 3},
    {src: 'img/queen_of_spades.png', value: 3},

    {src: 'img/king_of_clubs.png', value: 4},
    {src: 'img/king_of_diamonds.png', value: 4},
    {src: 'img/king_of_hearts.png', value: 4},
    {src: 'img/king_of_spades.png', value: 4},

    {src: 'img/ace_of_clubs.png', value: 11},
    {src: 'img/ace_of_diamonds.png', value: 11},
    {src: 'img/ace_of_hearts.png', value: 11},
    {src: 'img/ace_of_spades.png', value: 11},
];

window.onload = () => {
    let usname = prompt('enter your name:');

    if (usname) {
        document.getElementById('username').innerHTML = usname;
    } else {
        document.getElementById('username').innerHTML = 'Player';
    }
};

function randCard() {
    let randIndex = Math.floor(Math.random() * cards.length);
    return cards[randIndex];
}

button.addEventListener('click', () => {
    if (current < rounds) {
        let uCard = randCard();
        let cCard = randCard();

        uPoints += uCard.value;
        cPoints += cCard.value;

        uScore.innerHTML = uPoints;
        cScore.innerHTML = cPoints;
        document.getElementById('u-card').src = uCard.src;
        document.getElementById('c-card').src = cCard.src;

        current++;
        attempt.style.display = 'block';
        attempt.innerHTML = `attempt ${current} of ${rounds}`;

        if (current == rounds) {
            res.style.display = 'block';
            button.style.display = 'none';
            tryAgainButton.style.display = 'block';

            if (uPoints > cPoints) {
                res.innerHTML = 'You win!';
            } else if (uPoints < cPoints) {
                res.innerHTML = 'You lose!';
            }
        }
    }
});

tryAgainButton.addEventListener('click', () => {
    button.style.display = 'block';
    tryAgainButton.style.display = 'none';
    uPoints = 0;
    cPoints = 0;
    current = 0;
    uScore.innerHTML = '0';
    cScore.innerHTML = '0';
    document.getElementById('u-card').src = 'img/card.png';
    document.getElementById('c-card').src = 'img/card.png';
    attempt.style.display = 'none';
    res.innerHTML = '';
});
