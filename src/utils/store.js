const USER_KEY = "user_key"
let storeUtil = {
    // 保存用户
    saveUser(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user))
    },

    // 获取用户
    getUser(){
        return JSON.parse(localStorage.getItem(USER_KEY))
    },

    // 删除用户
    removeUser() {
        localStorage.removeItem(USER_KEY)
    }
}

export default storeUtil