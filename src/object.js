let qqq = "qqq",
  www = "www",
  eee = "eee";

let rrr = {
  qqq,
  www,
  eee,
  rrr() {
    console.log(`${qqq}   ${www}   ${eee}`);
  }
};
Object.defineProperty(rrr, "fff", {
  //суперсвойства(как методы внутри, но как свойства вне функции)
  get: function() {
    return this.www + " " + this.eee;
  },
  set: function(valu) {
    this.www = valu;
  }
});
console.log(rrr);
/*
rrr.rrr();
function ppp(prop, val) {
  return {
    //это возвращается обьект, как буд-то написали let kk ={}

    [prop]: val,
    ["-" + prop]: val,
    [prop.toUpperCase()]: val,
    ["get" + prop]() {
      return this[prop];
    }
  };
}
console.log(ppp("prope", "val"));
*/
