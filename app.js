function getUsers() {
    var users = localStorage.getItem("users")

    if (users) {
        users = JSON.parse(users)
        
    }else {
        users = []
    }

    return users;
    
}

function register() {
    var name = document.getElementById("r-name")
    var email = document.getElementById("r-email")
    var password = document.getElementById("r-password")
    var users = getUsers();

    var user = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    users.push(user)

    localStorage.setItem("users", JSON.stringify(users))

    name.value = "";
    email.value = "";
    password.value = "";
}
function login() {
    var email = document.getElementById("l-email")
    var password = document.getElementById("l-password")
    var users = getUsers();
    var saveUser = {};
    for (let i = 0; i < users.length; i++) {
        if (email.value === users[i].email) {
            saveUser = users[i]
            break
        }
    }
    if (saveUser.email) {
        if (saveUser.password === password.value) {
            alert("User Login Successfully!")
            
        }else{
            alert("Invalid Password!")
        }
    }else{
        alert("User not found!")
    }
}




