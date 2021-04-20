<template>
  <header id="main-header">
    <h1 id="main-title">Veggie's fest</h1>
    <p id="subtitle">A Mooc for Foodies</p>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
#main-header {
  width: 100%;
  height: 80vh;
  background-image: url("../assets/images/dips.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

#main-title {
  color: var(--dark);
  font-size: 4vw;
  font-family: var(--title-font);
  margin: 0;
  position: absolute;
  top: 200px;
  right: 30vw;
}

#subtitle {
  color: var(--light);
  font-size: 2vw;
  position: absolute;
  top: 300px;
  right: 15vw ;
}


.small-header {
  width: 100%;
  height: 40vh;
  background-image: url("https://webunwto.s3.eu-west-1.amazonaws.com/styles/article_main_image/s3/2020-05/gastronomy_0.jpg?itok=zOigBNjV");
  background-repeat: no-repeat;
  background-size: cover;
}

.small-main-title {
  width: 100%;
  text-align: center;
  font-size: 35px;
  position: absolute;
  top: 12vh;
  color: var(--highligth);
  font-family: var(--title-font);
}
</style>
