<template>
  <div>
    <p>
      <small>HST / UTC-1000</small>
      <br>
      00:00:00
    </p>
    <p>
      <small>UTC / UTC+1000</small>
      <br>
      00:00:00
    </p>
    <p>
      <small>JST / UTC+0900</small>
      <br>
      00:00:00
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  color: #34495e;
}

div {
  padding: 2px;
}

p {
  margin-top: 0px;
}
</style>
