/**
 * 两数之和
 * @param nums
 * @param target
 * @returns
 */
//直接按F5即可运行
export default function twoSum(nums: number[], target: number): number[] {
  // 定义一个map，记录之前遍历的值，key: nums[i]; value: i
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if (map.has(x)) return [map.get(x)!, i];

    map.set(nums[i], i);
  }

  return [];
}

const arr = [2, 7, 11, 15];
console.log(twoSum(arr, 9));
debugger;
