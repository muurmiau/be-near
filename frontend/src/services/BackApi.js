const baseUrl = 'http://127.0.0.1:8000/api/'

export const getUsers = () => {
    fetch(baseUrl + 'users')
    .then(res => res.json())
    .then(data => console.log(data))
}

export const getUserById = (id) => {
    fetch(baseUrl + 'get&user&by&id=' + String(id))
    .then(res => res.json())
    .then(data => console.log(data))
}

export const getUserByUsername = (username) => {
    fetch(baseUrl + 'get&user&by&username=' + username)
    .then(res => res.json())
    .then(data => console.log(data))
}

export const getUserByEmail = (email) => {
    fetch(baseUrl + 'get&user&by&email=' + email)
    .then(res => res.json())
    .then(data => console.log(data))
}

export const sendRegisterData = (name, surname, username, email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            surname: surname,
            username: username,
            email: email,
            password: password
        })
    }
    
    let response = fetch(baseUrl + 'send&register&data', requestOptions)
    .then(res => res.json())
    return response
}


export const sendAuthorizeData = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }

    let response = fetch(baseUrl + 'send&authorize&data', requestOptions)
    .then(res => res.json())
    return response
}
