<template>
  <div>
    <nav>
      <button @click="$router.push('/')">Home</button>
      <button @click="$router.push('/hello-world')">Chat</button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
