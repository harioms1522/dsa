import { LinkedList, LLNode } from "./LinkedList.js"
// creating a LL


export const LLModule = ()=>{
    // array to create a linked list
    const arr: number[] = [1,2,3,4,5,6]
    const ll = LinkedList.createFromArray<number>(arr)
    // ll.printLL()

    // lets append a node
    const newNode = new LLNode(124)
    ll.append(newNode)
    // ll.printLL()

    // prepend
    const newNode2 = new LLNode(12345)
    ll.prepend(newNode2)
    // ll.printLL()

    // insertAt
    const newNode3 = new LLNode(11)
    ll.insertAt(newNode3, 4)
    // ll.printLL()

    // deleteAt
    // ll.printLL()
    ll.deleteAt(2)
    // ll.deleteAt(200)
    // ll.printLL()

    // value check
    // ll.printLL()
    // console.log(ll.hasValue(12345))

    // go to certain node 
    // ll.printLL()
    // console.log(ll.find(12345))

    // reverse a LL
    // ll.printLL()
    // ll.reverse()
    // ll.printLL()

    // removeFirst
    // ll.printLL()
    ll.append(new LLNode(11))
    // ll.printLL()
    // ll.removeFirst(11)
    ll.removeAll(11)
    // ll.printLL()

    // toArray()
    // ll.printLL()
    // console.log(ll.toArray())

    // reverseRecusively
    // ll.printLL()
    ll.reverseRecursively()
    // ll.printLL()


    // findRecursive
    // ll.printLL()
    // console.log(ll.findRecursive(1))

    // removeRecursive
    // ll.printLL()
    // ll.removeRecursive(5)
    // ll.printLL()

    // get nth from end 
    ll.printLL()
    ll.getNthNodeFromEnd(5)
    ll.printLL()


} 