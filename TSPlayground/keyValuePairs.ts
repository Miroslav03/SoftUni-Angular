class KeyValuePair<T, U>{

    public key: T;
    public value: U;

    public setKeyValue(key: T, value: U): void {
        this.key = key;
        this.value = value;
    }

    public display(): void {
        console.log(`key = ${this.key}, value = ${this.value}`);

    }


};

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();
