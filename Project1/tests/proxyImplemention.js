class Greeting {
   english(){
      return 'hello';
   }
}
class MoreGreeting {
   german(){
      return 'hallo';
   }
}

const greeting = new Greeting()
const moreGreeting = new MoreGreeting();

const allGreeting = new Proxy(moreGreeting,{
   get:function(target,property){
      return target[property] || greeting[property];
   }
})
console.log(allGreeting.english())
