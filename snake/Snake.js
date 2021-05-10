function Snake() {  //constructor function
    this.x = 0;  //Let's make an object that has x and y coordinates
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.total = 0; //length, how many pieces of biscuits it has eaten
    this.tail = [];

    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function (pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.death = function(){
        for (var i = 0; i < this.tail.length; i ++){ //loop through every spot in the tail
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1){    //if distance beetween last position and current position touched is less than one then snake dies. Tail returns empty and total returns to initial value 0
                alert('Want to start again?');   
                this.total = 0; 
                this.tail = [];
            }
        }
    }


    this.update = function () { //update function "updates" the Snake object -> position changes with speed.
        //if the snake has eaten a piece of food it gets bigger
        if (this.total === this.tail.length) { //no food has been eaten
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];  //spots are shifted down after it has eaten a single biscuit.
            } //we've got an array that continuously shifts down
        }
        this.tail[this.total - 1] = createVector(this.x, this.y); //the new spot goes in the end, into the last piece and all the oldest sposts will shift down, all the oldest locations will be deleated. 

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = constrain(this.x, 0, width - scl); //Constrains a value between a minimum and maximum value.
        this.y = constrain(this.y, 0, height - scl)  // -scl because we do not want the snake to go out of the canvas



    }

    this.show = function () {
        //another funciton to draw something
        fill(255); // fill() -> Sets the color used to fill shapes. 
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }

        //draw the tail of snake
        for (var i = 0; i < this.total; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }


        rect(this.x, this.y, scl, scl);
    }
}