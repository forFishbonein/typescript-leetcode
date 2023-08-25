/*
 * @FilePath: 插入排序.ts
 * @Author: Aron
 * @Date: 2023-05-19 20:43:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-21 21:42:58
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
export default function InsertionSort(arr: number[]): number[] {
  if (arr == null || arr.length < 2) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      //指针j指向的是已排序内容的最后一个元素！
      //这里的判断也可以写成if语句+break，效果一样，条件不满足了就会自动结束循环！
      //插入排序就相当于对于冒泡排序的改进，因为设置了提前结束的判断！
      let tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;
    }
  }
  return arr;
}

const arr = [2, 7, 11, 15, 3, 8, 7];
console.log(InsertionSort(arr));
debugger;
