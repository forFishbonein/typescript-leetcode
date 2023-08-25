/*
 * @FilePath: 485. 最大连续 1 的个数.ts
 * @Author: Aron
 * @Date: 2023-06-05 12:41:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-05 12:45:25
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
export function findMaxConsecutiveOnes(arr: number[]): any {
  if (arr == null) {
    return 0;
  }
  let result = 0;
  let nums = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      nums += 1;
    } else if (arr[i] === 0) {
      result = nums;
      nums = 0;
    }
  }
  return result;
}
const arr = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(arr));
// console.log(arr);
debugger;
