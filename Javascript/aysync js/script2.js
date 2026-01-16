
function makeHTTPRequest(method , URL , callback) {
    const xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.onload = () => {
        /* console.log(xhr.response.users); */
        /* const userArray = xhr.response.users;
        userArray.map((user) => {
            console.log(user.firstName);
        }) */   
       callback(xhr.response)
    }

    xhr.open(method , URL);
    xhr.send();
}

makeHTTPRequest('GET', 'https://dummyjson.com/users' , (data) => {
    console.log(data.users)
    //* so agle request tab jaegi jab forst wali resquest ka data na aa jaye ya response na aa jaye 

    makeHTTPRequest('GET' , `https://dummyjson.com/posts/user/${data.users[0].id}` , (data) => {
        console.log(data.posts)
    })
    
});
makeHTTPRequest('GET' , 'https://dummyjson.com/posts/user/5')