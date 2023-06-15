class Caminante2{

    constructor(){
        
        this.saltar();
        this.diam = random(5, 40);

        this.vel = 5;
        this.dir = radians(random(10));

        this.elColor = color(random(255));

    }

    //-----------------------------------------------

    actualizar(amplitud){

        this.diam = map(amplitud, AMP_MIN, AMP_MAX, 20, 23 ); // mapeamos el valor de amp de entrada al diámetro del caminante
    }
    //-----------------------------------------------
    saltar(){
        this.x = random(windowWidth);
        this.y = random(windowHeight);
    }
    

    //-----------------------------------------------
    cambiarColor(){
        this.elColor = color(random(255));
    }
    
    //-----------------------------------------------
    mover(){

        this.dir += radians(random(-20, 20));
 
         this.x = this.x + this.vel * cos(this.dir);
         this.y = this.y + this.vel * sin(this.dir);
 
         //--------Espacio toroidal---
         if (this.x >= 1000){
             this.dir = radians(random(-10));
         }
         if (this.x <= 0){
             this.dir = radians(random(10));
         }
 
         if (this.y >= 800){
             this.dir = radians(random(-10));
         }
         if (this.y <= -800){
             this.dir = radians(random(10));
         }
    }
    //-----------------------------------------------
    dibujar(){
  
        push();
        noStroke();
        fill(this.elColor)
        rect(this.x, this.y, this.diam, this.diam);
        pop();
    }
}