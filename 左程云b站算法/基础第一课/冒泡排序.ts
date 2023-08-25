/*
 * @FilePath: 冒泡排序.ts
 * @Author: Aron
 * @Date: 2023-05-19 21:42:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-21 15:02:45
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
export default function BubbleSort(arr: number[]): number[] {
  if (arr == null || arr.length < 2) {
    return arr;
  }
  // 写法一：正常的普通写法
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     for (let j = 0; j < arr.length - 1 - i; j++) {
  //       //每次都找出一个最大值：通过两两比较，把更大的那个值不断往后面放，每次arr.length - i后面都是排序好了的内容，所以里面排序只需要到
  //       if (arr[j + 1] < arr[j]) {
  //         //或者写为(arr[j + 1] > arr[j])
  //         //将更小的值与最前面位置交换
  //         let tmp = arr[j];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = tmp;
  //       }
  //     }
  //   }
  // 写法二：其实含义都一样，但是相对更好理解，i可以直接作为第二个循环的边界
  for (let i = arr.length - 1; i > 0; i--) {
    //交换多少轮
    for (let j = 0; j < i; j++) {
      //比较多少轮
      //每次都找出一个最大值：通过两两比较，把更大的那个值不断往后面放
      if (arr[j + 1] < arr[j]) {
        //或者写为(arr[j + 1] > arr[j])
        //将更小的值与最前面位置交换
        // let tmp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = tmp;
        // 对于交换操作的优化：
        arr[j] = arr[j] ^ arr[j + 1];
        arr[j + 1] = arr[j] ^ arr[j + 1];
        arr[j] = arr[j] ^ arr[j + 1];
      }
    }
  }
  return arr;
}

const arr = [2, 7, 11, 15, 3, 8, 7];
console.log(BubbleSort(arr));
debugger;
