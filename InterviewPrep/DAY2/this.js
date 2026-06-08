const obj = {
  name: "Alice",
  greet: function() { console.log(this.name) },
  greetArrow: () => { console.log(this.name) }
};

obj.greet();
obj.greetArrow();

const fn = obj.greet;
fn();

const fn1 = obj.greetArrow;
fn1();