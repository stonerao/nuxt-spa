<template>
  <section>
    <vue-progress-bar></vue-progress-bar>
    <div>
      {{title}}
    </div>
  </section>
</template>

<script>
export default {
  asyncData(params) { 
    return params.$axios.get('/api/admin/contact').then(res => { 
      return { title: res.data.code }
    })
  },
  mounted() {
   
  }
}
</script>

<style>
</style>
