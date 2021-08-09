class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;

    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
    }

   enqueue(data){
       const node = new Node(data);
       if(this.last){
        this.last.next = node;
       }else{
           this.first = node;
       }

       this.last = node;
        
    }
    // startTrek(value){
    //     this.top = new Node(value, this.first);
    // }
    dequeue(){
        //case of trying dequeue an empty queue ; []
        if(!this.first){
            return;
        }
        // [A,B] one or more
      const node = this.first;
      this.first = this.first.next;
      // case of dequeing with one element ; [A] just one element
      if(!this.first){
          this.last = null;
      }
      return node;
    }

    // third exo the palindromes' words
    is_palindrome(s) {
        s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        // Your code goes here
        for(let i=0; i<s.length/2; i++ ){
            if(s[i] !== s[s.length-1-i]){
                return false;
            }
        }
       return true;
    }



}


const starTTrek = new Queue();
starTTrek.enqueue('Bailly');
starTTrek.enqueue('Jean');
starTTrek.enqueue('Daniels');
starTTrek.dequeue();

console.log(starTTrek);


// const is_palindrome = new Queue();
// True, true, true, false
console.log(starTTrek.is_palindrome("dad"));
console.log(starTTrek.is_palindrome("A man, a plan, a canal: Panama"));
console.log(starTTrek.is_palindrome("1001"));
console.log(starTTrek.is_palindrome("Tauhida"));

const dancers = [
    "F Jane",

"M Frank",

"M John",

"M Sherlock",

"F Madonna",

"M David",

"M Christopher",

"F Beyonce",
];

function soulDance (dancers){
 const waiting = new Queue();
 for(let i=0; i<dancers.length; i++){
     const dancer = dancers[i];
     const gender = dancer[0];
     if(!waiting.first){
         waiting.enqueue(dancer)
     }else{
         const pair = waiting.first.value;
         if(pair[0] == gender){
             waiting.enqueue(dancer)
         }else{
             waiting.dequeue()
             console.log(dancer, pair)
         }
     }
 }
 console.log(waiting);

}
soulDance(dancers);