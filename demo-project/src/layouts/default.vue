<template>
  <div>
    <HeaderComponent />
    <router-view/>
    <p>This is a default layout</p>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header.vue'

export default {
  components: {
    HeaderComponent
  }
}
</script>
