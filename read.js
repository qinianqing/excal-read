/*
 * @Description: 读取老版excal
 * @Author: 惜神
 * @Date: 2021-07-23 13:40:15
 */
const xlsx = require('xlsx');
const read = () => {
    const workbook = xlsx.readFile("./hh.xls");
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    let data = []
    for (value in worksheet) {
        if (value[0] === '!') continue;
        let key = Number(value.slice(1, value.length)) - 1;
        if (!(data[key] instanceof Array)) {
            data[key] = [];
        }
        data[key].push(worksheet[value].v);
    }
    return data;
}
const result = read('');
console.log(result) // [ [ '姓名', '城市', '年龄' ], [ '齐年庆', '南阳', 18 ], [ '伟峰', '郑卓', 25 ] ]
