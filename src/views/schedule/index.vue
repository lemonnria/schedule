<template>
  <div>
    <classinfo></classinfo>

    <router-view />
  </div>
</template>
<script>
import classinfo from './classInfo'
export default {
  components: {
    classinfo
  }
}
</script>
<style scoped>
</style>
