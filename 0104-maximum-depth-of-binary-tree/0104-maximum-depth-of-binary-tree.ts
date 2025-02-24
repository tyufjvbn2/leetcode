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

function maxDepth(root: TreeNode | null): number {
    if(!root) {
        return 0
    }
    else {   
        let depth: number = 0

        // this.val not 0 -> depth + 1
        // this.left && this.right both null -> return depth
        // search left||right -> give depth
        // final depth -> Math.max(left depth, right depth)

        function depChecker (node: TreeNode, depthNum: number): number {
            let curDepth = depthNum
            if(!node) {
                return curDepth
            }
            // console.log("val check : ", node.val)
            // console.log("left check : ", !!node.left)
            // console.log("right check : ", !!node.right)
            if(node.val !== undefined ) {
                curDepth += 1
            }
            if(!node.left && !node.right) {
                return curDepth
            }
            else {
                return Math.max(depChecker(node.left, curDepth), depChecker(node.right, curDepth))
            }
        }

        return depChecker(root, 0)
    }
};