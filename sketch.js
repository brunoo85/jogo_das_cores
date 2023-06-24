var xMinBotao= 230
var larguraBotao= 150
var xMaxBotao= xMinBotao+larguraBotao
var yMinBotao1= 200
var alturaBotao= 40
var yMaxBotao1 = yMinBotao1 + alturaBotao

var yMinBotao2= 270
var yMaxBotao2 = yMinBotao2 + alturaBotao

var yMinBotao3= 340
var yMaxBotao3 = yMinBotao3 + alturaBotao

//botões da fase um

var xMinBotao= 230
var larguraBotao= 150
var xMaxBotao= xMinBotao+larguraBotao
var yMinBotao1= 200
var alturaBotao= 40
var yMaxBotao1 = yMinBotao1 + alturaBotao

//botão setas 

var xMinBotaovoltar= 1
var larguraBotaovoltar= 32
var xMaxBotaovoltar= xMinBotaovoltar+larguraBotaovoltar
var yMinBotaovoltar= 1
var alturaBotaovoltar= 32
var yMaxBotaovoltar = yMinBotaovoltar + alturaBotaovoltar


//Gambiarra
var status1=true;
var status2=true;
var status3=false;
var status4=false;
var status5=false;

var fontAbel;
var fontGreatVibes
var fontYanoneKaffeesatz
var fontCrimson_Pro

var imagemCreditos
var imageminstrucao
var imagemMenu
var imagemJogar1
var tabeladecores

var nivel1
var nivel2
var nivel3
var nivel4
var nivel5
var final
var fimdejogo

var tela=0
//tela 1: jogar
//tela 2: intrução
//tela 3: creditos

function setup() {
  createCanvas(619, 500);
}

function draw() {
  if(tela==0)
  fill(1)
  background(imagemMenu)
  textSize(50);
  textFont(fontGreatVibes)
  text('Jogo das Cores' , 170, 140);
  
   
  if(mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao1 && mouseY < yMaxBotao1){
    fill(135,206,250)
    if(mouseIsPressed){
      tela=1
    }
    
  }
   else{
     noFill();
   }
  rect(xMinBotao,yMinBotao1,larguraBotao,alturaBotao,15)
  textSize(30)
  fill(250)
  text("Jogar",xMinBotao + 30,yMinBotao1 + 30 )
  
 if(mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao2 && mouseY < yMaxBotao2 && tela==0){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=2
    }
    
  }
   else{
     noFill();
   }
  rect(xMinBotao,yMinBotao2,larguraBotao,alturaBotao,15)
  textSize(30)
  fill(250)
  text("Instruções",xMinBotao +20,yMinBotao2 + 30 )
  
   if(mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao3 && mouseY < yMaxBotao3 && tela==0){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=3
    }
    
  }
   else{
     noFill();
   }
  rect(xMinBotao,yMinBotao3,larguraBotao,alturaBotao,15)
  textSize(30)
  fill(250)
  text("Créditos",xMinBotao +35,yMinBotao3 + 30 )
  
 
  
  
  
  
  
  
  if(tela==1)
  telajogar()
  if(tela==2) 
  telaInstrucoes()
  if(tela==3)
  telaCreditos()
  if(tela==4)
  fase1()
  if(tela==5)
  fase2()
  if(tela==6)
  fase3()
  if(tela==7)
  fase4()
  if(tela==8)
  fase5()
  if(tela==9)
  telafinal()
  if(tela==10)
  teladerrota()  
}
   

function telajogar(){
  background(tabeladecores);
  
  noFill()
  rect(1,1,32,32,50)
   if(mouseX > 1 && mouseX < 1+32 && mouseY > 1 && mouseY < 1+32){
   fill(135,206,250)
   if(mouseIsPressed){
      mouseIsPressed = false;
      tela=0;
     
    }
  }
  
  
   noFill()
 rect(586,1,32,32,50)
   if(mouseX > 586 && mouseX < 586+32 && mouseY > 1 && mouseY < 1+32){
   fill(135,206,250)
   if(mouseIsPressed){
      mouseIsPressed = false;
      tela=4;
  
  
   } 
  
   }  
}

function fase1(){
  background(nivel1);
  
 noFill()
  fill(112,128,144)
  rect(190,320,80,60,20)
  fill(1)
  text("Cinza",198 ,358 )
  
  //BOTAO CINZA
  if(mouseX > 190 && mouseX < 190+80 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
     mouseIsPressed = false;
      tela=5;
     status2 = false;
    }
  }
  
  noFill(0)
  fill(255,105,180)
  rect(330,320,80,60,20)
  fill(1)
  text("Rosa",338 ,358 )
  
  //BOTAO ROSA
  if(mouseX > 330 && mouseX < 410 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
     status3 = true;
    }
  }
  
  noFill(0)
  fill(50,205,50)
  rect(460,320,80,60,20)
  fill(1)
  text("Verde",468 ,358 )
  
  //BOTAO VERDE
  if(mouseX > 460 && mouseX < 540 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
     status3 = true;
    }
  }
  
   noFill(0)
  fill(30,144,255)
  rect(50,320,80,60,20)
  fill(1)
  text("Azul",60,358 )
  
  //BOTAO AZUL
  if(mouseX > 50 && mouseX < 130 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
     status3 = true;
    }
  }
  
  }

function fase2(){
  background(nivel2);
  
   noFill()
  fill(139,69,19)
  rect(166,320,120,60,20)
  fill(1)
  text("Marrom",177 ,358 )
  
  //BOTAO MARROM
  if(mouseX > 166 && mouseX < 166+120 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
     status2 = false;
    }
  }
  
  noFill(0)
  fill(148,0,211)
  rect(330,320,80,60,20)
  fill(1)
  text("Roxo",338 ,358 )
  
  //BOTAO ROXO
  if(mouseX > 330 && mouseX < 410 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
     status3 = true;
    }
  }
  
  noFill(0)
  fill(255,0,0)
  rect(460,320,120,60,20)
  fill(1)
  text("Vermelho",471,358 )
  
  //BOTAO VERMELHO
  if(mouseX > 460 && mouseX < 580 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
     mouseIsPressed = false;
      tela=6;
     status3 = true;
    }
  }
  
   noFill(0)
  fill(50,205,50)
  rect(50,320,80,60,20)
  fill(1)
  text("Verde",55,358 )
  
  //BOTAO VERDE
  if(mouseX > 50 && mouseX < 130 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
     status3 = true;
    }
  }
 
  
  }

function fase3(){
  background(nivel3);
  noFill()
  fill(255,0,0)
  rect(166,320,120,60,20)
  fill(1)
  text("Vermelho",177 ,358 )
  
  //BOTAO VERMELHO
  if(mouseX > 166 && mouseX < 166+120 && mouseY > 320 && mouseY < 320+60 && tela==6){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
     status2 = false;
    }
  }
  
  noFill(0)
  fill(30,144,255)
  rect(330,320,80,60,20)
  fill(1)
  text("Azul",342 ,358 )
  
  //BOTAO AZUL
  if(mouseX > 330 && mouseX < 410 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
     status3 = true;
   }
  }
  
  noFill(0)
  fill(255,105,180)
  rect(460,320,120,60,20)
  fill(1)
  text("Rosa",485 ,358 )
  
  //BOTAO ROSA
  if(mouseX > 460 && mouseX < 580 && mouseY > 320 && mouseY < 320+60 && tela==6){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
     status3 = true;
    }
  }
  
   noFill(0)
  fill(148,0,211)
  rect(50,320,80,60,20)
  fill(1)
  text("Roxo",57,358 )
  
  //BOTAO ROXO
  if(mouseX > 50 && mouseX < 130 && mouseY > 320 && mouseY < 320+60 && tela==6){
   fill(135,206,250)
   if(mouseIsPressed){
     mouseIsPressed = false;
      tela=7;
     status3 = true;
    }
  }
  
  }

function fase4(){
  background(nivel4);
  
   noFill()
  fill(148,0,211)
  rect(190,320,80,60,20)
  fill(1)
  text("Roxo",197 ,358 )
  
  //BOTAO ROXO
  if(mouseX > 190 && mouseX < 190+80 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
     status2 = false;
    }
  }
  
  noFill(0)
  fill(255,105,180)
  rect(330,320,80,60,20)
  fill(1)
  text("Rosa",338 ,358 )
  
  //BOTAO ROSA
  if(mouseX > 330 && mouseX < 410 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
     mouseIsPressed = false;
      tela=8;
     status3 = true;
    }
  }
  
  noFill(0)
  fill(30,144,255)
  rect(460,320,80,60,20)
  fill(1)
  text("Azul",470 ,358 )
  
  //BOTAO AZUL
  if(mouseX > 460 && mouseX < 540 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
     status3 = true;
    }
  }
  
   noFill(0)
  fill(50,205,50)
  rect(50,320,80,60,20)
  fill(1)
  text("Verde",57,358 )
  
  //BOTAO VERDE
  if(mouseX > 50 && mouseX < 130 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
     status3 = true;
    }
  }
  
  }

function fase5(){
  background(nivel5);
  
   noFill()
  fill(50,205,50)
  rect(190,320,80,60,20)
  fill(1)
  text("Verde",196 ,358 )
  
  //BOTAO VERDE
  if(mouseX > 190 && mouseX < 190+80 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
     mouseIsPressed = false;
      tela=9;
    }
  }
  
  noFill(0)
  fill(250)
  rect(330,320,92,60,20)
  fill(1)
  text("Branco",336 ,358 )
  
  //BOTAO BRANCO
  if(mouseX > 330 && mouseX < 422 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
    }
  }
  
  noFill(0)
  fill(30,144,255)
  rect(460,320,80,60,20)
  fill(1)
  text("Azul",471 ,358 )
  
  //BOTAO AZUL
  if(mouseX > 460 && mouseX < 540 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
    }
  }
  
   noFill(0)
  fill(255,140,0)
  rect(50,320,97,60,20)
  fill(1)
  text("Laranja",58,358 )
  
  //BOTAO LARANJA
  if(mouseX > 50 && mouseX < 147 && mouseY > 320 && mouseY < 320+60){
   fill(135,206,250)
   if(mouseIsPressed){
      tela=10;
    }
  }
  
  }

function telafinal(){
  background(final);
  noFill(0) 
  rect(291,144,38,31,50)
   if(mouseX >291 && mouseX < 291+38 && mouseY > 144 && mouseY < 144+31){
   fill(135,206,250)
   if(mouseIsPressed){
      mouseIsPressed = false;
      tela=0;
    }
  }
}

function teladerrota(){
  background(fimdejogo);
   noFill()
  rect(45,185,25,25,11)
   if(mouseX > 45 && mouseX < 45+25 && mouseY > 185 && mouseY < 185+25){
   fill(135,206,250)
   if(mouseIsPressed){
      mouseIsPressed = false;
      tela=0;
  }
 }    
}

function telaInstrucoes(){
  background(imageminstrucao);
 
  fill(10)
  fill(245,222,179)
  rect(58,110,480,250)
  textStyle(BOLD)
  textSize(40)
  textFont(fontGreatVibes)
  fill(1)
  text("Instruções", 200,100);
  textSize(18);
  text("° Primeira instrução:Use o mouse para selerionar as opções.", 70,140,460 );
  text("° Segunda instrução: Jogar, Instruções e Créditos.",70,190,460)
  text("° Terceira instrução: Ao clicar em Jogar, vai aparecer uma tabela de informações sobre diversas cores, logo em seguida use o mouse para prosseguir para as outras fases. Onde surgirão diversas cores, elas serão misturadas e você terá de ser capaz de identificar o nome de cada cor que foi misturada.",70,238,460)
  text("° Quarta instução: O jogo termina ao finalizar todos os desafios. ",70,340,460)
  
   noFill()
  rect(54,31,32,32,50)
   if(mouseX > 54 && mouseX < 54+32 && mouseY > 31 && mouseY < 31+32){
   fill(135,206,250)
   if(mouseIsPressed){
      mouseIsPressed = false;
      tela=0;
  }
 }    
}
function telaCreditos(){
  background(imagemCreditos);
  fill(10)
  fill(70,130,180)
  rect(200,110,340,300)
  textStyle(BOLD)
  textSize(50)
  textFont(fontCrimson_Pro)
  fill(0)
  text("Créditos", 220,100);
  textSize(20);
  text("Josef Pedro", 320,140);
  textSize(17);
  text("Função Educador",305, 165 );
  textSize(18);
  fill(250,250,250);
  text("Licenciando em física pela Universidade Federal do Rio Grande do Norte (UFRN)",220,185,300);
  textSize(17);
  fill(5)
  text("Enzo Bezerra", 330,280);
  textSize(17);
  text("Função Programador",305, 305 );
  textSize(18);
  fill(250,250,250);
  text("Estudante do curso de Ciências e Tecnologia, pela Universidade Federal do Rio Grande do Norte (UFRN)", 220,330,300);
image(imagemEducador,60,115)
image(imagemProgramador,60,280 )
  
    noFill()
  rect(1,60,45,45,50)
   if(mouseX > 1 && mouseX < 1+32 && mouseY > 60 && mouseY < 60+32){
   fill(135,206,250)
   if(mouseIsPressed){
      mouseIsPressed = false;
      tela=0;
  }
 }    
}

  function preload(){
  imagemEducador=loadImage("Foto_Educador (5).png");
  imagemProgramador=loadImage("Foto_Programador (1).png")
  fontAbel = loadFont("Abel-Regular.ttf")
  imagemCreditos = loadImage("créditos.1.jpg")
  imageminstrucao=loadImage("instrucao.1.jpg")
  imagemMenu= loadImage("menu.png")
  fontGreatVibes= loadFont("GreatVibes-Regular.ttf")
  fontYanoneKaffeesatz= loadFont("YanoneKaffeesatz-VariableFont_wght.ttf")
  fontCrimson_Pro= loadFont("CrimsonPro-Italic-VariableFont_wght.ttf")
  //imagemBeFunkycollage= loadFont("BeFunky-collage.png")  
  imagemJogar1=loadImage("Jogar1.png")
    nivel1=loadImage("nivel.1.png")
    nivel2=loadImage("nivel.2.png")
    nivel3=loadImage("nivel.3.png")
    nivel4=loadImage("nivel.4.png")
    nivel5=loadImage("nivel.5.png")
    final =loadImage("final.1.jpg")
    fimdejogo=loadImage("fim de jogo.3.jpg")
  tabeladecores=loadImage("Jogar1.1.jpg")
   
    
}
function keyPressed() {
   if(key=="Escape") {
       tela=0
 status1=true;
 status2=true;
 status3=false
     
  }
}
