
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


    const renderUsers = () => {
        userTable.empty()

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
                '<td> <i class="fa fa-times"></i> </td>' +
                '<td>' + '</td>' +
                '<td> <i class="fa fa-pencils"></i> </td>' +
                '</tr>'
            )
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



})();