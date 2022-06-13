import Vue from 'vue'
import App from './App.vue' // 1. 컴포넌트의 내용을 다른 파일에서 갸져온다. App.vue의 내용을 들고와서 App 변수에 저장

Vue.config.productionTip = false

// var App = { // 컴포넌트 내용 정의
//   template: '<div>app</div>'
// }

new Vue({
  render: h => h(App), // 여기서 render() 한다.
  // 위 코드(render)와 아래 코드(컴포넌트 매핑)의 역할은 동일하다

  // components: {
  //   'app': App
  // }

}).$mount('#app')

// .$mount('#app') 대신 아래와 같이 el 로 정의하면 같은 동작을 한다.
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })