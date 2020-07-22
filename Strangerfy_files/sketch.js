//backgrouの正体
var walkersNum = 5;//開始点の色の数
var walkers = [];

function setup() {
    createCanvas(windowWidth, document.body.clientHeight);
    colorMode(HSB, 360, 100, 100);
    noStroke();

    for (var i = 0; i < walkersNum; i++) {
        walkers.push(new Walker());
    }
}

function draw() {
    for (var i = 0; i < walkersNum; i++) {
        walkers[i].display();
        walkers[i].move();
    }
}

function Walker() {
    this.x = width;
    this.y = height;
    this.r = max(width, height) / 100;//球の大きさ
    this.delta = this.r;
    this.c = color(random(255), 20, 255);

    this.display = function() {
        fill(this.c);
        ellipse(this.x, this.y, this.r, this.r);
    }

    this.move = function() {
        this.xSign = random(1) < 0.5 ? 1 : -1;//方向　球の種類と方向　次の球までの幅 散布率
        this.ySign = random(1) < 0.5 ? 1 : -1;

        this.x += this.xSign * this.delta;
        this.y += this.ySign * this.delta;

        var min = this.r / 2;
        var xMax = width - this.r / 2;
        var yMax = height - this.r / 2;

        if (this.x < min) {
            this.x = xMax;
        }
        if (this.x > xMax) {
            this.x = min;
        }
        if (this.y < min) {
            this.y = yMax;
        }
        if (this.y > yMax) {
            this.y = min;
        }

    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

$( '#canvas' ).get( 0 ).width = $( window ).width();
$( '#canvas' ).get( 0 ).height = $( window ).height();
