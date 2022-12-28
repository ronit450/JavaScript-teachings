// Defining the constasts

const stopping_number = 6;
const dice_dic = {
    1: 'dice-1',
    2: 'dice-2',
    3: 'dice-3',
    4: 'dice-4',
    5: 'dice-5',
    6: 'dice-6'
}
let random_number = 0;

// Selecting the classes

const play_area = document.querySelector('.play_area');
const player_1 = document.querySelector('.player1');
const player_2 = document.querySelector('.player2');
const player_1_score = document.querySelector('.p1_score');
const player_2_score = document.querySelector('.p2_score');
const dice_image = document.querySelector('.dice_image');

const player_1_c_score = document.querySelector('.c1_score');
const player_2_c_score = document.querySelector('.c2_score');



// Buttons
const rollbtn = document.getElementById('roll');
const newGame = document.querySelector('.newgame');
const hold = document.querySelector('.hold');

// Scrore variables
let p1_score = 0;
let p2_score = 0;
let p1_highscore = 0;
let p2_highscore = 0;
let p1_c_score = 0;
let p2_c_score = 0;

newGame.addEventListener('click', function(){
    // reseting everything
    p1_score = 0;
    p2_score = 0;
    p1_c_score = 0;
    p2_c_score = 0;
    player_1_score.textContent = 0;
    player_2_score.textContent = 0;
    player_1_c_score.textContent = 0;
    player_2_c_score.textContent = 0;
    dice_image.src = 'dice-6.jpg';
    player_1.classList.add('player_active');
    player_2.classList.remove('player_active');
}
)

// Defining functionality when roll dice is hit and changing the dice picture
rollbtn.addEventListener('click', function(){
    random_number = Math.floor(Math.random() * 6) + 1;
    dice_image.src = `dice-${random_number}.jpg`;
    console.log(random_number)
    if (random_number !== stopping_number){
        if (player_1.classList.contains('player_active')){
            p1_c_score += random_number;
            player_1_c_score.textContent = p1_c_score;
        }
        else if (player_2.classList.contains('player_active')){
            p2_c_score += random_number;
            player_2_c_score.textContent = p2_c_score;
        }
    }else{
        if (player_1.classList.contains('player_active')){
            p1_c_score = 0;
            player_1_c_score.textContent = p1_c_score;
            player_1.classList.toggle("player_active");
            player_2.classList.toggle("player_active");            
        }else{
            p2_c_score = 0;
            player_2_c_score.textContent = p2_c_score;
            player_1.classList.toggle("player_active");
            player_2.classList.toggle("player_active");
        }

    }
}
)

const switch_player = function(){
    if (player_1.classList.contains("player_active")) {
    p1_score += p1_c_score;
    player_1_score.textContent = p1_score;
    player_1_c_score.textContent = 0;
    p1_c_score = 0;
    player_1.classList.toggle("player_active");
    player_2.classList.toggle("player_active");
    } 
    else if (player_2.classList.contains("player_active")) {
    p2_score += p2_c_score;
    player_2_score.textContent = p2_score;
    player_2_c_score.textContent = 0;
    p2_c_score = 0;
    player_2.classList.toggle("player_active");
    player_1.classList.toggle("player_active");
    }
}

// hold functionality to change the active player
hold.addEventListener('click', function(){
    switch_player()
}
)

