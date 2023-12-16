class User {
    name
    last_name
    address
    constructor(txt_name, txt_last_name, txt_address) {
        this.name = txt_name,
        this.last_name = txt_last_name,
        this.address = txt_address
    }
    get user_name() {
        return this.name
    }
}
export {User}