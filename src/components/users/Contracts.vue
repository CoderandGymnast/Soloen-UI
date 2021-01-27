<template>
  <div class="Contract">
    <div v-if="this.$route.query.ownerAddress && this.$route.query.ownerAddress == address" class="Make-contract">
      <div class="row card-header">
      <span style ="text-align:center;color:#FFF;margin: 0 auto;font-size: 36px;">SOLOEN CONTRACT</span>
      </div> 
       <div class=" contract-box mx-auto">
      <form @submit.prevent='handleTransaction'> 
            <div class="form-group">
              <span for="Address">Receiver Address</span>
              <input type="text" class="form-control" id="address" v-model="Receiver"  placeholder="Address">
            </div>
            <div class="form-group">
              <span for="Email">Send Amount</span>
              <input type="number" min="0" pattern="^[0-9]\d*$" oninput="if(this.value<0){this.value= this.value * -1}" class="form-control" id="amount"  v-model="amount" placeholder="Amount">
            </div>
            <div class="form-group">
               <label for="transaction_type">Transaction Type</label>
                <select id="transaction_type" class="form-control">
                  <option selected>Choose type</option>
                  <option value="immediate">Immediate</option>
                  <option value="smart_contract">Smart Contract</option>
                </select>
            </div> 
            <div class="form-group">
              <button type="submit" class="btn btn-danger">Continue Transaction</button>
              <button type="button" @click="test" class="btn btn-info">test</button> 
            </div>            
      </form>
    </div>
    </div>
    <div v-else class="Error">
    <p style="text-align:center">Something went wrong !!!</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  methods:{
    test(){
      console.log(this.$route.query.ownerAddress)
      console.log(localStorage.getItem('user'))
      console.log(this.Receiver)
      console.log(localStorage.getItem('token'))
      //console.log(this.Sender)
    },
  async  handleTransaction () {
    console.log(localStorage.getItem('token'))
    // const result = await axios.get('http://localhost:3000/user/address',{
    //   headers: {
    //       Authorization: 'Bearer ' + localStorage.getItem('token')
    //     }
    // })
    //  console.log(result.data)
      // const result = await axios.post('http://localhost:3000/contract/create',{
      //   headers: {
      //     Authorization: 'Bearer ' + localStorage.getItem('token')
      //   },
      //   data:{
      //   ownerAddress:this.address,
      //   toAddress:this.Receiver,
      //   amount:this.amount
      //   }
      // })
      const result = await axios({
        method: 'post',
        url: 'http://localhost:3000/contract/create',
        headers: {Authorization: 'Bearer ' + localStorage.getItem('token')},
        data: {
          ownerAddress:this.address,
          toAddress:this.Receiver,
          amount:this.amount
        }
      })
      this.$router.push('/myaccount/wallet/')
    }
  }
   ,
  data () {
      return {
        Receiver:'',
        amount:'',
        address:localStorage.getItem('address')
      }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 100%;
  height: 4.375rem;
  margin-left: 0px; 
}
.card-header {
  min-height:100px; 
  background-color:#474747;
  width:100%;
  margin-left:0px;
}
input {
 height: 3.375rem
}
.contract-box{
  padding-top:2.5rem;
  width:85%;
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
