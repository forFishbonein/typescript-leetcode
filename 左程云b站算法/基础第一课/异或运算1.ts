/*
 * @FilePath: 异或运算.ts
 * @Author: Aron
 * @Date: 2023-05-21 15:24:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-21 15:31:50
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
export default function printOddTimesNum1(arr: number[]): number {
  let eor: number = 0;
  for (let i of arr) {
    //虽然 for...in 循环可以用于遍历对象的属性，但它不是用来遍历数组的最佳选择。
    //原因是 for...in 循环会遍历对象的所有可枚举属性，包括继承自原型链的属性。这样会导致ts报错！
    //所以我们使用for of
    eor ^= i;
  }
  return eor;
}

const arr = [2, 2, 3, 3, 4, 4, 4, 5, 5];
console.log(printOddTimesNum1(arr));
debugger;
