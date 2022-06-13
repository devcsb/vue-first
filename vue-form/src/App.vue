<template>
  <form v-on:submit.prevent="submitForm"><!-- 기존 동작을 막는 .prevent event modifier-->
    <div>
      <label for="username">id: </label> <!--아래 input을 바라본게끔 설정. 레이블 클릭시 자동으로 input에 커서 깜빡임-->
      <input id="username" type="text" v-model="username"><!-- v-model로 양방향 데이터 바인딩-->
    </div>
    <div>
      <label for="password">pw:</label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button> <!-- 이벤트가 버블링되어 form으로 올라가므로, form태그에서 v-on:submit="이벤트명" 식으로 정의한다.-->
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function () { // 컴포넌트 간에 데이터가 공유되지 않도록, 새 객체를 반환하는 식으로 정의
    return {
      username: '', // 기본 타입이 문자열임을 알려주기 위해 '' 사용
      password: '',
    }
  },
  methods: {
    submitForm: function () {
      // event.preventDefault(); // 바닐라JS의 방식. vue에서는 디렉티브에 .prevent라는 event modifier로 동일 기능 수행
      console.log(this.username, this.password);
      let url = 'https://jsonplaceholder.typicode.com/users';
      let data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
  }

}
</script>

<style scoped>

</style>