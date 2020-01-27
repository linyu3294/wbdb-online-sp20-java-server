
(function () {
    let searchbtn = $("#search")
    let userService = new AdminUserServiceClient()

    let users=[]
    let userTable = $("#user_table")
    let userList = $("#user-item")
    let usernameFld = $("#username")
    let passwordFld = $("#password")
    let firstnameFld = $("#firstname")
    let lastnameFld = $("#lastname")
    let roleFld = $("#role")



    console.log("hello DOM")


    const deleteUser = index => {
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


        console.log (users[index].username)
        console.log (users[index].password)
        console.log (users[index].firstname)
        console.log (users[index].lastname)
        console.log (users[index].role)



        userService.findUserById(userId)
            .then(user => {
                console.log(user)
                usernameFld.val(user.username)
            })


        userTable.append(
        '<tr id="user-item">' +
        '<td>' + index + '</td>' +

        '<td> <input value="' + users[index].username + '"/> </td>'+
        '<td> <input value="' + users[index].password + '"/> </td>'+
        '<td> <input value="' + users[index].firstname + '"/> </td>'+
        '<td> <input value="' + users[index].lastname + '"/> </td>'+
        '<td> <input value="' + users[index].role + '"/> </td>'+

        '<td>' + '</td>' +
        '<td>' + '</td>' +
        '<td> <button id="delete_' + index + '"> <i class="fa fa-times"></i> </button> </td>' +
        '<td>' + '</td>' +
        '<td> <button id="edit_' + index + '"class="> <i fa fa-pencil"></i> </button></td>' +
        '</tr>'
        )
        userService.deleteUser(userId)

        userList.append()

    }


    const renderUsers = () => {
        userTable.empty()

        let emptyCol = $('<td></td>')
        for (let i =0; i<users.length; i++){
            //Renders the row that appears in browswer
            console.log(users[i].username)
            console.log(users[i].password)
            console.log(users[i].firstname)
            console.log(users[i].lastname)
            console.log(users[i].role)


            userTable.append(
                '<tr id="user-item">' +
                '<td>' + i + '</td>' +
                '<td>' + users[i].username  + '</td>' +
                '<td>' + users[i].password  + '</td>' +
                '<td>' + users[i].firstname + '</td>' +
                '<td>' + users[i].lastname  + '</td>' +
                '<td>' + users[i].role      + '</td>' +
                '<td>' + '</td>' +
                '<td>' + '</td>' +
                '<td> <button id="delete_' + i + '"> <i class="fa fa-times"></i> </button> </td>' +
                '<td>' + '</td>' +
                '<td> <button id="edit_' + i + '"class="> <i fa fa-pencil"></i> </button></td>' +
                '</tr>'
            )

            let deleteBtn = $('#delete_'+i)
            deleteBtn.click(() => {deleteUser(i)})

            let editBtn = $('#edit_'+i)
            editBtn.click(() => {editUser(i)})


            userList.append()
        }
    }

    const updateUser = () => {
        const username = usernameFld.val()
        const password = passwordFld.val()
        const firstname = firstnameFld.val()
        const lastname = lastnameFld.val()
        usernameFld.val("")

        userService.updateUser(currentUserId, {username: username,
                                                    password: password,
                                                    firstname:firstname,
                                                    lastname:lastname,
                                                    role:role})
            .then(newUser => {
                // users.push(newUser)
                // renderUsers()
                findAllUsers()
            })

    }


    const createUser = () => {
        const username = usernameFld.val()
        const password = passwordFld.val()
        const firstname = firstnameFld.val()
        const lastname = lastnameFld.val()
        const role = roleFld.val()
        console.log(userList);
        userService.createUser({username: username,
                                     password: password,
                                     firstname:firstname,
                                     lastname:lastname,
                                     role:role})
        .then(newUser => {
            findAllUsers()
        })
        clearAllFlds()
    }
    searchbtn.click(createUser)



    const findAllUsers = () => {
        userService.findAllUsers()
            .then((theUsers) => {
                users = theUsers
                console.log(users)
                renderUsers()
            })
    }
    findAllUsers()


    const clearAllFlds = ()=> {
        usernameFld.val("")
        firstnameFld.val("")
        lastnameFld.val("")
        passwordFld.val("")
        roleFld.val("")
    }

})();