class Fruit {
    constructor(){
        this.fruit = createSprite(random(100,900), 0, 100, 100);
        if (frameCount % 20 === 0) {
            fruits.add(this.fruit);
            fruits.velocityY = 6;
            var rand = Math.round(random(1,5));
            switch(rand){
                case 1: fruits.addImage("fruit1",fruit1_img);
                break;
                case 2: fruits.addImage("fruit1", fruit2_img);
                break;
                case 3: fruits.addImage("fruit1", fruit3_img);
                break;
                case 4: fruits.addImage("fruit1", fruit4_img);
                break;
                case 5: fruits.addImage("fruit1", fruit5_img);
                break;
            }
        }
    }
    collect(){
        if(fruits.isTouching(player.index)){
            this.fruit.delete();
            score += 10;
        }
    }
}