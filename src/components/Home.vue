<template>
  <div class="hello">
   <p>Home</p>
   <div class="col-md-7 LineChart">
    <LineChart/>
   </div>
  </div>
</template>

<script>
import LineChart from './Charts/LineChart'
export default {
  name: 'Home',
  components: {
    LineChart
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.LineChart{
  display: block;
  float: right;
 
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.block{
  margin-top: 24px;
}
.transaction {
 margin-top: 15px;
}
.transaction ul>li {
  display: inline-block;
  margin: 0 10px;
 width: 600px;
}
a {
  color: #42b983;
}
</style>
