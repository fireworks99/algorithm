---
title: leecode 102. 二叉树的层序遍历
order: 1
---

## 问题

[题目链接](https://leetcode.cn/problems/binary-tree-level-order-traversal/description/)

给你二叉树的根节点 root ，返回其节点值的 **层序遍历** 。 （即逐层地，从左到右访问所有节点）。

## 思路

需要注意的点：

1. 题目需要返回一个二维数组（单纯的层序遍历返回一维数组）
2. 数组中的每一个数组分别对应一层所有的数据
3. 若二叉树为空，返回空数组

跟普通的BFS层序遍历相比，多了一个条件（相同层的数据放在一起），那么可以额外定义一个 flag 数组，跟 arr 队列保持一致， flag[index] 表示 arr[index] 在树的第 index 层（我这里 index 从0开始计，从1开始也行）。

往 ans 数组里 push 数据时，需要判断当前节点所在层是否已经有数据在 ans 里了。

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const arr = [], flag = [], ans = [];

  if (root) {
    arr.push(root);
    flag.push(0);
  }

  while (arr.length) {
    const p = arr[0];
    const q = flag[0];

    if (ans.length === q) {
      ans.push([p.val]);
    } else {
      ans[ans.length - 1].push(p.val);
    }

    if (p.left) {
      arr.push(p.left);
      flag.push(q + 1);
    }

    if (p.right) {
      arr.push(p.right);
      flag.push(q + 1);
    }
    arr.shift();
    flag.shift();
  }
  return ans;
};
~~~



