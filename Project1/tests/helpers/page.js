const puppeteer = require('puppeteer');
const sessionFactory = require('../factory/sessionFactory')
const userFactory = require('../factory/userFactory')

class CustomPage{
   static async build(){
      const browser = await puppeteer.launch({
         headless:false
      });
      const page = await browser.newPage();
      const customPage = new CustomPage(page/*,browser*/);

      return new Proxy (customPage , {
         get : function(target , property){
            return customPage[property] || browser[property] || page[property];
         }
      })
   }
   constructor(page /*,browser*/){
      this.page = page
      // this.browser = browser
   }
   // close (){
   //    this.browser.close();
   // }
   async login(){
      const user = await userFactory();
      const { session, sig } = sessionFactory(user);

      await this.page.setCookie({
         name: 'session',
         value: session
      })
      await this.page.setCookie({
         name: 'session.sig',
         value: sig
      })
      await this.page.goto('localhost:3000/blogs')
      await this.page.waitFor('.right a[href="/auth/logout"]')
   }
   async getContentOf(text){
      await this.page.waitFor(text)
      return this.page.$eval(text, el => el.innerHTML)
   }
}

module.exports = CustomPage