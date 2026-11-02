---
title: leecode 230. 二叉搜索树中第 K 小的元素
order: 2
---

## 问题

[题目链接](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/)

给定一个二叉搜索树的根节点 `root` ，和一个整数 `k` ，请你设计一个算法查找其中第 `k` 小的元素（`k` 从 1 开始计数）。

## 思路

二叉搜索树的中序遍历，就是从小到大访问所有数据，那么访问到第 k 个数据就是第 k 小的数据。

因此在访问数据时，先执行 k-- ，当 k 减到 0 时，此时访问的数据就是第 k 小的数据。

在遍历过程中，

* 先在左子树里找答案，如果有则直接返回；
* 如果左子树没有，那么看当前节点是不是；
* 如果连当前节点都不是，那一定在右子树；

## Code

~~~js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  
  function inOrder(root) {
    if (root === null) return;
    const left = inOrder(root.left);
    if(k === 0) return left;
    k--;
    if(k === 0) {
      return root.val;
    }
    return inOrder(root.right);
  }

  return inOrder(root);
};
~~~

