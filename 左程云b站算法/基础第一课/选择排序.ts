/*
 * @FilePath: 选择排序.ts
 * @Author: Aron
 * @Date: 2023-05-19 20:43:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-19 21:42:18
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
export default function SelectionSort(arr: number[]): number[] {
  if (arr == null || arr.length < 2) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    //额外的变量 i，额外空间+1
    //看n-1眼，只需要排序到倒数第一个，最后一个一定是最大的了，所以为arr.length-1
    let minIndex = i; //当前未排序的最前面的那个数的索引 //临时的变量，每次出for循环会释放，不算额外的空间！
    for (let j = i + 1; j < arr.length; j++) {
      //额外的变量 j，额外空间+1
      //每眼查n-i-1次
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    //将更小的值与最前面位置交换
    let tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}

const arr = [2, 7, 11, 15, 3, 8, 7];
console.log(SelectionSort(arr));
debugger;
