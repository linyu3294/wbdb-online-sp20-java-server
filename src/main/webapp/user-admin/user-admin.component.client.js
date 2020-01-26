
(function () {
    let searchbtn = $("#search")
    let userService = new AdminUserServiceClient()
    let users=[]
    let userTable = $("#user_table")
    let userList = $("#user-placeholder")

    console.log("hello DOM")


    userList.empty()

    const renderUsers = () => {
        for (let i =0; i<users.length; i++){
            //Renders the row that appears in browswer

            console.log(users[i].username)
            console.log(users[i].password)
            console.log(users[i].firstname)
            console.log(users[i].lastname)
            console.log(users[i].role)

            userTable.append(
                '<tr>' +
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
                '<td> <i class="fa fa-times"></i> </td>' +
                '</tr>'
            )
        }
    }
    renderUsers()


    const findAllUsers = () =>
        userService.findAllUsers()
            .then((theUsers) => {
                users = theUsers
                console.log(users)
                renderUsers()
            })
    findAllUsers()

    searchbtn.click(findAllUsers)
})();