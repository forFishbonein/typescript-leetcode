/*
 * @FilePath: 对数器.ts
 * @Author: Aron
 * @Date: 2023-05-21 23:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-22 00:13:46
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 对数器写法可以保证我们的算法不需要依赖线上测试平台，自己就可以测出来，保证了我们写的算法的正确性！
 * 一般来说，一种方法是我们想要的一个效率很高的算法（很难保证正确），另一种方法是我们比较有把握的但是效率不高的算法（暴力，或者系统给的算法）
 */
//要测的算法
export function InsertionSort(arr: number[]): number[] {
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
//对数器：一个确保正确的算法
export function comparator(arr: number[]): number[] {
  //注意：.sort()方法会按照默认的排序规则对数组进行排序。对于数字数组，默认的排序是基于字符串的字典顺序。
  //而.sort((a, b) => a - b)是按照数字大小进行排序，可以使用一个比较函数作为 sort() 方法的参数
  return arr.sort((a, b) => a - b);
}
//生成随机长度的随机数组
export function generateRandomArray(maxSize: number, maxValue: number) {
  const length = Math.floor(Math.random() * maxSize) + 1; // 生成随机长度（1到10之间）
  const arr = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * maxValue); // 生成随机元素（0到99之间）
    arr.push(randomNumber);
  }

  return arr;
}
//复制数组
export function copyArray(arr: number[]): any {
  if (arr === null) {
    return null;
  }
  let res: number[] = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    res[i] = arr[i];
  }
  return res;
}
//比较两个数组是否相等
function isArraysEqual(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((element, index) => element === arr2[index]);
}
//这里用对数器测试一下我们写的插入排序
export function test() {
  let testTimes = 500000; //总共测的次数
  let maxSize = 100;
  let maxValue = 100;
  let succeed = true;
  for (let i = 0; i < testTimes; i++) {
    let arr1: number[] = generateRandomArray(maxSize, maxValue);
    let arr2: number[] = copyArray(arr1);
    arr1 = InsertionSort(arr1);
    arr2 = comparator(arr2);
    if (!isArraysEqual(arr1, arr2)) {
      //比较我们的算法的结果是否和对数器算法的结果一样
      console.log(arr1);
      console.log(arr2);
      succeed = false; //一旦有不一样的，那么就直接失败
      break;
    }
  }
  console.log(succeed ? "Nice!" : "Fucking funced!");
  //下面是最终我们算法的效果！
  let arr = generateRandomArray(maxSize, maxValue);
  console.log(arr);
  arr = InsertionSort(arr);
  console.log(arr);
}
test();
