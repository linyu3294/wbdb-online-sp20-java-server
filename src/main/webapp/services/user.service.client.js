function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/03901990/users';
    var self = this;


    function createUser(user, callback) {
        fetch(
            self.url,
            {
                'POST': user,
                body:JSON.stringify(user),
                headers:{"content-type":"applications/jason"}
            }).then((response) => {
                return response.json()
            })
        }


    // function findAllUsers(callback) { … }
    function findUserById(userId, callback) {
        let promise = fetch(self.url)
        fetch(self.url).then((response) =>{
            return response.json()
        }).then((theUsers)=>{
            console.log(theUsers)
        })
    }

    // function updateUser(userId, user, callback) { … }
    function deleteUser(userId, callback) {

    }
}
