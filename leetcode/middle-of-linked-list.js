/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

var middleNode = function (head) {
    let fast = head
    let slow = head

    // In this case, the fast tracking node will move at twice the pace as the slow tracking node. What happens is by the time the fast node reaches the end, the slow node will have moved half way through the linked list, making the slow node the middle of the list.
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};

