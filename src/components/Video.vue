<template>
  <iframe :src="video_link" :title="title"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
export default {
  name: "Video",
  props: {
    video_link: String,
    title: String
  }
}
</script>

<style scoped>

</style>
