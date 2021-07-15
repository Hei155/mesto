export class UserInfo {
    constructor(userNameSelector, userDescriptionSelector) {
        this._userNameSelector = userNameSelector;
        this._userDescriptionSelector = userDescriptionSelector;
    }

    getUserInfo() {
        this._userData = {
            Name: this._userNameSelector.value,
            Description: this._userDescriptionSelector.value
        };
        return this._userData;
    }

    setUserInfo() {
        this._data = this.getUserInfo();
        this._userNameField = document.querySelector('.menu__name');
        this._userDescriptionField = document.querySelector('.menu__description');
        this._userNameField.textContent = this._data.Name;
        this._userDescriptionField.textContent = this._data.Description;
    }

}
