<template>
  <div class="container-fluid">
    <div  class="row">
        <form class="form-inline" style="margin:0px 238px;">
        <div class="form-group mx-sm-3 mb-2" style="padding-right:15px;">
          <label for="Search" class="sr-only">Search</label>
          <input type="text" size="132px" class="form-control" id="Search" placeholder="Search by Address/TXn Hash/Token/Block">
        </div>
        <button type="submit" class="btn btn-danger mb-2">Search</button>
      </form>
    </div>
      <div class="col-md-9 mx-auto" style="min-height:862px;">
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
  width: 620px;
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
 width: 600px;
}
a {
  color: #42b983;
}
</style>
