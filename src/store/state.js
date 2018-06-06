// 避免部分浏览器的隐身模式或者是关闭localStorage，使用localStorage外层加try catch
let defaultCity = '上海'
try {
    if(localStorage.city){
        defaultCity = localStorage.city
    }
} catch (e) {}
export default {
    city:defaultCity
}