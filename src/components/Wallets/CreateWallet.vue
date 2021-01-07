<script
  src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
  integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
  crossorigin="anonymous"
></script>
<template>
  <div class="CreateWallet">
    <span>Create a new wallet</span>
    <input
      type="text"
      class="form-control"
      placeholder="Generator"
      id="xiaolin"
    />
    <button @click="CreateWallet" class="btn btn-danger">Generate </button>
  </div>
</template>

<script>
var test = 0
export default {
    data() {
        return {
            message: 'This is my first component using binding data'
        }
    },
    methods: {
        CreateWallet() {
            const fetch = require('node-fetch');
            const body = {
                "label": document.getElementById("xiaolin").value
            }
            fetch('http://localhost:3001/wallet/create', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
            }).then(res => res.text())
                .then(x => {
                    console.log("......")
                    test =  JSON.parse(x)
                    console.log(test.id)
                    const params = {
                        "walletID": JSON.parse(x).id
                    }
                    fetch('http://localhost:3001/address/create', {
                        method: 'POST',
                        body: JSON.stringify(params),
                        headers: { "Content-Type": "application/json" },
                    }).then(res => res.text())
                        .then(params => console.log(params))
                })
            }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-header {
  min-height: 100px;
  background-color: #474747;
  width: 100%;
  margin-left: 0px;
}
.register-email-box {
  padding-top: 2.5rem;
  width: 50%;
}
input {
  height: 4.375rem;
}
button {
  width: 100%;
  height: 4.375rem;
  margin-left: 0px;
}
h1,
h2 {
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
  color: #c12e3a;
}
</style>
