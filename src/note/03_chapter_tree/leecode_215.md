---
title: leecode 215. 数组中的第K个最大元素
order: 3
---

## 问题

[题目链接](https://leetcode.cn/problems/kth-largest-element-in-an-array/description/)

给定整数数组 `nums` 和整数 `k`，请返回数组中第 `k` 个最大的元素。

## 思路

Top-k 问题，构建一个大小为 k 的小顶堆，从第 k + 1 个元素开始遍历，如果当前元素大于堆顶，则用它替换掉堆顶元素并执行堆化，遍历完成后，堆中保存的就是最大的 k 个元素（但**无序**），且堆顶元素就是第 k 个最大的元素（因为小顶堆根元素最小）

* 求前 k 个最大元素 / 第 k 个最大元素：维护大小为 k 的**小顶堆**，遍历完后，堆中前 k 大，堆顶第 k 大；
* 求前 k 个最小元素 / 第 k 个最小元素：维护大小为 k 的**大顶堆**，遍历完后，堆中前 k 小，堆顶第 k 小；

堆顶是淘汰门槛，

若目标是找大的，那么新元素**大于堆中最小的**即可入堆，堆中最值只能是堆顶，所以此时**堆顶最小**，所以建小顶堆

若目标是找小的，那么新元素**小于堆中最大的**即可入堆，堆中最值只能是堆顶，所以此时**堆顶最大**，所以建大顶堆



此题是找大的，所以建小顶堆

## Code

### vector做堆

~~~c++
#include <vector>
#include <iostream>
using namespace std;

/* 获取左子节点的索引 */
int left(int i)
{
  return 2 * i + 1;
}

/* 获取右子节点的索引 */
int right(int i)
{
  return 2 * i + 2;
}

/* 获取父节点的索引 */
int parent(int i)
{
  return (i - 1) / 2; // 向下整除
}

// 自顶至底 构建 小顶堆
void shiftDown(vector<int> &nums, int i)
{
  int sz = nums.size();
  while (true)
  {
    int l = left(i), r = right(i), ma = i;
    if (l < sz && nums[l] < nums[ma])
      ma = l;
    if (r < sz && nums[r] < nums[ma])
      ma = r;
    if (ma == i)
      break;
    swap(nums[i], nums[ma]);
    i = ma;
  }
}

int findKthLargest(vector<int> &nums, int k)
{
  vector<int> tem;
  for (int i = 0; i < k; ++i)
    tem.push_back(nums[i]);

  // 构建一个大小为 k 的小顶堆
  for (int i = parent(tem.size() - 1); i >= 0; --i)
    shiftDown(tem, i);

  for (int i = k; i < nums.size(); ++i)
  {
    if (nums[i] > tem[0])
    {
      tem[0] = nums[i];  // 代替堆顶
      shiftDown(tem, 0); // 堆化
    }
  }

  return tem[0];
}

int main()
{
  vector<int> nums = {3, 2, 1, 5, 6, 4};
  int k = 2;
  cout << findKthLargest(nums, k) << '\n';

  vector<int> nums2 = {3, 2, 3, 1, 2, 4, 5, 5, 6};
  int k2 = 4;
  cout << findKthLargest(nums2, k2) << '\n';

  return 0;
}
~~~



### priority_queue做堆

~~~c++
#include <queue>
#include <vector>
#include <iostream>
using namespace std;

int findKthLargest(vector<int> &nums, int k)
{
  priority_queue<int, vector<int>, greater<int>> q;

  for (int i = 0; i < k; ++i)
    q.push(nums[i]);

  for (int i = k; i < nums.size(); ++i)
  {
    if (nums[i] > q.top())
    {
      q.pop();
      q.push(nums[i]);
    }
  }

  return q.top();
}

int main()
{
  vector<int> nums = {3, 2, 1, 5, 6, 4};
  int k = 2;
  cout << findKthLargest(nums, k) << '\n';

  vector<int> nums2 = {3, 2, 3, 1, 2, 4, 5, 5, 6};
  int k2 = 4;
  cout << findKthLargest(nums2, k2) << '\n';

  return 0;
}
~~~

