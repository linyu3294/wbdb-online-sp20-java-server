
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


    const deleteUser = (index) => {
        const userId = users[index]._id;
        userService.deleteUser(userId)
            .then(response => {
                users.splice(index, 1)
                renderUsers()
                // findAllUsers()
            })

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
            let editBtn = $('#edit_'+i)
            deleteBtn.click(() => {
                deleteUser(i)
            })

            userList.append()
        }
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