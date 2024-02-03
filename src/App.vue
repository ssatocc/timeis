<template>
  <div>
    <p>
      <small>HST / UTC-1000</small>
      <br>
      {{ hst }}
    </p>
    <p>
      <small>UTC / UTC+1000</small>
      <br>
      {{ utc }}
    </p>
    <p>
      <small>JST / UTC+0900</small>
      <br>
      {{ jst }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      hst: '',
      utc: '',
      jst: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
    }
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
