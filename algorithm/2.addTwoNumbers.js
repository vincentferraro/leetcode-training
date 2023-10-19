/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
 this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {

function browseLinkedList(head1, head2){
   let current1 = head1;
   let current2 = head2
   let addValue = false
   let listNode = new ListNode()
   while (current1 !== null & current2 !==null){
       let value = current1.val + current2.val
       if(addValue){
           value +=1
           addValue = false
       }
       if(value > 9){
           value = value.toString()
           value = parseInt(value[1])
           addValue = true
       }
       console.log("value Inter", value , addValue)
       
       console.log("value Final", value)
       listNode.val = value
       console.log("value",listNode.val )
       listNode.next= new ListNode()
       
       current1 = current1.next
       current2 = current2.next 
       listNode = listNode.next
   }
       return listNode
}

const head1 = l1;
const head2 = l2
const listNode = browseLinkedList(head1, head2);
console.log("LIST NODE FINAAL", listNode)
};