function numberSplit(num1){
    return [Math.floor(num1/2),Math.ceil(num1/2)];
}
//Math.floor JavaScript คือ function ของภาษา JavaScript 
//ทำหน้าที่คืนค่าตัวเลขเป็นชนิดจำนวนเต็มบวก หรือจำนวนเต็มลบ โดยลบทศนิยมออก 
//และคืนค่าให้ใกล้เคียงที่สุดกับค่าเดิม สามารถเขียนโปรแกรมได้ดังนี้
//Math.ceil JavaScript คือ คำสั่ง หรือฟังก์ชันสำหรับปัดทศนิยมขึ้นให้เป็นเลขจำนวนเต็ม 
//โดยให้มีค่าที่ใกล้เคียงที่สุดกับค่าเดิม
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));