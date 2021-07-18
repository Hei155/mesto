export class UserInfo {
    constructor(userName, userDescription) {
        this._userName = userName;
        this._userDescription = userDescription;
    }

    getUserInfo() {
        this._userData = {
            Name: this._userName.textContent,
            Description: this._userDescription.textContent
        };
        return this._userData;
    };

    setUserInfo() {
        this._data = this.getUserInfo();
        this._userNameInput = document.querySelector('#name');
        this._userDescriptionInput = document.querySelector('#description');
        this._userNameInput.textContent = this._data.Name;
        this._userDescriptionInput.textContent = this._data.Description;
    };

}
