//1
function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {
    // декоратор доьавляет к getItemInfo  дату при каждом вызове
    let originalFunc = descriptor.value;

    descriptor.value = function () {
        let originalReturnedValue = originalFunc(new Date().getDate());
        return originalReturnedValue;
    }
}

export class Item {
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

//2 
function UserType(type: string) {
    // декоратор принимает тип передаваемого елемент b добавляет в клас дату 
    return function (getUserType) {
        return class {
            public userInfoType: string;
            public createDate: number;
            constructor(type: string) {
                this.userInfoType = type;
                this.createDate = new Date().getDate();
            }
        }
    }
}
@UserType('pablic')
export class UsersType {
    public userInfoType: string;
    public createDate: number;

    constructor(type: string) {
        this.userInfoType = type;
        this.createDate = new Date().getDate();
    }
}
//3
namespace USA {
    // интерфейс получаемых данных
export interface INews {
        id: number;
        title: string;
        text: string;
        author: string;
    }
    
export class NewsService {
        // Url дял получения даных
        protected apiurl: string = 'https://news_api_usa_url'
        public getNews() {} // method
    }
}

namespace Ukraine {

export interface INews2 {
        uuid: string;
        title: string;
        body: string;
        author: string;
        date: string;
        imgUrl: string;
    }
    
export class NewsService2 {
        protected apiurl: string = 'https://news_api_2_url'
        public getNews() {} // method get all news
        public addToFavorite() {} // method add to favorites
    }
}

//4
export class Junior {
    doTasks():void {
        console.log('Actions!!!');
    }
}

export class Middle  {
    createApp():void {
        console.log('Creating!!!');
    }
}

export class Senior implements Junior, Middle{
    doTasks():void {}
    createApp():void {}
    goodSkilsOnAngular():void {}
}
// Микси который помогает сделать множественное наследование 
skilsSenirMixin(Senior, [Junior, Middle])
function skilsSenirMixin(targetClasss: any, baseClasses: any[]) {
    baseClasses.forEach((skilsSenior) => {
        Object.getOwnPropertyNames(skilsSenior.prototype).forEach((propName) => {
            targetClasss.prototype[propName] = skilsSenior.prototype[propName];
        });
    });
}


