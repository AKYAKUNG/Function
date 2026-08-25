const readline = require('readline-sync');

// 1. ฟังก์ชันคำนวณค่า BMI (แปลง heightCm เป็นเมตรก่อนคำนวณ)
function calculateBMI(weightKg, heightCm) {
    let heightM = heightCm / 100;
    let bmi = weightKg / (heightM * heightM);
    return bmi;
}

// 2. ฟังก์ชันแปลผลค่า BMI ตามตารางเกณฑ์มาตรฐาน
function evaluateBMI(bmi) {
    if (bmi < 18.5) {
        return "ผอม / น้ำหนักน้อยกว่าเกณฑ์";
    } else if (bmi <= 22.9) {
        return "น้ำหนักปกติ เหมาะสม";
    } else if (bmi <= 24.9) {
        return "ท้วม / สภาวะน้ำหนักเกิน";
    } else if (bmi <= 29.9) {
        return "อ้วน / โรคอ้วนระดับ 1";
    } else {
        return "อ้วนมาก / โรคอ้วนระดับ 2";
    }
}

// ขั้นตอนการทำงานหลัก (Logic Flow)
// 1. รับค่าน้ำหนักและส่วนสูงผ่านคีย์บอร์ด
const inputWeight = readline.question("ระบุน้ำหนัก (กก.): ");
const inputHeight = readline.question("ระบุส่วนสูง (ซม.): ");

const weightKg = parseFloat(inputWeight);
const heightCm = parseFloat(inputHeight);

// 2. คำนวณค่า BMI ผ่านฟังก์ชัน calculateBMI()
const bmiValue = calculateBMI(weightKg, heightCm);

// 3. ส่งค่า BMI ไปยังฟังก์ชัน evaluateBMI() เพื่อประเมินเกณฑ์สุขภาพ
const result = evaluateBMI(bmiValue);

// 4. แสดงผลลัพธ์ทั้งค่า BMI และผลการประเมินออกทาง Terminal
console.log("----------------------------------------");
console.log(`ค่า BMI: ${bmiValue.toFixed(2)}`);
console.log(`ผลการประเมิน: ${result}`);
console.log("----------------------------------------");