

function showEvent(event) {
    // Fetch insert div element
    items = document.querySelectorAll('.key')

    // set key
    pressed_key = document.createTextNode(event.key)
    items[0].replaceChild(pressed_key, items[0].firstChild)

    // set KeyCode
    items[1].replaceChild(document.createTextNode(`${event.keyCode}`), items[1].firstChild)

    // set code
    console.log(event.code)
    items[2].replaceChild(document.createTextNode(`${event.code}`), items[2].firstChild)


}
function showEvent2(event) {
    // Fetch insert div element
    item1 = document.querySelector('.key:nth-child(1)')
    item2 = document.querySelector('.key:nth-child(2)')
    item3 = document.querySelector('.key:nth-child(3)')

    console.log(item1)
    console.log(item2)
    console.log(item3)

    // set key
    pressed_key = document.createTextNode(event.key)
    item1.replaceChild(pressed_key, item1.firstChild)

    // set KeyCode
    item2.replaceChild(document.createTextNode(`${event.keyCode}`), item2.firstChild)

    // set code
    console.log(event.code)
    item3.replaceChild(document.createTextNode(`${event.code}`), item3.firstChild)


}

function showEvent3(event) {

    // Delete all events

    document.querySelector('#insert').innerHTML = ''

    const KeyCodes = {
        'event.key': event.key,
        'event.KeyCode': event.KeyCode,
        'event.code': event.code,
    }
    console.log(event.keyCode)

    for ( key in KeyCodes){
        // div
        div = document.createElement('div')
        div.className = 'key'

        // value
        value = document.createTextNode(`${KeyCodes[key]}`)
        

        // small 
        small = document.createElement('small')
        small.appendChild(document.createTextNode(`${key}`))

        // append all together

        div.appendChild(small)
        div.appendChild(value)
        document.querySelector('#insert').appendChild(div)

    }


}


// window.addEventListener('keyup', showEvent)
window.addEventListener('keyup', showEvent3)