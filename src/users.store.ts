import { Injectable, Scope } from "@nestjs/common";

interface User {
    name: string,
    age: number,
    id: number
}

@Injectable({ scope: Scope.TRANSIENT })
export class UserStore {

    private store = new Map<number, User>();

    constructor() {

        console.log('user store init')
    }

    addUser(user: User) {
        this.store.set(user.id, user)
    }

    getUser(id: number) {
        this.store.get(id);
    }

    getUsers() {
        return Array.from(this.store).map((_, user) => user)
    }

    updateUser(id: number, user: User) {
        this.store.set(id, user)
    }

    deleteUser(id: number) {
        this.store.delete(id)
    }
}