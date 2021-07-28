class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;  
    }

}
class LinkedList{
    constructor(){
        this.head = null;  
    }

  // insert first item  
    insertFirst(value){
       this.head = new Node(value, this.head);
    }
// insert last item
    insertLast(item){

        if(this.head === null){
            this.insertFirst(item)
        }else{
            let tempNode = this.head;
            while(tempNode.next !== null){
                tempNode = tempNode.next;
            }
            tempNode.next = new Node(item, null)
        }

    }

    // find node

    find(value){
        let node = this.head;
        while(node){
            if(node.value == value){
                return node;
            }
            node=node.next;
        }
    }

    // remove item

    remove(item){
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }



// reverse linked list

reverseLinkedList(){

    if(this.head === null){
        return;
    }
    let currNode = this.head;
    let previousNode = null;
    let tempNode = currNode;

    while(currNode !== null){
        tempNode = currNode.next;
        currNode.next = previousNode;
        previousNode = currNode;
        currNode = tempNode;
    }
    this.head = previousNode;
}

// find thrid item from the end

findThirdFromEnd(){

    if(this.head === null){
        return;
    }

    let currNode = this.head;
    let previousNode = null;
    let previousPrevNode = null;

    while(currNode.next !== null){

        previousPrevNode = previousNode;
        previousNode = currNode;
        currNode = currNode.next;
    }

return previousPrevNode;


}

}

function main(){
    const SLL = new LinkedList();
     SLL.insertFirst('Apollo');
   
}
console.log(main());
const myLinkList = new LinkedList();
 myLinkList.insertFirst('Apollo');
 myLinkList.insertLast('Boomer');
 myLinkList.insertLast('Fast');
 myLinkList.insertLast('Hello');
 myLinkList.insertLast('Huater');
 myLinkList.insertLast('Starbuck');
console.log(myLinkList);
myLinkList.reverseLinkedList();
console.log(myLinkList);
myLinkList.findThirdFromEnd();
console.log(myLinkList.findThirdFromEnd());
// myLinkList.insertFirst('B');
// console.log(myLinkList);
// myLinkList.insertFirst('C');
// console.log(myLinkList);
// myLinkList.insertFirst('D');
// console.log(myLinkList);
//  const find = myLinkList.find('D');
//  console.log(find);
//  const reverseLinkedList = myLinkList.reverseLinkedList('D C B A');
// console.log(reverseLinkedList);
// myLinkList.insertLast('Z');
// console.log(myLinkList);

