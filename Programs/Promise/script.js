function getPostsById(id) {
    const url = "https://jsonplaceholder.typicode.com/";
    const result = {
        id,
        name: '',
        posts: []
    };

    return new Promise((resolve, reject) => {
        fetch(`${url}users`)
            .then(response => response.json())
            .then(users => {
                const foundUser = users.find(user => user.id === id);
                result.name = foundUser.name;
                fetch(`${url}posts`)
                    .then(response => response.json())
                    .then(posts => {
                        result.posts = posts.filter
                            (post => post.userId === id)
                        resolve(result)
                    })
            })
    })
}

getPostsById(1).then(data => console.log(data))