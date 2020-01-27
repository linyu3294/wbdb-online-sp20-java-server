
(function () {
    let searchbtn = $("#search")
    let userService = new AdminUserServiceClient()

    let users=[]
    let userTable = $("#user_table")
    let userList = $("#user-item")
    let globalUsernameFld = $("#username")
    let globalPasswordFld = $("#password")
    let globalFirstnameFld = $("#firstname")
    let globalLastnameFld = $("#lastname")
    let globalRoleFld = $("#role")



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

        let currUsernameFld = $("#username_" + index)
        let currPasswordFld = $("#password_" + index)
        let currFirstnameFld = $("#firstname_" + index)
        let currLastnameFld = $("#lastname_" + index)
        let roleFld = $("#role_" +index)

        currUsernameFld.html('<input id="username_input_' + index + '" value="' + users[index].username + '"/>')
        currPasswordFld.html('<input id="password_input_' + index + '"  value="' + users[index].password + '"/>')
        currFirstnameFld.html('<input id="firstname_input_' + index + '"  value="' + users[index].firstname + '"/>')
        currLastnameFld.html('<input id="lastname_input_' + index + '"  value="' + users[index].lastname + '"/>')
        roleFld.html('<input id="role_input_' + index + '"  value="' + users[index].role + '"/>')

        userService.findUserById(userId)
            .then(user => {
                console.log(user)
                currUsernameFld.val(user.username)
            })

        userList.append()
    }

    const updateUser = index => {
        const userId = users[index]._id
        let currUsernameFld = $("#username_input_" + index)
        let currPasswordFld = $("#password_input_" + index)
        let currFirstname = $("#firstname_input_" + index)
        let currLastName = $("#lastname_input_" + index)
        let currRole = $("#role_input_" + index)

        console.log(currUsernameFld.val())
        // userService.updateUser(userId, {username: currUsernameFld.val(),
        //                                      password: currPasswordFld.val(),
        //                                      firstname:currFirstname.val(),
        //                                      lastname:currLastName.val(),
        //                                      role:currRole.val()
        // })

        renderUsers()
    }


    const renderUsers = () => {
        userTable.empty()

        for (let i =0; i<users.length; i++){
            userTable.append(
                '<tr id="user-item">' +
                '<td>' + i + '</td>' +
                '<td id="username_' + i + '">' +  users[i].username  + '</td>' +
                '<td id="password_' + i + '">' +  users[i].password  + '</td>' +
                '<td id="firstname_'+ i + '">' +  users[i].firstname + '</td>' +
                '<td id="lastname_' + i + '">' +  users[i].lastname  + '</td>' +
                '<td id="role_'     + i + '">' +  users[i].role      + '</td>' +
                '<td>' + '</td>' +
                '<td>' + '</td>' +
                '<td> <button id="delete_' + i + '"> <i class="fa fa-times"></i> </button> </td>' +
                '<td>' + '</td>' +
                '<td> <button id="edit_' + i + '"> <i   class="> <i fa fa-pencil"></i> </button></td>' +
                '<td>' + '</td>' +
                '<td> <button id="update_' + i + '"> <i   class="> <i fa fa-upload"></i> </button></td>' +
                '</tr>'
            )

            let deleteBtn = $('#delete_'+i)
            deleteBtn.click(() => {deleteUser(i)})

            let editBtn = $('#edit_'+i)
            editBtn.click(() => {editUser(i)})

            let updateBt  = $('#update_'+i)
            updateBt.click(() => {updateUser(i)})

            userList.append()
        }
    }





    const createUser = () => {
        const username = globalUsernameFld.val()
        const password = globalPasswordFld.val()
        const firstname = globalFirstnameFld.val()
        const lastname = globalLastnameFld.val()
        const role = globalRoleFld.val()
        userService.createUser({username: username,
                                     password: password,
                                     firstname:firstname,
                                     lastname:lastname,
                                     role:role})
        .then(newUser => {
            findAllUsers()
        })
        clearAllGlobalFlds()
    }
    searchbtn.click(createUser)



    const findAllUsers = () => {
        userService.findAllUsers()
            .then((theUsers) => {
                users = theUsers
                renderUsers()
            })
    }
    findAllUsers()


    const clearAllGlobalFlds = ()=> {
        globalUsernameFld.val("")
        globalFirstnameFld.val("")
        globalLastnameFld.val("")
        globalPasswordFld.val("")
        globalRoleFld.val("")
    }

})();