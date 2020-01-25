let userService = new AdminUserServiceClient()
let h1 = $("h1")
h1.html("User Admin Screen!!!")
    .css("color", "green")
// .remove()

let users = [
    "alice", "bob"
];
let userList = $("#user-list")
let usernameFld = $("#username-fld")


const deleteUser = (index) => {
    users.splice(index, 1)
    renderUsers()
}

const renderUsers = () => {
    userList.empty()
    for (let u = 0; u < users.length; u++) {
        const li = $("<li>")
        // li.html(users[u])
        const deleteBtn = $("<button>Delete</button>")
        deleteBtn.click(() => {deleteUser(u)})
        li.append(deleteBtn)
        li.append(users[u])
        userList.append(li)
    }
}
renderUsers()

const createBtn = $("#create-btn");

const createUser = () => {
    const username = usernameFld.val()
    usernameFld.val("")
}


userService.createUser({username:username})
    .then(newUser=>{
        console.log(newUser)
        users.push(newUser)
        renderUsers()
    })
}

    userService.findAllUsers()
        .then((theUSers)=>
              {
                  users= theUSers
                  renderUsers()
              }
        )
createBtn.click(createUser)




