<template>
  <header id="main-header">
    <div class="frame">
      <div class="border">
        <h1 id="main-title">Veggie's Fest</h1>
        <p id="subtitle">A Mooc for Foodies</p>
      </div>
    </div>

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
  height: 75vh;
  background-image: url("https://www.doitinparis.com/files/2019/bars-restos-food/restos-branches/02/terra-restaurant/thumbs-1180x525/restaurant-terra-paris.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.frame {
  width: 50%;
  height: 50%;
  background: #D4AF37;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
  top: 10vh;
}

.border {
  width: 92%;
  height: 85%;
  border: solid white 2px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}


#main-title {
  color: var(--dark);
  font-size: 4vw;
  font-family: var(--title-font);
  margin: 0 0 20px;
}

#subtitle {
  color: var(--dark);
  font-size: 2vw;
}

</style>
