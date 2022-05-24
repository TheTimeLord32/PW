# Ajax Fetch
## Fetch API
- Richieste promise based
- Rimpiazza le XMLHttpRequest
- Supportato da tutti i browser

```js
function doWebRequest() {
    const url = "..."   // URL da richiedere
    fetch(url);         // ritorna la promise
}
```
### Promise Pipeline
- richiesta fetch
- statusCheck
- res.text() | res.json()
- handleResponse
- col catch() => handleError

#### GET
```js
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => res.map(user => user.name))
    .then(userNames => console.log(userNames))
```

#### POST
```js
const myPost = {
    title: "My Post",
    body: "This is my post"
}

const options = {
    method: "POST",
    body: JSON.stringify(myPost),
    headers: {
        "Content-Type": "application/json"
    }
}

fetche('https://jsonplaceholder.typicode.com/posts', options)
    .then(res => res.json())
    .then(res => console.log(res))
```

### Gestione errore
```js
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            return Promise.reject(new Error(res.statusText));
        }
    })
    .then(res => res.map(user => user.name))
    .then(userNames => console.log(userNames))
    .catch(err => console.log(err))
```
## Async
- `async function f() { return 1; }` la funzione ritorna una promise
- `f().then(alert);` ritorna 1

# CORS: cross-origin resource sharing
Un client richiede risorse di un dominio differente <br>
Un browser permette agli script di accedere ai contenuti di un dominio differente SOLO SE STESSA ORIGINE <br>
