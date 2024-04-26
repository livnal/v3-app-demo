/*
 * @Descripttion:
 * @version:
 * @FilePath: /v3-app-demo/src/plugins/index.js
 */
// import vantCons from './vant'

const registerList = [
  // ...vantCons
]

export default function pluginsRegister(app) {
  registerList.forEach(plugin => {
    app.use(plugin)
  }
  )
}
