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
      hst: 'loading...',
      utc: 'loading...',
      jst: 'loading...'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      setInterval(() => {
        this.hst = new Date().toLocaleString('ja-JP', { timeZone: 'Pacific/Honolulu', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
        this.utc = new Date().toLocaleString('ja-JP', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
        this.jst = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
      }, 1000)
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
