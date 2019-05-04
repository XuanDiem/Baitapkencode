function maQuocTeNuocMy(str) {
    let maQuocTe = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (maQuocTe.test(str)) {
        return true;
    } else {
        return false;
    }
}

let a = "0123 - 456789";
let b = "23479";
console.log(maQuocTeNuocMy(a));
console.log(maQuocTeNuocMy(b));