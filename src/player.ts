import {Vector2} from "./vector2";

export class Player {
    get position(): Vector2 {
        return this._position;
    }

    set position(value: Vector2) {
        this._position = value;
    }
    private size: number;
    private _position: Vector2;

    constructor() {
        this.size = 20;
        this._position = new Vector2(0, 0);
    }

    public die() {
        this._position = new Vector2(0, 0);
        this.size = 20;
    }

    public addSize(amount: number) {
        this.size += amount;
    }

    public getSize(): number {
        return this.size;
    }

}
