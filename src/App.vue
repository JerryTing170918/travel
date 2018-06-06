<template>
  <div id="app">
    <!-- keepalive可以保证不重复发送ajax请求 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
