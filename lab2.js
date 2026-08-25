const readline = require('readline-sync');

// โครงสร้าง Function
function calculateRoomArea(width, length) {
    let area = width * length;
    return area; // Return ค่าพื้นที่กลับออกไป
}

// ขั้นตอนการทำงานหลัก (Logic Flow)
// 1. รับค่าจากคีย์บอร์ด
const inputWidth = readline.question("Enter room width (m): ");
const inputLength = readline.question("Enter room length (m): ");

// 2. แปลงชนิดข้อมูลจาก String เป็น Number ด้วย parseFloat()
const width = parseFloat(inputWidth);
const length = parseFloat(inputLength);

// 3. เรียกใช้งานฟังก์ชันเพื่อคำนวณ และแสดงผลลัพธ์
const area = calculateRoomArea(width, length);
console.log(`Calculated Room Area: ${area} sq.m.`);