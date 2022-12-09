/*
Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true

Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false
*/

var leafSimilar = function (root1, root2) {
    let root1Leafs = []
    let root2Leafs = []
    searchTree(root1, root1Leafs)
    searchTree(root2, root2Leafs)

    function searchTree(root, arr) {
        if (root !== null) {
            if (root.left === null && root.right === null) {
                arr.push(root.val)
            }
            searchTree(root.left, arr)
            searchTree(root.right, arr)

        }
    }
    
    for (let i = 0; i < root1Leafs.length; i++) {
        if (root1Leafs[i] !== root2Leafs[i]) return false
    }

    return root1Leafs.length === root2Leafs.length
};