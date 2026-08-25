const readline = require('readline-sync');

// โครงสร้าง Function ที่ต้องสร้าง (Function Signatures)
function calculateElectricBill(units) {
    if (units <= 100) {
        // กรณีใช้ไม่เกิน 100 หน่วย (คิดหน่วยละ 3.50 บาท)
        return units * 3.5;
    } else {
        // กรณีเกิน 100 หน่วย (100 หน่วยแรก * 3.5 + ส่วนที่เกิน * 4.5)
        return (100 * 3.5) + ((units - 100) * 4.5);
    }
}

// ขั้นตอนการทำงานหลัก (Logic Flow)
// 1. รับจำนวนหน่วยไฟฟ้าจากคีย์บอร์ดและแปลงเป็นชนิดข้อมูล Integer ด้วย parseInt()
const inputUnits = readline.question("ระบุจำนวนหน่วยไฟฟ้าที่ใช้งาน (หน่วย): ");
const units = parseInt(inputUnits);

// 2-3. เรียกใช้ฟังก์ชันเพื่อคำนวณค่าไฟฟ้าสุทธิ
const totalBill = calculateElectricBill(units);

// แสดงผลลัพธ์ออกทาง Terminal
console.log("----------------------------------------");
console.log(`ค่าไฟฟ้าสุทธิ: ${totalBill.toFixed(2)} บาท`);
console.log("----------------------------------------");