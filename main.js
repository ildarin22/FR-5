const authForm = document.getElementById('authForm')

authForm.onsubmit = async(e) => {
    e.preventDefault();
    let params = new FormData(authForm)
    let responce = await fetch('https://edu.strada.one/api/user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // body: params
        body: JSON.stringify({"email": params.get('email')})
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))

};


// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const data = new FormData(form);
//     for (const [name,value] of data) {
//         let elem = document.createElement('div'); 
//         elem.innerText = value;
//         elem.append(message.content.cloneNode(true));
//         document.body.append(elem);
        
//     }
//   })

