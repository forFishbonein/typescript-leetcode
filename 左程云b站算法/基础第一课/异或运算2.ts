/*
 * @FilePath: 异或运算2.ts
 * @Author: Aron
 * @Date: 2023-05-21 15:24:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-21 21:04:23
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
export default function printOddTimesNum2(arr: number[]): string {
  let eor: number = 0;
  for (let i of arr) {
    eor ^= i;
  }
  //eor = a ^ b
  //因为a!=b 所以 eor != 0
  //所以eor必然至少有一个位置上为1，
  //rightOne：用原码和补码进行与运算，得到二进制的eor右边第一个为1的那个位置所形成的二进制数，用于进行分类
  //因为异或操作中不同才为1，所以a的和b的一个有一个该位置上为1，一个该位置上为0，所以可以进行分类
  let rightOne: number = eor & (~eor + 1);
  //oneResult是其中一个结果a或者b
  let oneResult: number = 0;
  for (let item of arr) {
    if ((item & rightOne) !== 0) {
      //由于rightOne只有一位为1，所以这个结果也只会因为那一位而产生变化，都是1才不为0（不一定是1，应该是rightOne），否则为0
      //只有item的那一位上为1才会相与不为0 //也可以写为((item & rightOne) === rightOne)
      //如果item的那一位上为1，那么就归为一类，进行异或运算，因为只有a或者b类的才为奇数个，所以这里可以找出a或者b
      //相当于单独对一类进行异或，又转变成了简单的情况！
      oneResult ^= item;
    }
  }
  return "a:" + oneResult + "  b:" + (eor ^ oneResult);
}

const arr = [2, 2, 2, 3, 3, 4, 4, 4, 5, 5];
console.log(printOddTimesNum2(arr));
debugger;
