export default ({ app }) => {
  // 路由进入前
  app.router.beforeEach((to, from, next) => { 
    console.log(to)
    next()
  })
  //路由进入后
  app.router.afterEach((to, from) => { 
  }) 
}
