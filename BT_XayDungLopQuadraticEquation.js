class QuadraticEquation{
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getterA(){
        return this.a
    }
    getterB(){
        return this.b
    }
    getterC(){
        return this.c
    }
    getDiscriminant(){
        return this.b * this - 4 *this.c
    }
    getRoo1(){
        return "Nghiem thu nhat:" +(-this.b + Math.sqrt(this.getDiscriminant()))/2*this.a
    }
    getRoo2(){
        return "nghiem thu hai:" +(-this.b - Math.sqrt(this.getDiscriminant())) / 2 * this.a
    }
    calculating(a,b,c){
        if(this.getDiscriminant()>0){
            console.log(this.getRoo1());
            console.log(this.getRoo2());
        }
        else if(this.getDiscriminant()==0){
            console.log("phuong trinh co nghiem duy nhat:"+ -this.b/(this.a*2))
        }
        else{
            console.log("Phuong trinh vo nghiem")
        }
    }
}
let test = new QuadraticEquation(1,3,4)
test.calculating()