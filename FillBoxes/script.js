const inputs = document.getElementById('all-boxes');

const clickedBoxes = []

inputs.addEventListener("click", function (e) {
    if(e.target.parentNode.id == 'all-boxes'){
      const targetIndex = e.target.dataset.index ;
      const clickedElement = e.target.parentNode.children[targetIndex];
      clickedElement.classList.add('box-clicked');
      clickedBoxes.push(targetIndex)

      
      if(clickedBoxes.length === 7){
          let i = 0;
          while(clickedBoxes.length > 0){
            const removeIndex = clickedBoxes.shift()
            i++;
            setTimeout(()=>{
              inputs.children[removeIndex].classList.remove('box-clicked');
            },i * 1000)
          } 
      }
    }
  });

