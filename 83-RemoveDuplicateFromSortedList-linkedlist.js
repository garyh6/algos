/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null) return head
    helper(head, head.next)
    return head
};

function helper(node, current) {
    if(current === null) {
        node.next = null
        return
    }
    if(node.val != current.val) {
        node.next = current
        node = current
    } 
    helper(node, current.next)
}