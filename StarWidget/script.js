const allStars = document.getElementById('stars-container');
const resetBtn = document.getElementById('reset-btn');

allStars.addEventListener('click', (e) => {
    let indexOfStarClicked = e?.target?.dataset?.index;
    if(indexOfStarClicked !== undefined){
        for(let i = 0; i <=allStars.children.length; i++){
            if(i <= indexOfStarClicked-1){
                allStars.children[i].classList.add('selected');
            } else {
                allStars.children[i].classList.remove('selected');
            }
        }
    }
});

resetBtn.addEventListener('click',()=>{
    for(let i = 0; i <=allStars.children.length; i++){
        allStars.children[i].classList.remove('selected');
    }
})

