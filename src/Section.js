export class Section {

    constructor({data, renderer}, containerSelector) {
        this._data = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    rendererItems() {
        this._data.forEach((item) => {
            this._renderer(item);
        })
    }

    addItem(element) {
        this._container.prepend(element);
    }

}