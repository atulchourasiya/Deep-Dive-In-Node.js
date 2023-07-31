class Page {
   goto(){ console.log('goto')}
   setCookie(){ console.log('setCookie')}
}
// class customPage extends page{
//    login(){}
// }
//This approch is  good but there is a little drawback here we can't tell puppeteer to use customPage class instead of page Class when launching new puppeteer page instance

//We can use constructure and use page instance inside it

// class CustomPage {
//    constructor(page)
//    {
//       this.page  = page
//    }
//    login(){

//    }
// }

class CustomPage {
   constructor(page)
   {
      this.page  = page
   }
   static build(){
      const page = new Page()
      const customPage = new CustomPage(page)
      // This way still has one issue now the issue here is if we have call page class method we always need to do like so
      // customPage.page.setCookie()
      // customPage.page.goto();
      // customPage.login();


      //*****Proxy*******/

      const superPage = new Proxy(customPage, {
         get: function (target, property) {
            return target[property] || page[property]
         }
      })
      return superPage
   }
   login (){ console.log('login') }
}

const superPage = CustomPage.build()
console.log(superPage)
// We can wrap this code in function like so 
// const buildPage = ()=>{
//    const page = new Page()
//    const customPage = new CustomPage()
//    // This way still has one issue now the issue here is if we have call page class method we always need to do like so
//    // customPage.page.setCookie()
//    // customPage.page.goto();
//    // customPage.login();


//    //*****Proxy*******/

//    const superPage = new Proxy(customPage, {
//       get: function (target, property) {
//          return target[property] || page[property]
//       }
//    })

// }








// const page = new Page()
// const customPage = new CustomPage()
// // This way still has one issue now the issue here is if we have call page class method we always need to do like so
// // customPage.page.setCookie()
// // customPage.page.goto();
// // customPage.login();


// //*****Proxy*******/

// const  superPage = new Proxy(customPage,{
//    get :function(target,property){
//       return target[property]|| page[property]
//    }
// })

// console.log(superPage.login)