const imageSource = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
  "./images/image5.jpg"
]
const imageSlider = document.getElementById("imageSlider")
const imagesContainer = document.getElementById("allImages")
const counterIndicatorParent = document.getElementById("counter-indicator");

let currentIndex = 0


imageSource.forEach((image,index)=>{
  let imageElement = document.createElement("img");
  imageElement.setAttribute("src", image);
  imageElement.setAttribute("data-image-index", index);
  imageElement.classList.add("imageDimensions")
  if(index === currentIndex){
    imageElement.classList.add("active")
  }
  imagesContainer.appendChild(imageElement)
  
  let counterIndicator = document.createElement("div");
  counterIndicator.classList.add("currentIndicator");
  imageElement.setAttribute("data-counter-index", index);
  counterIndicatorParent.appendChild(counterIndicator)
  if(index === currentIndex){
    counterIndicator.classList.add("currentIndicatorActive")
  }
})


imageSlider.addEventListener('click',(e)=>{
  let prevIndex = currentIndex;
  let targetId = e.target.id
  if(targetId === 'prevImage'){
    currentIndex = (prevIndex === 0 ? 4 : currentIndex - 1)
  }
  else if(targetId === 'nextImage'){
    currentIndex = (prevIndex === 4 ? 0 : currentIndex + 1)
  } 
  if(targetId === 'prevImage' || targetId === 'nextImage'){
    imagesContainer.children[prevIndex].classList.remove('active');
    imagesContainer.children[currentIndex].classList.add('active');
  
    counterIndicatorParent.children[prevIndex].classList.remove('currentIndicatorActive');
    counterIndicatorParent.children[currentIndex].classList.add('currentIndicatorActive');
  } 
})