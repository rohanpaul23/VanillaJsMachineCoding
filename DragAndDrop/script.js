const allContainer = document.querySelectorAll('.container-item');

allContainer.forEach((containerItem)=>{
    containerItem.addEventListener('dragstart',(e)=>{
        if(e?.target?.dataset.key === 'item'){
            e.target?.classList.add('dragging')
        }
    })
    containerItem.addEventListener('dragend',(e)=>{
        if(e?.target?.dataset.key === 'item'){
            e.target?.classList.remove('dragging')
        }
    })

    containerItem.addEventListener('dragover',(e)=>{
        const currentDraggingItem = document.querySelector('.dragging');
        containerItem.appendChild(currentDraggingItem)
    })
})


