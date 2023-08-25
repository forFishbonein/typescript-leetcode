/*
 * @FilePath: 二分查找.ts
 * @Author: Aron
 * @Date: 2023-05-19 20:43:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-21 22:52:18
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
//例题：输出一个数组里面等于5的数的第一个索引
export default function BinarySearch(array: number[]): number {
  let l = -1; //定义两个指针，分别指向头之前和尾之后
  let r = array.length;
  while (l + 1 !== r) {
    //如果两个指针没有挨到一起
    // let num = parseInt(((l + r) / 2).toString());
    let num = Math.floor((l + r) / 2); //中间位置
    if (array[num] < 5) {
      //判断中间位置是不是我们想要的效果（isBlue）
      l = num;
    } else {
      r = num;
    }
  }
  if (array[r] === 5) {
    //分到最后时的r就是我们想要的那个结果
    //反正不管怎么样，最后两个指针一定会挨到一起，两个指针一定有一个就是我们想要的结果
    //特判，判断是否确实是5
    return r;
  } else {
    return -1; //不存在5
  }
}

let arr = [1, 2, 5, 5, 7];
console.log(BinarySearch(arr));
debugger;
