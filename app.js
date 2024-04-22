// write code here
let numbers = []; // 

while (true) {
  let input = prompt("ป้อนตัวเลข:");
  if (input === null || isNaN(input)) {
    break; // ถ้าเป็น Cancel หรือไม่ใช่ตัวเลขให้หยุดวนลูป
  }
  
  numbers.push(Number(input));
}

let sum = 0;
for (let number of numbers) {
  sum += number;
}

alert(`ผลรวมของตัวเลขทั้งหมดคือ: ${sum}`);
