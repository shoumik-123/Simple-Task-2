class SessionHelper {
    setUsersDetails(UsersDetails){
        localStorage.setItem("UsersDetails" ,JSON.stringify(UsersDetails))
    }
    getUsersDetails(){
        return JSON.parse(localStorage.getItem("UsersDetails"))
    }
}

export const {setUsersDetails , getUsersDetails} = new SessionHelper()
