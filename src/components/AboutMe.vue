<template>
  <div>
    <h1 class="emphasis">Qui suis-je ?</h1>
    <div id="aboutme" class="part">
      <div id="aboutme-box">
        <div class="type-me">
          <h2>points essentiels</h2>
          <ul>
            <li>Âge: 20 ans (et demi)</li>
            <li><strike>Café</strike>/ Thé.</li>
            <li>Pluriculturel: France / Pologne / Ukraine</li>
            <li>Plat préféré: Bortsch<b>*</b></li>
            <li>Club favori: FC Nantes</li>
            <li>Éclectique</li>
          </ul>
        </div>

        <div class="type-me">
          <h2>Hobbies</h2>
          <ul>
            <li>Football</li>
            <li>Automobile</li>
            <li>Graphisme et Design</li>
            <li>Voyages</li>
          </ul>
        </div>

        <div class="type-me">
          <h2>Langues parlées</h2>
          <ul>
            <li>
              <b>COURANT</b>
            </li>
            <li>Anglais</li>
            <li>Ukrainien</li>
            <br />
            <li>
              <b>INTERMÉDIAIRE</b>
            </li>
            <li>Russe</li>
            <li>Polonais</li>
            <li>Allemand</li>
          </ul>
        </div>
      </div>
      <p>
        <i>* petite précaution au cas où ma mère passerait par là...</i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
  return {
    message: 'Hello Twemoji ✨🍣😋🇺🇦'
    }
  }
};
</script>

<style lang="scss" scoped>
#aboutme {
  margin: 0 3rem;
  padding-top: 3rem;
  padding-bottom: 0.5rem;
  background-color: #222222;

  p {
    text-align: left;
    font-size: 12px;
  }

  &-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  li {
    list-style-type: none;
    text-align: left;
    margin: 5px 0;
  }
}
</style>
