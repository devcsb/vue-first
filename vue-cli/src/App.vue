<template>
  <div><!-- template root는 무조건 하나의 element만 있어야 한다.-->
    <!--    <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header>-->
    <app-header v-bind:propsdata="str"
                v-on:renew="renewStr" v-on:pass-alert="popAlert(str)"></app-header>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader"; // 하위 컴포넌트를 파일로 가져와서 APpHeader Component 정의
// 아래와 같이 직접 AppHeader를 생성하는 것이 아니라, import로 가져온다.

// var AppHeader = {
//   template: '<header><h1>Header</h1></header>'
// }


// new Vue({
//   data: {
//     str: 'hi'
//   }
// })
// 위 코드를 spa 방식에서 아래 export default라고 생각할 수 있다.

export default {
  data: function () { // spa방식에서 data는 익명함수에 return으로 새 객체를 반환하는 방식으로 컴포넌트 속성 정의한다
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function () {
      this.str = 'hi';
    },
    popAlert: function (msg) {
      alert(msg)
    }
  }
}
</script>

<style scoped>

</style>