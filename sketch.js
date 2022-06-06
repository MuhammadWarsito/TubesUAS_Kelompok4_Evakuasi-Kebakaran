//membuat array kosong yang akan diisi orang
let orang = [];
let j;

function setup() {
  //menentukan ukuran canvas
  createCanvas(400, 470);

  j = 0

  //mengisi orang dengan orang-orang
  for (let i=0; i<50; i++){
    orang.push(new orangOrang());
  }
}

function draw() {
  //menentukan warna background canvas
  background(220);

  //Nama Kelompok
  line(0, 400, 400, 400)
  text("Kelompok 4", 10, 420);
  text("Visualisasi Dalam Sains", 10, 440);
  text("(Evakuasi Kebakaran)", 10, 460);

  //gedung
  fill("yellow")
  rect(50, 50, 300, 50);
  rect(50, 120, 300, 50);
  rect(50, 200, 300, 50);
  fill("black")
  textSize(18);
  text("Gedung A", 50, 70);
  text("Gedung B", 50, 140);
  text("Gedung C", 50, 220);

  //sumber kebakaran
  fill("red")
  var a = 105 + 5*Math.sin(PI*j/50)
  j+=1
  ellipse(320, 150, a, a);
  fill("black")
  textSize(18);
  text("Sumber Api", 275, 150);

  //area ttik kumpul
  fill("green")
  rect(170, 320, 50, 50);
  textSize(15);
  text("Titik Kumpul", 165, 385);

  //menampilkan orang-orang
  fill("black")
  for (let i=0; i<orang.length; i++){
    orang[i].tampil();
    orang[i].bergerak();
  }
}

//membuat orang
class orangOrang {
  constructor(x,y){
    this.location = createVector(random(width*2/3),random(height*1/2));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
  }
  
  //untuk menampilkan orang dengan posisi random
  tampil(){
    ellipse(this.location.x, this.location.y, 5, 5);
  }
  
  //menentukan kemana gerak orang
  bergerak(){
    //titik kumpul orang
    var titikKumpul = createVector(190, 350);

    //arah kumpul orang
    var arahTitikKumpul = p5.Vector.sub(titikKumpul, this.location);
    arahTitikKumpul.normalize();
    arahTitikKumpul.mult(0.5); 

    //kecepatan kumpul orang
    var topSpeed = 0.25;
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahTitikKumpul);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
}