let user = {
    name : "John",
    hi() {console.log(this)},
}

let hi = user.hi;       //here hi extracts only the funtion and not this keyword reference;s
console.log(typeof(hi));
hi();                   //here hi() is totally independent and has lost all previos reference to the this and is pointing to the global object;
console.log(typeof user.hi)    //it shows its a function but internally . dot operator returns reference type which has three types viz. (base, name, strict), where
//base====object,        name====property name        strict=====true if using strict mode;
//why is this done ?? because by doing so the this reference is not lost and can be forwarded when the function is called;