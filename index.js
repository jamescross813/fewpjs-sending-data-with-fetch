// Add your code here


function submitData(name, email){
    let formData = {
        name: name,
        email: email
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(function(object){
        let idElement = document.createElement('id');
        idElement.innerHTML = object.id;
        document.body.appendChild(idElement);
    })
    .catch(function(error){
       
        let errorMessage = document.createElement('h3');
        errorMessage.innerHTML = error.message;
        document.body.appendChild(errorMessage);
        console.log(error.message);
        
    })
}
