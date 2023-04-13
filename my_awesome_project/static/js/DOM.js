function onClear(){
    elements = document.querySelectorAll('li')
    ul = document.querySelector('.items')
    console.log(ul)
    // elements.forEach((item) => item.remove())

    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
        
    }


}

const clearBtn = document.querySelector('#clear')

clearBtn.addEventListener('click', onClear)

