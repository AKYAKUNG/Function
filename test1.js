const readline = require('readline-sync');

// โครงสร้าง Function ที่ต้องสร้าง (Function Signatures)
function calculateDiscount(totalPrice, isMember) {
    // เช็ค if (isMember) ตาม Flowchart
    if (isMember === true) {
        // กรณีเป็นสมาชิก: ได้รับส่วนลด 10%
        return totalPrice * 0.10;
    } else {
        // กรณีไม่ได้เป็นสมาชิก: ไม่ได้รับส่วนลด
        return 0;
    }
}

// ขั้นตอนการทำงานหลัก (Logic Flow)
// 1. รับราคาสินค้าและสถานะสมาชิก (y/n) จากคีย์บอร์ด
const inputPrice = readline.question("ระบุราคาสินค้ารวม (บาท): ");
const inputMemberStatus = readline.question("คุณเป็นสมาชิกหรือไม่ (พิมพ์ y หรือ n): ");

// แปลงราคาสินค้าจาก String เป็น Number
const totalPrice = parseFloat(inputPrice);

// 2. แปลงคำตอบ y/n ให้เป็น Boolean (true/false)
let isMember = false;
if (inputMemberStatus.toLowerCase() === 'y') {
    isMember = true;
}

// 3. เรียกใช้ฟังก์ชันเพื่อหาค่าส่วนลด
const discountAmount = calculateDiscount(totalPrice, isMember);

// คำนวณยอดจ่ายสุทธิ (แถมให้ตาม Test Case ในโจทย์)
const netPrice = totalPrice - discountAmount;

// แสดงผลลัพธ์
console.log("----------------------------------------");
console.log(`ส่วนลดที่ได้รับ: ${discountAmount} บาท`);
console.log(`ยอดจ่ายสุทธิ: ${netPrice} บาท`);
console.log("----------------------------------------");