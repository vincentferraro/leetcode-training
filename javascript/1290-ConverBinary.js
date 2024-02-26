var getDecimalValue = function(head) {
    let num =0

    while(head !=null){
        num = (num*2)+ head.val;
        console.log(num)
        head = head.next;
        
    }
    return num
};