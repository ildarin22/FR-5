const getCode = document.getElementById('getCode');
const codeModal = document.createElement('div')
const mw = document.createElement('div')
mw.style = 'modal-content'

let modalWindowHead = (title) => {
    let mw_head = document.createElement('div')
    let h = document.createElement('h3')
    let a = document.createElement('a')
    a.href = '#close'
    a.className = 'close'
    a.title = 'Close'
    h.title = title
    h.appendChild(a)
    mw_head.appendChild(h)
    return mw_head
};

let modalWindowBody = () => {
    let mw_body= document.createElement('div')
    let form = document.createElement('form')
    mw_body.className = 'modal-body'
    mw_body.appendChild(form)
    return mw_body
}

mw.appendChild()