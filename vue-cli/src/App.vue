<template>
  <div><!-- template root는 무조건 하나의 element만 있어야 한다.-->
<!--    <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header>-->
    <app-header v-bind:propsdata="str"
                v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader"; // 하위 컴포넌트를 파일로 가져와서 APpHeader Component 정의

// new Vue({
//   data: {
//     str: 'hi'
//   }
// })

export default {
  data: function () { // data는 익명함수에 return으로 새 객체를 반환하는 방식으로 컴포넌트 속성 정의한다
    return {
      str: 'Header'
    }
  },
  components:{
    'app-header': AppHeader
  },
  methods: {
    renewStr: function (){
      this.str = 'hi';
    }
  }
}
</script>

<style scoped>

</style>