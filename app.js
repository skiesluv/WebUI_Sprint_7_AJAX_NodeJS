const dataFromJson = document.getElementById("usersFromJSON")

async function renderData() {
    let url = 'http://localhost:3000/users';

    const res = await fetch(url);
    const data = await res.json();

    let template = '';
    data.forEach(key => {
        template += `
        <div class="user">
            <h1>User id: ${key.id}</h1>
            <p>Name: ${key.first_name}</p>
            <p>Lastname: ${key.last_name}</p>
            <p>Email: ${key.email}</p>
            <img src="${key.photo}" alt="" />
        </div>
        `
    })

    dataFromJson.innerHTML = template;
}
