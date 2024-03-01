class Node{

    constructor(value, next = null){
        this.value = value;
        this.next = next
    }

}

class LinkedList{

    constructor(){
        this.head = null;
        this.size = 0;
    }

    // insert first node

    inserFirst(data){
        this.head = new Node(data, this.head);
    }

    insertLast(data){
        let firstNode = this.head;
        while(firstNode.next!= null){
            firstNode = firstNode.next;
        }
        firstNode.next = new Node(data);
    }
    toString(){
        let currentNode= this.head;
        while(currentNode.next != null){
            console.log(currentNode.value);
            currentNode = currentNode.next
        }
        console.log(currentNode.value);
        
    }
}


const ll = new LinkedList();

ll.inserFirst(100);

console.log(ll);
ll.inserFirst(200);

console.log(ll);

ll.insertLast(300);

console.log(ll);

ll.toString();