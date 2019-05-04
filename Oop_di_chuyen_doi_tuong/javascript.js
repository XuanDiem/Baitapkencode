function Conan(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;


    this.getConanElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';

    };

    this.moveRight = function () {
        this.left += 10;
        console.log('ok: ' + this.left);
    };

    this.moveDown = function () {
        this.top += 10;
    };

    this.moveLeft = function () {
        this.left -= 10;
    };

    this.moveTop = function () {
        this.top -= 10;
    };

}


//alert("Width" + "1366");
//alert("Height" + "672")
var conan = new Conan('conan.jpg', 20, 30, 200);

function start() {
    if (conan.left < window.innerWidth - conan.size && conan.top == 20) {
        conan.moveRight();
    } //conan.left = 1170; conan.size = 200; conan.top = 20;


    if (conan.left >= window.innerWidth - conan.size && conan.top < window.innerHeight - conan.size) {
        conan.moveDown()
    } //conan.top = 480;

    if (conan.top >= (window.innerHeight - conan.size) && conan.left > 30) {
        conan.moveLeft()
    }
    //conan.left = 30

    if (conan.left <= 30 && conan.top > 20) {
        conan.moveTop()
    }
    //conan.left = 30; conan.top = 20 trở về vị trí đầu tiên để quay lại vòng if thứ nhất


    document.getElementById('game').innerHTML = conan.getConanElement();
    setTimeout(start, 10)
}

start();