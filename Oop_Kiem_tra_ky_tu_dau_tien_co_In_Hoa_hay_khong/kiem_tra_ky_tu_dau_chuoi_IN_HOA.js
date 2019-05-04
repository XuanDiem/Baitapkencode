function isFirstLetterUpperCase(str) {
    let kyTuDauInHoa = /^[A-Z]/;
    if (kyTuDauInHoa.test(str)) {
        console.log(str + "\nString's first character is uppercase" + "\n(Ký tự đầu tiên của chuỗi là chữ in hoa)");
    } else {
        console.log(str + "\nString's first character is not uppercase" + "\n(Ký tự đầu tiên của chuỗi không là chữ in hoa)");
    }
}

let a = prompt("Nhap ten vao o trong ");
//let b = "vu Xuan Diem";
isFirstLetterUpperCase(a);
//isFirstLetterUpperCase(b);
