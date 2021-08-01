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
    startTrek(value){
        this.top = new Node(value, this.first);
    }
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
}

const starTTrek = new Queue();
starTTrek.enqueue('Bailly');
console.log(starTTrek)