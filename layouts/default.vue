<template>
  <main>
    <top-nav />
    <nuxt />
  </main>
</template>

<script>

import TopNav from '@/components/TopNav'

export default {
  name: 'default',
  components: {
    TopNav
  }
}
</script>
