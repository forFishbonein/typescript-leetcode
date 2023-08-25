/*
 * @FilePath: template2.ts
 * @Author: jack
 * @Date: 2023-05-18 23:14:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-19 20:38:16
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */

/**
 *@name:
 *@description:
 *@author:	Fishbone
 *@constant:	2023/05/19 14:46
 */

/**@description: node18以上的写法 */
// const readline = require("node:readline/promises");
// const { stdin: input, stdout: output } = require("node:process");

// const rl = readline.createInterface({ input, output });

// rl.question("请输入要输出的第n位斐波那契数列的数\n").then((line: any) => {
//   let num = Number(line);
//   //   let i = 2;
//   //   let shuzi = 0;
//   const test: any = (a: any) => {
//     if (a === 1 || a === 2) return 1;
//     return test(a - 1) + test(a - 2);
//   };
//   rl.close();
//   console.log(test(num));
// });

/**@description: node18以下的写法： */
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// /* 输入要求第几位 */
// rl.on("line", function (line: any) {
//   let num = Number(line);
//   //   let i = 2;
//   //   let shuzi = 0;
//   const test: any = (a: any) => {
//     if (a === 1 || a === 2) return 1;
//     return test(a - 1) + test(a - 2);
//   };
//   console.log(test(num));
// });

/**@description: node18以下模拟使用 Promise 风格的读取行功能的写法： */
const readline = require("readline");
const { promisify } = require("util");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questionAsync = promisify(rl.question).bind(rl);

(async function () {
  const line = await questionAsync("请输入斐波那契数列的位数: ");
  let num = Number(line);
  //   let i = 2;
  //   let shuzi = 0;
  const test: any = (a: any) => {
    if (a === 1 || a === 2) return 1;
    return test(a - 1) + test(a - 2);
  };
  console.log(test(num));
  rl.close();
})();
debugger;
