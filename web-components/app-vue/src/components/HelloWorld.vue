<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h2>Vue Works</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style>
.hello {
  color: #41b883;
}
h2{
  margin: 0.3rem;
}
</style>
