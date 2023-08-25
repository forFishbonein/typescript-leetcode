/*
 * @FilePath: 递归引例 找数组最大值.ts
 * @Author: Aron
 * @Date: 2023-05-22 00:31:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-22 13:36:48
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
export default function getMax(arr: number[], L: number, R: number): number {
  if (L === R) {
    return arr[L]; //如果L和R重叠了，就直接返回，最底层的左最大和右最大是靠这个返回的 ——> 终止的边界条件
  }
  let mid = L + ((R - L) >> 1);
  //二叉树思想：递归的二分，每一个大问题转换为两个递归问题（递归问题再比大小取最值）
  let leftMax = getMax(arr, L, mid); //在左边找最大值
  let rightMax = getMax(arr, mid + 1, R); //在右边找最大值
  return Math.max(leftMax, rightMax); //返回左右中更大的那个，也就是最终的最大值是靠这个返回的 ——> 最终要的只是一个值
}
const arr = [2, 7, 11, 15, 3, 8, 7];
console.log(getMax(arr, 0, arr.length - 1));
debugger;
