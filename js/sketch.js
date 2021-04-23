const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinko, ground;
var plinko1, plinko6, plinko11, plinko16, plinko20, plinko25, plinko30, plinko35, plinko40, plinko45, plinko50, plinko55;
var plinko2, plinko7, plinko12, plinko16, plinko21, plinko26, plinko31, plinko36, plinko41, plinko46, plinko51, plinko56;
var plinko3, plinko8, plinko13, plinko17, plinko22, plinko27, plinko32, plinko37, plinko42, plinko47, plinko52, plinko57;
var plinko4, plinko9, plinko14, plinko18, plinko23, plinko28, plinko33, plinko38, plinko43, plinko48, plinko53, plinko58;
var plinko5, plinko10, plinko15, plinko19, plinko24, plinko29, plinko34, plinko39, plinko44, plinko49, plinko54, plinko59;
var plinko60;
var Ground1, Ground2, Ground3, Ground4;
var Division1;
var divisionHeight = 400;
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(850, 900);

  engine = Engine.create();
  world = engine.world;
  //Row1
  plinko1 = new Plinko(50, 50, 20, 20);
  plinko2 = new Plinko(120, 50, 20, 20);
  plinko3 = new Plinko(200, 50, 20, 20);
  plinko4 = new Plinko(280, 50, 20, 20);
  plinko5 = new Plinko(360, 50, 20, 20);
  plinko6 = new Plinko(440, 50, 20, 20);
  plinko7 = new Plinko(520, 50, 20, 20);
  plinko8 = new Plinko(600, 50, 20, 20);
  plinko9 = new Plinko(680, 50, 20, 20);
  plinko10 = new Plinko(760, 50, 20, 20);
  //Row2
  plinko11 = new Plinko(80, 110, 20, 20);
  plinko12 = new Plinko(160, 110, 20, 20);
  plinko13 = new Plinko(240, 110, 20, 20);
  plinko14 = new Plinko(320, 110, 20, 20);
  plinko15 = new Plinko(400, 110, 20, 20);
  plinko16 = new Plinko(480, 110, 20, 20);
  plinko17 = new Plinko(560, 110, 20, 20);
  plinko18 = new Plinko(640, 110, 20, 20);
  plinko19 = new Plinko(720, 110, 20, 20);
  plinko20 = new Plinko(800, 110, 20, 20);
  //Row3
  plinko21 = new Plinko(50, 170, 20, 20);
  plinko22 = new Plinko(120, 170, 20, 20);
  plinko23 = new Plinko(200, 170, 20, 20);
  plinko24 = new Plinko(280, 170, 20, 20);
  plinko25 = new Plinko(360, 170, 20, 20);
  plinko26 = new Plinko(440, 170, 20, 20);
  plinko27 = new Plinko(520, 170, 20, 20);
  plinko28 = new Plinko(600, 170, 20, 20);
  plinko29 = new Plinko(680, 170, 20, 20);
  plinko30 = new Plinko(760, 170, 20, 20);
  //Row4
  plinko31 = new Plinko(80, 230, 20, 20);
  plinko32 = new Plinko(160, 230, 20, 20);
  plinko33 = new Plinko(240, 230, 20, 20);
  plinko34 = new Plinko(320, 230, 20, 20);
  plinko35 = new Plinko(400, 230, 20, 20);
  plinko36 = new Plinko(480, 230, 20, 20);
  plinko37 = new Plinko(560, 230, 20, 20);
  plinko38 = new Plinko(640, 230, 20, 20);
  plinko39 = new Plinko(720, 230, 20, 20);
  plinko40 = new Plinko(800, 230, 20, 20);
  //Row5
  plinko41 = new Plinko(50, 290, 20, 20);
  plinko42 = new Plinko(120, 290, 20, 20);
  plinko43 = new Plinko(200, 290, 20, 20);
  plinko44 = new Plinko(280, 290, 20, 20);
  plinko45 = new Plinko(360, 290, 20, 20);
  plinko46 = new Plinko(440, 290, 20, 20);
  plinko47 = new Plinko(520, 290, 20, 20);
  plinko48 = new Plinko(600, 290, 20, 20);
  plinko49 = new Plinko(680, 290, 20, 20);
  plinko50 = new Plinko(760, 290, 20, 20);
  //Row6
  plinko51 = new Plinko(80, 350, 20, 20);
  plinko52 = new Plinko(160, 350, 20, 20);
  plinko53 = new Plinko(240, 350, 20, 20);
  plinko54 = new Plinko(320, 350, 20, 20);
  plinko55 = new Plinko(400, 350, 20, 20);
  plinko56 = new Plinko(480, 350, 20, 20);
  plinko57 = new Plinko(560, 350, 20, 20);
  plinko58 = new Plinko(640, 350, 20, 20);
  plinko59 = new Plinko(720, 350, 20, 20);
  plinko60 = new Plinko(800, 350, 20, 20);
  //Boundries
  Ground1 = new Ground(9, 490, 20, 1000);
  Ground2 = new Ground(841, 450, 20, 1000);
  Ground3 = new Ground(425, 891, 812, 20);
  Ground4 = new Ground(425, 10, 812, 20);
  //Divisions
  for (var k = 0; k <= width; k = k + 100) {
    divisions.push(new Division(k - 71, height - divisionHeight / 2, 20, divisionHeight))
  }
  Division1 = new Division(820, 700, 20, 400);

  Engine.run(engine);

}

function draw() {
  Engine.update(engine);
  background("black");

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko44.display();
  plinko45.display();
  plinko46.display();
  plinko47.display();
  plinko48.display();
  plinko49.display();
  plinko50.display();
  plinko51.display();
  plinko52.display();
  plinko53.display();
  plinko54.display();
  plinko55.display();
  plinko56.display();
  plinko57.display();
  plinko58.display();
  plinko59.display();
  plinko60.display();

  Ground1.display();
  Ground2.display();
  Ground3.display();
  Ground4.display();

  if (frameCount % 60 === 0) {
    particles.push(new Particles(random(width / 2 - 10, width / 2 + 10), 10, 10))
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  Division1.display();

}