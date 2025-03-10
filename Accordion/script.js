const accHeader = document.getElementById('acc-header');
const accordianBody = document.getElementById('accordion-body');

accHeader.addEventListener('click', () => {
    const element = document.getElementById('accordian-expander'); 
    // fa-rotate-270 Normal
    // fa-rotate-360 Down when expanded
    if(element.classList.contains('fa-rotate-270')) {
        element.classList.remove('fa-rotate-270');
        element.classList.add('fa-rotate-360');
        accordianBody.style.flex = '3';
        accordianBody.style.padding = '10px';
    }
    else {
        element.classList.remove('fa-rotate-360');
        element.classList.add('fa-rotate-270');
        accordianBody.style.flex = '0 0 0';
        accordianBody.style.padding = '0px';
    }
});
 