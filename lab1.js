// นำเข้าโมดูล readline-sync สำหรับรับค่าจากคีย์บอร์ด
const readline = require('readline-sync');

// โครงสร้าง Function ที่ต้องสร้าง
function showReceiptHeader(storeName) {
    // แปลงชื่อร้านค้าเป็นตัวพิมพ์ใหญ่
    const upperStoreName = storeName.toUpperCase();
    
    // พิมพ์หัวข้อใบเสร็จออกทางหน้าจอพร้อมเส้นคั่นให้สวยงาม
    console.log("========================================");
    console.log(`              ${upperStoreName}              `);
    console.log("========================================");
    // ไม่มี return ค่ากลับมาตามเงื่อนไขโจทย์
}
const inputName = readline.question("Enter Store Name: ");

// 2. ส่งชื่อร้านค้าเข้าฟังก์ชัน showReceiptHeader()
showReceiptHeader(inputName);