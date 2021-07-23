const Memory = require('./memory.js')
// const memory = new Memory();
const memory = new Memory

class Array{
    constructor(){
        this.length =0;
        this._capacity =0;
        this.ptr = memory.allocate(this.length);
    }

    push(value){
        if(this.length >= this._capacity){
            this._resize((this.length +1) * Array.SIZE_RATIO)
        }
        memory.set(this.ptr + this.length, value)
        this.length++
    }
    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = memory.allocate(size)
        if (this.ptr === null) {
            throw new Error('Out of memory')
        }
        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr)
        this._capacity = size
    }
    
    pop(){
        if(this.length == 0){
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length.length-1);
        this.length--;
        return value;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }



    // push(value){
    //     this._resize(this.length +1);
    //     memory.set(this.ptr + this.length, value);
    //     this.length++;
    // }
    // _resize(size){
    //     const oldPtr = this.ptr;
    //     this.ptr = memory.allocate(size);
    //     if(this.ptr ===null){
    //         throw new Error("out of memory");  
    //     }
    //     memory.copy(this.ptr, oldPtr, this.length);
    //     memory.free(oldPtr);
    // }

    // get(index){
    //     if(index < 0 || index >= this.length){
    //         throw new Error('Index error');
    //     }
    //   return memory.get(this.ptr +index);
    // }

}
// console.log('Hello world!')
// const myArray = new Array();
// myArray.push('Souleymane');
// const data = !myArray.get(0);
// console.log(data);
// console.log(myArray);

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    //pop an item
    arr.pop();
    arr.pop();
    arr.pop();
    

    // get first element
     console.log(arr.get(0));

     // empty  and add only one item
     arr.push("tauhida");
     console.log(arr.get(0));

    console.log(arr);
}
main();

