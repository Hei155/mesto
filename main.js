(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})})}},{key:"setCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._handleResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"setNewAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"deleteCard",value:function(e){fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=t}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__image-close")||t.target.classList.contains("popup__container-close"))&&e.close()}))}}])&&n(t.prototype,r),e}();function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(f,e);var t,n,r,o,l=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(o){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return a(this,e)});function f(e,t){var n,r=t.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(n=l.call(this,e))._submit=r,n}return t=f,(n=[{key:"setEventListeners",value:function(){var e=this;this._popupButton=this._popup.querySelector(".popup__button"),this._popupButton.addEventListener("click",(function(){e._submit()})),u(s(f.prototype),"setEventListeners",this).call(this)}}])&&i(t.prototype,n),f}(r);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n,r,o){var i=o.handleCardClick,u=o.handleDeleteButtonClick,c=o.handleSetLike,a=o.handleRemoveLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._link=n,this._cardSelector=r,this._handleCardClick=i,this._handleDeleteButtonClick=u,this._handleSetLike=c,this._handleRemoveLike=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){this._htmlElement=document.querySelector(this._cardSelector).content.cloneNode(!0)}},{key:"getCardElement",value:function(e,t){return this._getTemplate(),this._htmlElement.querySelector(".card__image").setAttribute("src",this._link),this._htmlElement.querySelector(".card__image").setAttribute("alt",this._name),this._htmlElement.querySelector(".card__text").innerText=this._name,this._checkActiveLikes(e,t),this._checkNumberOfLikes(e),this._deletePic=this._htmlElement.querySelector(".card__delete-button"),e.owner._id===t._id&&this._deletePic.classList.add("card__delete-button_visible"),this._setListeners(),this._htmlElement}},{key:"_checkActiveLikes",value:function(e,t){var n=this;this._cardButtonLike=this._htmlElement.querySelector(".card__button-like"),e.likes.length>=1&&e.likes.forEach((function(e){e._id===t._id&&n._cardButtonLike.classList.remove("card__button-like_is-active")}))}},{key:"_checkNumberOfLikes",value:function(e){this._likeNumber=this._htmlElement.querySelector(".card__likes-number"),this._likeNumber.textContent=e.likes.length}},{key:"_handleLikeCard",value:function(){this._cardButtonLike.classList.contains("card__button-like_is-active")?this._handleSetLike():this._cardButtonLike.classList.contains("card__button-like_is-active")||this._handleRemoveLike()}},{key:"deleteCard",value:function(){this._card.remove()}},{key:"addLike",value:function(e){this._cardButtonLike.classList.toggle("card__button-like_is-active"),this._likeNumber.textContent=e.likes.length}},{key:"removeLike",value:function(e){this._cardButtonLike.classList.toggle("card__button-like_is-active"),this._likeNumber.textContent=e.likes.length}},{key:"_setListeners",value:function(){var e=this;this._cardButtonLike=this._htmlElement.querySelector(".card__button-like"),this._deletePic=this._htmlElement.querySelector(".card__delete-button"),this._card=this._htmlElement.querySelector(".grid__card"),this._deletePic.addEventListener("click",(function(){e._handleDeleteButtonClick()})),this._cardButtonLike.addEventListener("click",(function(){e._handleLikeCard()})),this._htmlElement.querySelector(".card__image").addEventListener("click",(function(){e._handleCardClick()}))}}])&&f(t.prototype,n),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._form=n}var t,n;return t=e,(n=[{key:"_showError",value:function(e){e.classList.add(this._data.inputErrorClass),document.querySelector(".".concat(e.id,"-error")).textContent=e.validationMessage}},{key:"_hideError",value:function(e){var t=document.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._data.inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_hasInvalidInput",value:function(){return this._getInputList.some((function(e){return!e.validity.valid}))}},{key:"_checkButton",value:function(){this._hasInvalidInput()?this.disableSubmitButton():(this._button.removeAttribute("disabled"),this._button.classList.remove(this._data.inactiveButtonClass))}},{key:"disableSubmitButton",value:function(){this._button.disabled=!0,this._button.classList.add(this._data.inactiveButtonClass)}},{key:"enableValidation",value:function(){var e=this;this._button=this._form.querySelector(this._data.submitButtonSelector),this._getInputList=Array.from(this._form.querySelectorAll(this._data.inputSelector)),this._getInputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._checkButton()}))}))}}])&&p(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"rendererItems",value:function(){var e=this;this._data.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&_(t.prototype,n),e}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"open",value:function(e,t){this._popupLink=this._popup.querySelector(".popup__photo"),this._popupName=this._popup.querySelector(".popup__name"),this._popupLink.setAttribute("src",t),this._popupLink.setAttribute("alt",e),this._popupName.textContent=e,b(S(u.prototype),"open",this).call(this)}}])&&v(t.prototype,n),u}(r);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e,t){var n,r=t.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submit=r,n._inputs=Array.from(n._popup.querySelectorAll(".popup__input")),n}return t=u,(n=[{key:"getInputValues",value:function(){var e=this;return this.inputValues={},this._inputs.forEach((function(t){e.inputValues[t.name]=t.value})),this.inputValues}},{key:"setEventListeners",value:function(){var e=this;this._submitForm=this._popup.querySelector(".popup__form"),this._submitForm.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e.getInputValues())})),O(q(u.prototype),"setEventListeners",this).call(this)}}])&&w(t.prototype,n),u}(r);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=t,this._userDescription=n}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userData={name:this._userName.textContent,description:this._userDescription.textContent},this._userData}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userDescription.textContent=t}}])&&B(t.prototype,n),e}();function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=document.getElementById("imagePopup"),U=document.getElementById("submitDelete"),x=document.getElementById("editPicture"),A=document.querySelector(".menu__image-edit-button"),D=document.querySelector("#imageEditor"),N=document.querySelector(".menu__profile-edit-button"),V=document.querySelector(".menu__name"),J=document.querySelector(".menu__description"),F=document.querySelector("#name"),G=document.querySelector("#description"),H=document.querySelector("#photo"),M=document.querySelector("#link"),z=document.querySelector("#profileEditor"),$=document.querySelector(".grid"),K=document.querySelector("#popupInformation"),Q=document.querySelector("#cardInformation"),W=document.querySelector("#avatarInformation"),X=document.querySelector(".menu__pictures"),Y=document.querySelector("#profile"),Z=document.querySelector(".menu__avatar"),ee=document.querySelector("#profileButton"),te=document.querySelector("#photoButton"),ne=document.querySelector("#profilePictureButton"),re=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-26",headers:{authorization:"eab1c7c5-9c80-49c5-90ac-896bf5cee6a9","Content-Type":"application/json"}}),oe=null;Promise.all([re.getUserData(),re.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];oe=o,new R(V,J).setUserInfo(o.name,o.about),Z.src=o.avatar,new y({data:i,renderer:function(e){se(e,o,".card-template")}},".grid").rendererItems()})).catch((function(e){console.log(e)}));var ie={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error"};function ue(e,t){e?t.textContent="Сохранение...":e||"profileButton"!==t.id&&"profilePictureButton"!==t.id?e||"photoButton"!==t.id||(t.textContent="Создать"):t.textContent="Сохранить"}var ce=new E(T),ae=null;function se(e,t,n){var r=new h(e.name,e.link,n,{handleCardClick:function(){ce.open(e.name,e.link),ce.setEventListeners()},handleDeleteButtonClick:function(){(ae=new l(U,{submit:function(){r.deleteCard(),re.deleteCard(e._id),ae.close()}})).open(),ae.setEventListeners()},handleSetLike:function(){re.setLike(e._id).then((function(e){r.addLike(e)}))},handleRemoveLike:function(){re.deleteLike(e._id).then((function(e){r.removeLike(e)}))}}),o=r.getCardElement(e,t);$.append(o)}var le=new R(V,J),fe=new j(z,{submit:function(e){ue(!0,ee),re.setUserInfo(e.name,e.description).then((function(){le.setUserInfo(e.name,e.description),fe.getInputValues(),fe.close()})).catch((function(){console.log(err)})).finally((function(){ue(!1,ee)}))}});fe.setEventListeners(),N.addEventListener("click",(function(){F.value=le.getUserInfo().name,G.value=le.getUserInfo().description,fe.open()}));var he=new j(x,{submit:function(){ue(!0,ne),re.setNewAvatar(Y.value).then((function(){Z.setAttribute("src",Y.value),he.getInputValues(),he.close()})).catch((function(e){console.log(e)})).finally((function(){ue(!1,ne)}))}});X.addEventListener("click",(function(){he.open(),he.setEventListeners()})),new d(ie,W).enableValidation();var pe=new d(ie,Q);pe.enableValidation(),new d(ie,K).enableValidation();var de=new j(D,{submit:function(e){ue(!0,te),re.setCard(e.name,e.description).then((function(e){se(e,oe,".card-template"),de.close(),H.value="",M.value="",pe.disableSubmitButton()})).catch((function(e){console.log(e)})).finally((function(){ue(!1,te)}))}});de.setEventListeners(),A.addEventListener("click",(function(){de.open()}))})();