<template>
  <div class="hello">
    
    <div class="row address">
    <hr>
    <span id="address" style="padding-left:12px;">TGs6rEJzwwhe3wa1SxszCPjk7c4WTPXQYR</span>
    </div>
    <div class="row accountInfo">
      <div class="col-md-12 totalBalance">
        <div class="card-body">
          <p class="tittle">
          <span>Total assets</span>
          </p>
          <p class="total-trx">
          <span>0 TRXs</span>
          </p>
          <p class="currency">
          <span> ≈ 0 USD</span>
          </p>
          <p class="operate">
          <span class="btn btn-sm text-capitalize">
            <span>Send</span>
          </span>
          <span class="btn btn-sm text-capitalize">
            <span>Receive</span>
          </span>
          <span class="btn btn-sm text-capitalize">
            <span>Contract</span>
          </span>
          </p>
        </div>
      </div>
    </div>
    <div class="row transactionList">
    <div class="table-body col-md-12 table-responsive-sm">
      <table class="table border">
        <thead>
          <tr>
            <th scope="col">Hash</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Date</th>
            <th scope="col">Result</th>
            <th scope="col">Amount</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Sucess</td>
            <td>5 TRXs</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Sucess</td>
            <td>5 TRXs</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Sucess</td>
            <td>5 TRXs</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body {
  padding:10px;
}
.table-body {
  padding:1px;
}
.totalBalance {
  margin-top: 17px;
  background-color:#FFFFFF;
  min-height: 13rem;
}
.transactionList {
  margin-top: 17px;
  background-color:#FFFFFF;
  min-height: 30.5rem;
}
hr{
  border: 3px solid;
  color: #ea0707;
  width: 100%;
}
.row {
  width: 100%;
  margin-left: 0px;
}
.address{
  color: #ea0707;
  background-color:#FFFFFF;
  min-height:4.5rem;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
