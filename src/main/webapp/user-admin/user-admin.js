// IIFE
// Immediately Invoked Function Expressions
(function () {
    let userService = new AdminUserServiceClient()

    let h1 = $("h1")
    h1.html("User Admin Screen!!!")
        .css("color", "green")
    // .remove()

    let users = [];
    let userList = $("#user-list")
    let usernameFld = $("#username-fld")

    const deleteUser = (index) => {
        const userId = users[index]._id;
        userService.deleteUser(userId)
            .then(response => {
                users.splice(index, 1)
                renderUsers()
                // findAllUsers()
            })

    }


    const editUser = index => {
        const userId = users[index]._id;
        currentUserId = userId;
        userService.findUserById(userId)
            .then(user => {
                console.log(user)
                usernameFld.val(user.username)
            })
    }

    const renderUsers = () => {
        userList.empty()
        for (let u = 0; u < users.length; u++) {
            const li = $("<li>")
            // li.html(users[u])
            const editBtn = $("<button>Edit</button>")
            editBtn.click(() => {
                editUser(u)
            })

            const deleteBtn = $("<button>Delete</button>")
            deleteBtn.click(() => {
                deleteUser(u)
            })
            li.append(deleteBtn)
            li.append(editBtn)
            li.append(users[u].username)
            userList.append(li)
        }
    }
    renderUsers()

    const updateUser = () => {
        const username = usernameFld.val()
        usernameFld.val("")

        userService.updateUser(currentUserId, {username: username})
            .then(newUser => {
                // users.push(newUser)
                // renderUsers()
                findAllUsers()
            })

    }

    const createBtn = $("#create-btn");
    const updateBtn = $("#update-btn");

    updateBtn.click(updateUser)

    const createUser = () => {
        const username = usernameFld.val()
        usernameFld.val("")

        userService.createUser({username: username})
            .then(newUser => {
                // users.push(newUser)
                // renderUsers()
                findAllUsers()
            })
    }

    createBtn.click(createUser)

    const findAllUsers = () =>
        userService.findAllUsers()
            .then((theUsers) => {
                users = theUsers
                renderUsers()
            })

    findAllUsers()
})();