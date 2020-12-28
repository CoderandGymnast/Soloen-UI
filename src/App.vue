<template>
  <div id="app">
    <Header/>
    <div class="container-fluid">
      <div class="col-md-9 mx-auto" style="min-height:862px;">
       <router-view class="View"></router-view>
      </div>
    </div>
    <div class="footer"> 
    <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,Footer 
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.View {
  margin-top:40px;
  min-height:900px;
  background-color:#FAFAFA;
}
</style>
