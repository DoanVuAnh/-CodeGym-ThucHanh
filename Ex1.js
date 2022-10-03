let sum = 0;
function finAvg(arr) {
    for (let i in arr) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    alert("Điểm trung bình :" + avg.toFixed(2))
}
let arr = [10, 10, 10, 10, 10, 10];
finAvg(arr);