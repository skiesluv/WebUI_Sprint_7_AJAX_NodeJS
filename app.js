const dataFromJson = document.getElementById("usersFromJSON")

const renderJson = async () => {
    let url = 'http://localhost:3000/users';

    const res = await fetch(url);
    const data = await res.json();

    let template = '';
    data.forEach(post => {
        template += `
        <div class="user">
            <h1>User id: ${post.id}</h1>
            <p>Name: ${post.first_name}</p>
            <p>Lastname: ${post.last_name}</p>
            <p>Email: ${post.email}</p>
            <img src="${post.photo}" alt="" />
        </div>
        `
    })

    dataFromJson.innerHTML = template;
}