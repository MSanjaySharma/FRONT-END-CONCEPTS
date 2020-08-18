"using strict";
function test1() {
  console.log(this);
}

const obj = {
  test1copy: test1,
  internalCall() {
    console.log(this); //here this===local object
    this.test1copy(); //here this===local object
    test1(); //this is called from global prespective so this === global object
  },
};

obj.internalCall();
