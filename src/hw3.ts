function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(method);
    console.log(descriptor);
    let originResult = origina;Function.apply(this);
    console.log(originResult)

    descriptor.value = function () {
        let originalReturnedValue = originResult(new Date().getDate());
        return originalReturnedValue;
    }
}

class Item {
    public price: number;
    public name: string;

    constructor(name: string ,price: number) {
        this.name = name;
        this.price = price;
    }

    @addItemInfoDecorator
    public getItemInfo() {
        return {
            name: this.name, 
            price: this.price
        };
    }
}

let item = new Item('Apple', 100);
console.log(item.getItemInfo());