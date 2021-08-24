// course note summary

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

  // insert new value
insert(key, value) {
    // If the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
        this.key = key;
        this.value = value;
    }

    /* If the tree already exists, then start at the root, 
       and compare it to the key you want to insert.
       If the new key is less than the node's key 
       then the new node needs to live in the left-hand branch */
    else if (key < this.key) {
        /* If the existing node does not have a left child, 
           meaning that if the `left` pointer is empty, 
           then we can just instantiate and insert the new node 
           as the left child of that node, passing `this` as the parent */
        if (this.left == null) {
            this.left = new BinarySearchTree(key, value, this);
        }
        /* If the node has an existing left child, 
           then we recursively call the `insert` method 
           so the node is added further down the tree */
        else {
            this.left.insert(key, value);
        }
    }
    /* Similarly, if the new key is greater than the node's key 
       then you do the same thing, but on the right-hand side */
    else {
        if (this.right == null) {
            this.right = new BinarySearchTree(key, value, this);
        }
        else {
            this.right.insert(key, value);
        }
    }
}

// find key value in the tree
find(key) {
    // If the item is found at the root then return that value
    if (this.key == key) {
        return this.value;
    }
    /* If the item you are looking for is less than the root 
       then follow the left child.
       If there is an existing left child, 
       then recursively check its left and/or right child
       until you find the item */
    else if (key < this.key && this.left) {
        return this.left.find(key);
    }
    /* If the item you are looking for is greater than the root 
       then follow the right child.
       If there is an existing right child, 
       then recursively check its left and/or right child
       until you find the item */
    else if (key > this.key && this.right) {
        return this.right.find(key);
    }
    // You have searched the tree and the item is not in the tree
    else {
        throw new Error('Key Error');
    }
}

// remove key
remove(key) {
    if (this.key == key) {
        if (this.left && this.right) {
            const successor = this.right._findMin();
            this.key = successor.key;
            this.value = successor.value;
            successor.remove(successor.key);
        }
        /* If the node only has a left child, 
           then you replace the node with its left child */
        else if (this.left) {
            this._replaceWith(this.left);
        }
        /* And similarly if the node only has a right child 
           then you replace it with its right child */
        else if (this.right) {
            this._replaceWith(this.right);
        }
        /* If the node has no children then
           simply remove it and any references to it 
           by calling "this._replaceWith(null)" */
        else {
            this._replaceWith(null);
        }
    }
    else if (key < this.key && this.left) {
        this.left.remove(key);
    }
    else if (key > this.key && this.right) {
        this.right.remove(key);
    }
    else {
        throw new Error('Key Error');
    }
}

// Replace with 
_replaceWith(node) {
    if (this.parent) {
        if (this == this.parent.left) {
            this.parent.left = node;
        }
        else if (this == this.parent.right) {
            this.parent.right = node;
        }

        if (node) {
            node.parent = this.parent;
        }
    }
    else {
        if (node) {
            this.key = node.key;
            this.value = node.value;
            this.left = node.left;
            this.right = node.right;
        }
        else {
            this.key = null;
            this.value = null;
            this.left = null;
            this.right = null;
        }
    }
}

_findMin() {
    if (!this.left) {
        return this;
    }
    return this.left._findMin();
}

inOrder (values = []) {
    if (this.left) values = this.left.inOrder(values);
    values.push(this.key);
    if (this.right) values = this.right.inOrder(values);
    return values;
  }

  preOrder (values =[]) {
    values.push(this.key);
    if (this.left) values = this.left.preOrder(values);    
    if (this.right) values = this.right.preOrder(values);
    return values;
  }

  postOrder (values =[]) {
    if (this.left) values = this.left.postOrder(values);    
    if (this.right) values = this.right.postOrder(values);
    values.push(this.key);
    return values;
  }
  
}




//4.
// in order 14 15 19 25 27 35 79 89 90 91
// pre 35 25 15 14 19 27 89 79 91 90
// post 14 19 15 27 25 79 90 91 89 35


//            35
//        /      \
//       25       89
//     /    \     / \   
//    15    27   79  91 
//   /  \            /
// 14    19         90


//post 5 7 6 9 11 10 8
//pre 8 6 5 7 10 9 11             

      //       8
      //   6      10
      // 5   7   9  11




      //exo 7

      const SHARE_PRICES = [128, 97, 121, 123, 98, 97, 105];

/**
 * The share price for a company over a week's trading is as follows:
 *  [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the
 *  company on a particular day, and sell the shares on a following day,
 *  write an algorithm to work out what the maximum profit you could make would be.
 */

function maxProfits (arr) {
  //take in an array, return max profit
  let currMin = arr[0];
  let currMinIndex = arr[0];
  let currMax = arr[arr.length-1];
  let currMaxIndex = arr[arr.length-1];
  let currMaxProfit = currMax - currMin;

  for (let i = 0; i < arr.length; i++) {
    //iterate through the array looking for a better minimum
    if (currMaxIndex > i && currMax-arr[i] > currMaxProfit) {
      currMin = arr[i];
      currMinIndex = i;
      currMaxProfit = currMax - currMin;
    }
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] > currMax) {
        currMax = arr[j];
        currMaxProfit = currMax - currMin;
      }
    }    
  }
  return currMaxProfit;
}

console.log(maxProfits(SHARE_PRICES));

// 5. Implement different tree traversals
// Using your BinarySearchTree class from your previous lesson, 
//create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.

// A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25