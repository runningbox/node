"use strict";

class UserStorage {
    static #users = {      //staic으로 다른 곳에서 변수 불러올 수 있다. #으로 해당 변수의 값을 숨긴다.
        id: ['root', 'obricks', 'manager'],
        password: ['1234', '1234', '123456'],
        name: ['관리자', '오브릭스', '실무자'],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;