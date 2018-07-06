<template>
  <div>
    <movie-list movietype="in_theaters" />
    <movie-list movietype="coming_soon" />
    <!-- <movie-list movietype="new_movies" /> -->
    <movie-list movietype="top250" />
  </div>
</template>
<script>
import MovieList from '../common/MovieList.vue'
export default {
  name: "list",
  components: {
    MovieList
  }
}
</script>
