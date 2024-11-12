//contract
export interface Manager<T> {
    add(obj: T): boolean;
    getAll(): Readonly<T[]>;
    sort(choice: number): Readonly<T[]>;
}