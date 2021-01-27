<template>
  <div class="hello">
    <div class="container-fluid">
      <div class="row  search col-md-9 mx-auto">
          <form class="form-inline" style="width:100%;">
            <div class="form-row" style="width:101%;">
            <div class="col-md-11">
              <label for="Search" class="sr-only">Search</label>
              <input type="text" style="min-width: 100%;" class="form-control" id="Search" placeholder="Search by Address...">
            </div>
            <div class="col-md-1">
              <button type="submit" class="btn btn-danger mb-2">Search</button>
            </div>
          </div>
        </form>
      </div>
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
 float:right;
}
</style>
