import { Injectable } from "@nestjs/common";

export interface User {
    id: number;
    name: string;
    age: number;
}

@Injectable()
export class UsersService {

    private store = new Map<number, User>();

    addUser(user: User) {
        this.store.set(user.id, user)
    }

    getUsers() {
        return Array.from(this.store).map(([_, user]) => user)
    }

    getUser(id: number) {
        return this.store.get(id)
    }

    updateUser(id: number, user: User) {
        this.store.set(id, user);
    }

    deleteUser(id: number) {
        this.store.delete(id)
    }

}