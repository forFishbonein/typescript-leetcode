/*
 * @FilePath: 归并 求数组小和.ts
 * @Author: Aron
 * @Date: 2023-05-22 13:35:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-05 12:41:25
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:归并排序实际上就是递归+合并！（包括了双指针的思想）
 * 这里是对于归并排序的改造：本质上就是在每一次排序的过程中，求了个小和
 */
export function smallSum(arr: number[]): any {
  if (arr == null || arr.length < 2) {
    return 0;
  }
  return process(arr, 0, arr.length - 1);
}
//在arr[L...R]既要排好序，也要求小和
export function process(arr: number[], L: number, R: number): any {
  //注意：函数是值传递，但是会改变原数组
  if (L == R) {
    return 0;
  }
  let mid = L + ((R - L) >> 1);
  //两个process分别的左侧/右侧排序并求小和，merge是把左右一起排序并求小和，本质上只是通过merge实现了排序并求小和，在process里面只有两个个元素的时候，merge才开始排序并求小和，依次出栈
  return process(arr, L, mid) + process(arr, mid + 1, R) + merge(arr, L, mid, R); //左边求和，右边求和，真正的求和是merge：右边有比它大的就加起来
}
export function merge(arr: number[], L: number, M: number, R: number) {
  let help = new Array(R - L + 1); //help是工具数组，暂存排序之后的内容，R-L+1是总的数据量
  let i = 0; //指针1：指向工具数组
  let p1 = L; //指针2：指向数组左边开头
  let p2 = M + 1; //指针3：指向数组右边开头
  let res = 0; //这个部分的小和
  //一旦有一个越界了，就开始走下面两个while的一个
  while (p1 <= M && p2 <= R) {
    res += arr[p1] < arr[p2] ? (R - p2 + 1) * arr[p1] : 0; //(R - p2 + 1)是说当前右组有多少个数比当前p1所指的数大！
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]; //TODO 排序不能省略，这是这个算法的精髓，只有排序了才可以直接知道右边有几个比左边的大！
    //TODO 只有arr[p1]严格小于arr[p2]时才拷贝左组，否则优先拷贝右组，这是和之前的区别
    //即：相等的时候先拷贝右组的，并且不产生小和
    //为什么这样呢？如果先拷贝的是左边的，那我们就不能方便地知道右组有多少个数比它大了（因为拷贝左边的同时要看右组有多少个数比它大，否则就来不及了）
  }
  //下面的两个while一定有一个会走，一个不会走！把剩余的直接放到help后面
  while (p1 <= M) {
    help[i++] = arr[p1++]; //这个时候不产生小和！
  }
  while (p2 <= R) {
    help[i++] = arr[p2++];
  }
  for (i = 0; i < help.length; i++) {
    arr[L + i] = help[i]; //把排好序的内容替换给arr，这样arr的一部分内容就排好序了
  }
  return res;
}
const arr = [2, 7, 11, 15, 3, 8, 7];
console.log(smallSum(arr));
// console.log(arr);
debugger;
