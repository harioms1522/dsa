// This is a ll definition class
// The LinkedList class is a generic linked list implementation in TypeScript.
// It provides methods to add, remove, and search for elements in the list.

// It also includes a method to convert the list to an array and a method to reverse the list.
// The class is implemented using a Node class to represent each element in the list.

//  A node

type MaybeNode<T> = LLNode<T> | null | undefined;


export class LLNode<T> {
    value: T;
    next: LLNode<T> | null | undefined;
    constructor(value: T) {
        this.value = value;
        this.next = null
    }
}

// a LL class
export class LinkedList<T> {
    head: MaybeNode<T> = null;
    length: number

    constructor() {
        this.length = 0
        this.head = null
    }

    static createFromArray <T> (array: T[]){
        const ll = new LinkedList<T>()
        for (let item of array){
            const llNode = new LLNode<T>(item)
            ll.append(llNode)
        }
        return ll
    }

    append(node: LLNode<T>){
        if(!this.head){
            this.length++
            return this.head = node
        }

        // loop over head to get the last node
        let current: MaybeNode<T> = this.head
        while(current.next){
            current = current.next
        }
        
        current.next = node
        this.length++
    }

    prepend (node: LLNode<T>){
        // assgn the new node as the head of linkedlist
        // and the next of the node to the ll's head
        node.next = this.head
        this.head = node
    }

    // [{0,1}, {1,2}, {2,3}]

    insertAt (node: LLNode<T>, idx: number){
        let current: MaybeNode<T>  = this.head
        
        if(!current){
            throw new Error("it's an empty LL!")
        }

        if(idx == 0){
            this.prepend(node)
            return this
        }
        
        let i = 0
        while(current){
            if(i===idx-1){
                break;
            }
            current = current.next
            i++
        }

        if(!current){
            throw new Error("Index out of bound error!")
        }

        node.next = current?.next
        current.next = node
        return this
    }

    deleteAt(idx: number){
        let current: MaybeNode<T> = this.head
        let i = 0

        if(!current){
            throw new Error("An empty array!")
        }

        if(idx===0){
            this.head = current.next
            return this
        }

        while(current){
            if(i===idx-1){
                current.next = current.next?.next
                break
            } 
            current = current.next
            i++
        } 

        if(!current){
            throw new Error("Index out of bound error!")
        }

    }

    hasValue(value: T){
        let current: MaybeNode<T> = this.head
        while(current){
            if(current.value === value){
                return true
            }
            current = current.next
        }
        return false;
    }

    find(value: T){
        let current: MaybeNode<T> = this.head
        while(current){
            if(current.value === value){
                return current
            }
            current = current.next
        }
        return null;
    }

    removeFirst(value: T){
        let current: MaybeNode<T> = this.head
        let prevNode: MaybeNode<T> = null
        while(current){
            if(current.value === value){
                if(prevNode){
                    prevNode.next = current.next
                }else{
                    this.head = current.next
                }
                current = current.next
                return
            }else{
                // shift the window
                prevNode = current
                current = current.next
            }
            
        }
    }

    removeAll(value: T){
        let current: MaybeNode<T> = this.head
        let prevNode: MaybeNode<T> = null
        while(current){
            if(current.value === value){
                if(prevNode){
                    prevNode.next = current.next
                }else{
                    this.head = current.next
                }
                current = current.next
            }else{
                // shift the window
                prevNode = current
                current = current.next
            }
            
        }
    }

    reverse(){
        let current: MaybeNode<T> = this.head
        let prevNode: MaybeNode<T> = null
        while(current){       
            let nextNode: MaybeNode<T> = current.next
            // shift the window
            current.next = prevNode
            prevNode = current
            current = nextNode
        }
        
        this.head = prevNode
    }

    reverseRecursively(node: MaybeNode<T> = this.head, prevNode: MaybeNode<T> = null){
        let current = node
        if(current){
            if(!current?.next){
                current.next = prevNode
                this.head = current
                return
            }
            this.reverseRecursively(current.next, current)
            current.next = prevNode
        }
    }

    findRecursive(value: T, node: MaybeNode<T> = this.head): MaybeNode<T> {
        // base condition
        let current = node
        if(!current) return null
        if(!current.next){
            return null
        }

        if (value === current.value){
            return current
        }

        return this.findRecursive(value, current.next)
    }

    removeRecursive(value: T, node: MaybeNode<T> = this.head){
        let current = node

        if(!current) return this.head

        if(current.value === value){
            return current.next
        }

        current.next = this.removeRecursive(value, current.next)

        return current
    }

    getNthNodeFromHead(n: number){
        let i = 0
        let current: MaybeNode<T> = this.head
        while(i<n){
            current = current?.next
            i++
        }
        return current
    }


    getNthNodeFromEnd(n: number){
        let slow: MaybeNode<T> = this.head
        let prevNode: MaybeNode<T> = null
        let fast: MaybeNode<T> = this.getNthNodeFromHead(n)
        while(fast){
            prevNode = slow
            slow = slow?.next

            fast = fast.next
        }
        // remove slow
        if(!prevNode){
            return
        }

        prevNode.next = prevNode?.next?.next


    }


    toArray(){
        let current: MaybeNode<T> = this.head
        const arr: T[] = []
        while(current){
            arr.push(current.value)
            current = current.next
        }
        return arr
    }
 
    printLL(){
        if(!this.head){
            return console.log("This is an empty LL!")
        }

        let current : MaybeNode<T> = this.head
        
        let str = ""
        while(current){
            str += `${current.value} --> `
            current = current.next
        }
        str += `${current}`
        console.log(`length: ${this.length}, [ ${str} ]`)
    }
}