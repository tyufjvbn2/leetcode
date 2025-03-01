/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null, arr: number[] = []): number[] {
    // return condition
    if(!root) {
        return arr
    }

    // feedback condition
    else {
        // left arr part
        arr.unshift(...inorderTraversal(root.left, []))
        // self val
        arr.push(root.val)
        // right arr part
        arr.push(...inorderTraversal(root.right, []))

        return arr
    }
};