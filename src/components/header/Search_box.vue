<template>
  <div class="hello">
  <div class="row  search col-md-9 mx-auto">
        <form class="form-inline mx-auto">
        <div class="form-group  mb-2">
          <label for="Search" class="sr-only">Search</label>
          <input type="text" size="141px" class="form-control" id="Search" placeholder="Search by Address/TXn Hash/Token/Block">
        </div>
        <button type="submit" class="btn btn-danger mb-2">Search</button>
      </form>
    </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-color {
  color: #fff;
  background-color: #ed3443!important;
}
.search{
  margin-top:30px
}
 input {
 height:4.375rem;
 float:left;
}
button {
 padding: 26px 42px;
 margin:0px 0px 15px 1px;
 float:left;
}
</style>
