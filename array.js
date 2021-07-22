const Memory = require('./Memory')
const memory = new Memory();

class Array{
    constructor(){
        this.length =0;
        this._capacity =0;
        this.ptr = memory.allocate(this.length);
    }
    push(value){
        this._resize(this.length +1);
        memory.set(this.ptr + this.length, value);
        this.length++;
    }
    _resize(size){
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if(this.ptr ===null){
            throw new Error("out of memory");  
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
    }

    get(index){
        if(index <0 || index>=this.length){
            throw new Error('Index error');
        }
      return memory.get(this.ptr +index);
    }
}
console.log('Hello world!')
const myArray = new Array();
myArray.push('SOuleymane');
const data = myArray.get(0);
console.log(data);
console.log(myArray);

