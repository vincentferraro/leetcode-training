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
            let valueInter = 0
            if(value > 9){
                valuetoString = value.toString()
                 valueInter = parseInt(valuetoString[0])
            }
            if(addValue){
                valueInter +=1
                addValue = false
            }
            listNode.val = valueInter
            listNode.next= new ListNode()
            
            current1 = current1.next
            current2 = current2.next 
            
        }

    }

    const head1 = l1;
    const head2 = l2
    browseLinkedList(head1, head2);
};