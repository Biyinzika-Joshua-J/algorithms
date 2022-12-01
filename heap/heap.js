/*
    binary heap
        -min heap - where the root node value is less or equal to  its children
        -max-heap - where the root node's value is greater or equal to its children
    
    Useful
    -------
        -Prim's algorithm
        -Heap sort
        -Priority queue
    
    Operations
    ----------
        Creation
        Peek top
        Extract min or max
        traverse
        size of heap
        insert value
        delete heap

    Implementaion
    -------------
    1. Array
        left child = array[2x]
        right child = array[2x + 1]
    
*/ 


function Heap(heap_size=20){
    this.size = 0;
    this.maxSize = heap_size+1;
    this.array = new Array(this.maxSize).fill(null); // not using index 0 to make the calculation easier
    this.peek = findPeak;
    this.heapSize = sizeOfHeap;
    this.insert = insertNode;
    this.traverse = levelOrderTraversal;

    function findPeak(){
        if (this.size >= 1){
            return this.array[1];
        }
        return;
    }

    function sizeOfHeap(){
        return this.size;
    }

    // traversal in binary heap
    function levelOrderTraversal(){
        for (let i=1; i<this.size+1; i++){
            console.log(this.array[i]);
        }
    }

    // insert a node in a binary heap
    function heapifyTreeInsert(index, type, self){ // O(logN) time and space
        let parentIndex = Math.floor(index/2);
        if (parentIndex < 1) return;

        if (!self) return;
        if (type === 'min'){
            if (self.array[index] < self.array[parentIndex]){
                
                //[self.array[index], self.array[parentIndex]] = [self.array[parentIndex], self.array[index]];
                let temp = self.array[index];
                self.array[index] = self.array[parentIndex];
                self.array[parentIndex] = temp;
            }
            heapifyTreeInsert(parentIndex, 'min');
        }else if(type === 'max'){
            if (self.array[index] > self.array[parentIndex]){
                let temp = self.array[index];
                self.array[index] = self.array[parentIndex];
                self.array[parentIndex] = temp;
            }
            heapifyTreeInsert(parentIndex, 'max'); // O(logN) time
        }
    }

    function insertNode(nodeValue, type='min'){
        
        if (this.size+1 === this.maxSize) return 'Heap is full';
        this.array[this.size+1] = nodeValue;
        this.size += 1;
        heapifyTreeInsert(this.size, type, this);
        return 'Successfully inserted';
    }

}

let binaryHeap1 = new Heap();
let array = [1000, 200, 1, 0, 50]
array.forEach(value => {
    binaryHeap1.insert(value);
})

binaryHeap1.traverse()