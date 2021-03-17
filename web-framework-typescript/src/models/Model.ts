import {AxiosPromise, AxiosResponse} from "axios";
import {UserProps} from "./User";

interface ModelAttributes<T> {
    set(value: T): void
    getAll(): T
    get<K extends keyof T>(key: K): T[K]
}

interface Sync<T> {
    fetch(id: number): AxiosPromise,
    save(data: T): AxiosPromise
}

interface Events {
    on (eventName: string, callback: () => void): void
    trigger(eventName: string): void
}

interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) {}

    on = this.events.on

    trigger = this.events.trigger

    get = this.attributes.get


    set(update: T) {
        this.attributes.set(update)
        this.events.trigger('change')
    }

    fetch() {
        const id = this.get('id')

        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id')
        }

        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data)
        })
    }

    save() {
        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse): void => {
                this.trigger('save')
            })
    }
}