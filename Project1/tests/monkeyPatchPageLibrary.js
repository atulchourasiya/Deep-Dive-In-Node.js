const Page = require('puppeteer/lib/Page')

Page.prototype.login = function (){
   const user = await userFactory();
   const { session, sig } = sessionFactory(user);

   await page.setCookie({
      name: 'session',
      value: session
   })
   await page.setCookie({
      name: 'session.sig',
      value: sig
   })
   await this.goto('localhost:3000')
   await this.waitFor('.right a[href="/auth/logout"]')
}

// We are not taking this approch because we are already take that approch before

