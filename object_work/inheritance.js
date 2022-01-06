class Parent {
    bike() {
        console.log("passion pro");
    }
}

class child extends Parent {
    bike() {
        super.bike()
        console.log("fz");

    }
    
}
var ch = new child()
ch.bike()