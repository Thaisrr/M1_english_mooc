<template>
  <div class="card">
    <div class="card-body">
      <h4>{{ week.name }}</h4>
      <p>{{week.description}}</p>
    </div>
    <div class="card-footer">
      <router-link class="link" :to="{name: 'week', params: {id: week.number}}"  type="button">
        Start the Course
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "Card",
  props: {
    week: Object
  },
  computed: {
  }
}
</script>

<style scoped>
.card {
  background: var(--dark);
  width: 22%;
  border-radius: 5px;
  min-height: 250px;
}


.card * {
  box-sizing: border-box;
}

.card-body {
  width: 85%;
  margin: 20px auto;
  height: 50%;
  padding-top: 10px;
  color: white;
  text-align: center;
}

h4 {
  color: white;
  margin-bottom: 20px;
  font-size: 1.2em;
  letter-spacing: 2px;
}

.card-footer {
  height: 13%;
  width: 85%;
  margin: auto;
  text-align: center;
}

.link:link{
  color: #D4AF37;
  text-decoration: none;
  font-size: 1.1em;
}

.link:hover {
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
}

</style>
