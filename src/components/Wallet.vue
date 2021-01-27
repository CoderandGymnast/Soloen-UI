<template>
  <div class="wallet">
  <div v-if ="user" class="hello">    
    <div class="row address">
    <hr>
    <span id="address" style="padding-left:12px;">{{user.base58 }}</span>
    </div>
    <div class="row accountInfo">
      <div class="col-md-12 totalBalance">
        <div class="card-body">
          <p class="tittle">
          <span>Total Balance </span>
          </p>
          <p class="total-trx">
          <span>{{user.balance}} SUNs</span>
          </p>
          <p class="currency">
          <span> ≈ {{user.balance*0.03/1000000}} USD</span>
          </p>
          <p class="operate">
            <span class="btn text-capitalize" style="font-size:23px">
              <span ><a href="javascript:void(0)" @click="makeContract">Make Contract</a><router-link to="/myaccount/make-contract">Make Contract</router-link></span>
            </span>
            <span class="btn text-capitalize" style="font-size:23px">
              <span ><a href="https://www.trongrid.io/shasta">Receive</a></span>
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
  <div v-if="!user" class="Error">
  <p style="text-align:center">Something went wrong please try again!!!</p>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'wallet',
  async mounted(){
    const result = await axios.get('http://localhost:3000/user',{
      headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    this.user = result.data
    localStorage.setItem('user',this.user.username)
    localStorage.setItem('address',this.user.base58)
  },
  methods: {
    makeContract(){
      this.$router.push({ path: '/myaccount/make-contract', query: { ownerAddress: `${this.user.base58}` } })
    }
  }
  ,
  data () {
    return {
      user:null,
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
  color: #FF3547;
}
</style>
