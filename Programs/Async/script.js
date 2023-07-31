function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((user) => user);
}

async function sayHello() {
    const user = await fetchUser();
    alert(`Hello ${user.name}`);
}

sayHello();