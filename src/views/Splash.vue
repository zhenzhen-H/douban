<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  export default {
    methods: {
      handleClick() {
        this.$router.replace({
          name: 'index'
        })
      }
    },
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
    }
  }
</script>
