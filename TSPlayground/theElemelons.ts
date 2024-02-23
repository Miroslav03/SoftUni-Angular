abstract class Melon {
    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    abstract get elementIndex(): number;

    public toString(): string {
        return `Element: ${(<any>this.constructor).name.split('melon')[0]} \nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}


class Watermelon extends Melon {
    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

class Firemelon extends Melon {
    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

class Earthmelon extends Melon {
    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

class Airmelon extends Melon {
    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

class Melolemonmelon extends Watermelon {

    public index: number = 0;
    public arr: string[] = ['Water', 'Fire', 'Earth', 'Air',];

    public morph(): void {
        if (this.index === this.arr.length) {
            this.index = 0;
        } else {
            this.index++;
        }
    }

    public toString(): string {
        return `Element: ${this.arr[this.index]} \nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
let randomMelon: Melolemonmelon = new Melolemonmelon(23, 'Big');
console.log(randomMelon.toString());
randomMelon.morph()
let randomMelon1: Melolemonmelon = new Melolemonmelon(49, 'Bigger');
console.log(randomMelon1.toString());





// Element: Water
// Sort: Kingsize
// Element Index: 100
