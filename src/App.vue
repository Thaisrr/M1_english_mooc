<template>
  <div id="app">
    <Nav/>
    <RouterView class="router"/>
    <Footer/>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oxygen&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Cabin+Sketch|Fredericka+the+Great|Orbitron|Press+Start+2P|VT323&display=swap');


* {
  --main: #75B9BE;
  --dark: #28536B;
  --secondary: #7A8B99;
  --light: #A9DDD6;
  --mainSecondary: #75ABBC;
  --highligth: #D4AF37;
  --main-font: 'Open Sans', sans-serif;
  --secondary-font: 'Oxygen', sans serif;
  --title-font: 'Fredericka the Great', sans serif;
}

body {
  font-family: var(--main-font);
  color: var(--secondary);
  margin: 0;
  padding: 0;
}

h2, h3, h4 {
  font-family: var(--secondary-font);
}

h2 {
  color: var(--dark);
}

h3 {
  color: var(--main);
}

h4 {
  color: var(--dark);
}

.a:link, footer a:link, .a:visited, footer a:visited {
  color: var(--highligth);
  text-decoration: none;
  line-height: 2rem;
}


.a:hover, footer a:hover {
  border-bottom: solid thin var(--highligth);
}

*:focus {
  border: none;
  border-bottom: var(--dark) solid 3px;
  outline: none;
}

main {
  width: 70%;
  margin: 50px auto;
  max-width: 1500px;
}

.router {
  min-width: 85vh;
}

.header-img {
  display: none;
}

.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
}


.section-title {
  padding-bottom: 25px;
  border-bottom: solid thin var(--dark);
  width: content-box;
}

.small-img {
  width: 250px;
}

.float-r {
  float: right;
  margin-left: 15px;
}

.float-l {
  float: left;
  margin-right: 15px;
}


.article-container {
  width: 100%;
  margin: auto;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 6px 0px var(--dark);
  -moz-box-shadow: 0px 0px 6px 0px var(--dark);
  box-shadow: 0px 0px 6px 0px var(--dark);
  padding: 15px;
}

.button:link, .button, .button:visited {
  width: 100%;
  display: inline-block;
  padding: 7px;
  background-color: var(--main);
  color: var(--dark);
  border: white solid medium;
  text-align: center;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-sizing: border-box;
  text-decoration: none;
}

.button:hover {
  border-color: var(--main);
  font-weight: bolder;
}

* {
  box-sizing: border-box;
}


</style>
