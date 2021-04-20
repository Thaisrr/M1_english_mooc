<template>

  <footer>
    <div class="flex-container">
      <section>
        <h4>Nous suivre</h4>
        <ul>
          <li>
            <a target="_blank" href="https://www.facebook.com/DawanFrance/">Facebook</a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/company/dawan/?originalSubdomain=fr">Linkedin</a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/dawanfrance?lang=fr">Twitter</a>
          </li>
          <li>
            <a target="_blank" href="https://www.dawan.fr">Dawan.fr</a>
          </li>
        </ul>
      </section>
      <section>
        <h4>Nous connaître</h4>
        <ul>
          <li>
            <a href="mailto:contact@dawan.fr">contact@dawan.fr</a>
          </li>
          <li>
            <a href="tel:+33972377373">+33 (0)9 72 73 37 37</a>
          </li>
          <li>
            <a target="_blank" href="https://g.page/Dawan-nantes?share">33 Boulevard Vincent Gâche, 44200 Nantes</a>
          </li>
        </ul>
      </section>
      <section>
        <h4>Nos Engagements</h4>
        <ul>
          <li>
            <a href="#">Mentions Légales</a>
          </li>
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </section>
    </div>
    <p><i>Copyright - 2020</i> | <i>Réalisation Dawan</i></p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  width: 100%;
  padding: 30px;
  background-color: var(--dark);
  color: var(--light);
}

footer .flex-container {
  width: 70%;
  align-items: flex-start;
}

footer h4 {
  color: var(--light);
  border-bottom: thin solid var(--light);
}

footer ul {
  padding: 0;
  margin: 0;
  padding-inline-start: 0;
}

footer li {
  list-style: none;
}

footer p {
  width: 100%;
  text-align: center;
  margin-bottom: 0;
}

footer section {
  width: 25%;
}
</style>
