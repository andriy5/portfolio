<template>
  <div>
    <h1>Mes Compétences</h1>
    <div>
      <div id="competence-box">
        <div id="competence-box-types">
          <div class="type">
            <h2>Front-End</h2>
            <ul>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>React.js ★</li>
              <li>jQuery</li>
              <li>Vue.js</li>
            </ul>
          </div>

          <div class="type">
            <h2>Back-End</h2>
            <ul>
              <li>Node.js ★</li>
              <li>Express</li>
              <li>Socket.io</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>Symfony</li>
            </ul>
          </div>

          <div class="type">
            <h2>Base de données</h2>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div class="type">
            <h2>Autres</h2>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>GitLab</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Méthode AGILE Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#competence-box {
  margin: 0 3rem;
  padding: 3rem;
  background-color: #222222;
}

#competence-box-types {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  li {
    list-style-type: none;
    text-align: left;
    margin: 5px 0;
  }
}
</style>