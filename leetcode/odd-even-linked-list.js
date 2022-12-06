/*
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

var oddEvenList = function (head) {
    if (head === null) {
        return head
    }
    let even = []
    let odd = []
    let next = head.next
    let i = 0
    while (next) {
        if (i % 2 == 1) {
            odd.push(next.val)
        }
        else {
            even.push(next.val)
        }
        next = next.next
        i++
    }

    head.next = null
    next = head

    while (i > 0) {
        if (odd.length > 0) {
            next.next = new ListNode(odd.shift())
            next = next.next
        }
        else {
            next.next = new ListNode(even.shift())
            next = next.next
        }

        i--
    }
    return head
};

// var oddEvenList = function(head) {
//     if(head === null){
//         return head
//     }
//     let odd = head
//     let even = head.next
//     let evenHead = even

//     while(even && even.next) {
//         odd.next = even.next
//         odd = odd.next
//         even.next = odd.next
//         even = even.next
//     }
//     odd.next = evenHead
//     return head
// };


