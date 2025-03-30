const allPercentages = document.getElementsByClassName('selected-percentage');

const map = {
    0 : "50%",
    1 : "30%",
    2 : "20%",
}

for(let i=0;i<allPercentages.length;i++){
    allPercentages[i].style.width = map[i]
}