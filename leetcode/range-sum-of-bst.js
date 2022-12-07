/*
Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/
var rangeSumBST = function (root, low, high) {
    let total = 0
    treeDepth(root, low, high)
    return total

    
    function treeDepth(root, low, high) {
        if (root != null) {
            if (root.val >= low && root.val <= high) {
                total += root.val
            }
            if (root.val < high) {
                treeDepth(root.right, low, high)
            }
            if (root.val > low) {
                treeDepth(root.left, low, high)
            }

        }

    }
};