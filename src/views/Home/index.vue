<template>
  <div class="home">
    <Hero />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/views/Home/components/Hero'

export default {
  name: 'home',
  components: {
    Hero,
  },
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
