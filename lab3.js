const readline = require('readline-sync');

// โครงสร้าง Function ที่ต้องสร้าง (Function Signatures)
function calculateFuelCost(distance, kmPerLiter, pricePerLiter) {
    // คำนวณจำนวนลิตรที่ใช้ = ระยะทาง / อัตราประหยัด
    let fuelUsed = distance / kmPerLiter;
    
    // คำนวณค่าน้ำมันรวม = จำนวนลิตรที่ใช้ x ราคาน้ำมันต่อลิตร
    let totalCost = fuelUsed * pricePerLiter;
    
    // Return ค่ากลับมา
    return totalCost;
}

// ขั้นตอนการทำงานหลัก (Logic Flow)
// 1. รับค่าระยะทาง, อัตราสิ้นเปลือง และราคาน้ำมัน จากคีย์บอร์ดทีละค่า (เปลี่ยนข้อความเป็นภาษาไทย)
const inputDistance = readline.question("ระบุระยะทาง (กิโลเมตร): ");
const inputKmPerLiter = readline.question("ระบุอัตราสิ้นเปลือง (กิโลเมตร/ลิตร): ");
const inputPricePerLiter = readline.question("ระบุราคาน้ำมัน (บาท/ลิตร): ");

// แปลงค่าที่รับเข้ามาจาก String เป็น Number 
const distance = parseFloat(inputDistance);
const kmPerLiter = parseFloat(inputKmPerLiter);
const pricePerLiter = parseFloat(inputPricePerLiter);

// เรียกใช้ Function ส่งค่าพารามิเตอร์เข้าไป และเก็บผลลัพธ์ไว้ในตัวแปร
const cost = calculateFuelCost(distance, kmPerLiter, pricePerLiter);

// แสดงผลลัพธ์เป็นภาษาไทย
console.log(`ค่าน้ำมันรวมทั้งหมดสำหรับการเดินทางคือ: ${cost.toFixed(2)} บาท`);