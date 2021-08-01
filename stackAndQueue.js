class _Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

// 1. Create a stack class
class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    startTrek(value){
        this.top = new Node(value, this.head);
    }

    enqueue(){
        const node = new _Node(data);

            if (this.first === null) {
                this.first = node;
            }

            if (this.last) {
                this.last.next = node;
            }
            //make the new node the last item on the queue
            this.last = node;

    }
    dequeue() {
        if(this.first === null) {
          return;
        }
        const node = this.first;
        this.first = this.first.next;
    
        if(node === this.last) {
          this.last = null;
        }
        this.length--
        return node.data;
      }

// 2. Useful methods for a stack
   
 peek(){
    if(this.top){
        return this.top;
    }
}

isEmpty(){
    console.log(this.top === null)
    return this.top === null  
}
display(){
    
    let tempNode = this.top;
    while(tempNode){
        console.log(tempNode.data);
        tempNode = tempNode.next;
        
    }
}
    
}




const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
// console.log(starTrek);
// starTrek.peek();
starTrek.display();
starTrek.isEmpty();
console.log(starTrek);

