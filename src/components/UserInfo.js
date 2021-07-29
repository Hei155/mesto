export class UserInfo {
    constructor(userName, userDescription) {
        this._userName = userName;
        this._userDescription = userDescription;
    }

    getUserInfo() {
        this._userData = {
            name: this._userName.textContent,
            description: this._userDescription.textContent
        };
        return this._userData;
    };

    setUserInfo(name, description) {
        this._userName.textContent = name;
        this._userDescription.textContent = description;
    };

}
