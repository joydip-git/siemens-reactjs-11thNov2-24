function print(): void {
    console.log('hello...');
}
function add(a: number, b: number): number {
    return a + b
}

//type is unavailable in JS
type fnRefType = () => void
//delegate void FnRefDel();
function call(fnRef: fnRefType) {
    fnRef()
}
call(print)

type calcFnType<T> = (x: T, y: T) => number
// interface ICalcFn {
//     (x: number, y: number): number;
// }

function invoke(fnRef: calcFnType<number>, first: number, second: number) {
    console.log(fnRef(first, second))
}
invoke(add, 10, 20)

type myType = number | undefined;
function some(a: myType): myType {
    if (a) {
        return a * a
    } else
        return undefined
}

type productType = {
    id: number,
    name: string,
    price: number,
    description?: string
}
interface IProduct {
    id: number;
    name: string;
    price: number;
    description?: string;
}

type laptopProductType = productType & {
}

var p1: productType = {
    id: 1,
    name: '',
    price: 0
}
const mobile: IProduct = {
    id: 0,
    name: '',
    price: 0
}

class Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    constructor(id: number, name: string, price: number, description?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        if (this.description)
            this.description = description;
    }
}

class LaptopProduct extends Product {
    constructor(id: number, name: string, price: number, description?: string) {
        super(id, name, price, description)
    }
}

//not available in JS
interface IOperations<T> {
    add(a: T, b: T): number;
}
class Implementation implements IOperations<number> {
    add(a: number, b: number): number {
        return a + b
    }
}

