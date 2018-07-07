<template>
  <div>
    <board-list movietype="in_theaters" />
    <board-list movietype="coming_soon" />
    <!-- <board-list movietype="new_movies" /> -->
    <board-list movietype="top250" />
  </div>
</template>
<script>
import BoardList from '../common/BoardList.vue'
export default {
  name: "list",
  components: {
    BoardList
  }
}
</script>
