// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
const now = new Date();

// YYYY-MM-DD HH:mm
const format1 = now.getFullYear() + '-' + (now.getMonth() + 1).toString().padStart(2, '0') + '-' + now.getDate().toString().padStart(2, '0') + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
console.log(format1);

// DD-MM-YYYY HH:mm
const format2 = now.getDate().toString().padStart(2, '0') + '-' + (now.getMonth() + 1).toString().padStart(2, '0') + '-' + now.getFullYear() + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
console.log(format2);

// DD/MM/YYYY HH:mm
const format3 = now.getDate().toString().padStart(2, '0') + '/' + (now.getMonth() + 1).toString().padStart(2, '0') + '/' + now.getFullYear() + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
console.log(format3);