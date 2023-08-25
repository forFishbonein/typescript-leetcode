/*
 * @FilePath: 归并排序.ts
 * @Author: Aron
 * @Date: 2023-05-22 13:35:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-22 20:11:51
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:归并排序实际上就是递归+合并！（包括了双指针的思想）
 */
export function MergeSort(arr: number[]): any {
  if (arr == null || arr.length < 2) {
    return arr;
  }
  return process(arr, 0, arr.length - 1);
}
export function process(arr: number[], L: number, R: number): any {
  //注意：函数是值传递，但是会改变原数组
  if (L == R) {
    return;
  }
  let mid = L + ((R - L) >> 1);
  //两个process加上merge才实现了排序！本质上只是通过merge实现了排序，在process里面只有两个个元素的时候，merge才开始排序，依次出栈
  process(arr, L, mid); //左边排序
  process(arr, mid + 1, R); //右边排序
  merge(arr, L, mid, R); //真正的排序+合并
  return arr;
}
export function merge(arr: number[], L: number, M: number, R: number) {
  let help = new Array(R - L + 1); //help是工具数组，暂存排序之后的内容，R-L+1是总的数据量
  let i = 0; //指针1：指向工具数组
  let p1 = L; //指针2：指向数组左边开头
  let p2 = M + 1; //指针3：指向数组右边开头
  //一旦有一个越界了，就开始走下面两个while的一个
  while (p1 <= M && p2 <= R) {
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }
  //下面的两个while一定有一个会走，一个不会走！把剩余的直接放到help后面
  while (p1 <= M) {
    help[i++] = arr[p1++];
  }
  while (p2 <= R) {
    help[i++] = arr[p2++];
  }
  for (i = 0; i < help.length; i++) {
    arr[L + i] = help[i]; //把排好序的内容替换给arr，这样arr的一部分内容就排好序了
  }
}
const arr = [2, 7, 11, 15, 3, 8, 7];
console.log(MergeSort(arr));
// console.log(arr);
debugger;
