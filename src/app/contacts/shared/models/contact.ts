export class Contact {
    constructor(private _name?: string, private _id?: number) { }

    get name() {
        return this._name;
    }

    set id(_i: number ) {
        this._id = _i;
    }

    get id() {
        return this._id;
    }
}
