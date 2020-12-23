<template>
 <div class="row">
          <div class="col-md-6 block">
            <ul class="list-group">
              <li class="list-group-item list-group-item-danger">Blocks</li>
              <li class="list-group-item">A simple primary list group item</li>
              <li class="list-group-item">A simple secondary list group item</li>
              <li class="list-group-item">A simple success list group item</li>
              <li class="list-group-item">A simple danger list group item</li>
              <li class="list-group-item">A simple warning list group item</li>
              <li class="list-group-item">A simple info list group item</li>
              <li class="list-group-item">A simple light list group item</li>
              <li class="list-group-item">A simple dark list group item</li>
            </ul>
          </div>
        <div class="col-md-6">
         <div class="row">
            <LineChart class="LineChart"></LineChart>
          </div>
          <div class="row transaction" >
          <ul class="list-group">
            <li class="list-group-item ">Transactions</li>
            <li class="list-group-item">A simple primary list group item</li>
            <li class="list-group-item">A simple secondary list group item</li>
            <li class="list-group-item">A simple success list group item</li>
            <li class="list-group-item">A simple danger list group item</li>
          </ul>
        </div>
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
  width: 700px;
  height:205px !important;
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
 width: 652px;
}
a {
  color: #42b983;
}
</style>
