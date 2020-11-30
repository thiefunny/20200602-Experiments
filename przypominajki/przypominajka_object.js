const miki = {
    a: "Miki",
    b: "Wali",
    razem() {
        console.log(this.a + this.b);
    },
    generuj() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr[i] = i;
        }
        this.array = arr;        
    }
}

miki.generuj();
console.log(miki.array);