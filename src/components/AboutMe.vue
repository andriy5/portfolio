<template>
  <div>
    <h1>Qui suis-je ?</h1>
    <div id="aboutme">
      <div id="aboutme-box">
        <div>
          <h2>points essentiels</h2>
          <ul>
            <li>Nom: Andriy Shakh</li>
            <li>Âge: 20 ans (et demi)</li>
            <li>Nationalité: 🇵🇱 / 🇺🇦</li>
            <li>Club favori: FC Nantes</li>
            <li>Plat préféré: Bortsch*</li>
            <li>
              <strike>Café</strike>/ Thé.
            </li>
          </ul>
        </div>

        <div>
          <h2>Hobbies</h2>
          <ul>
            <li>Football</li>
            <li>Automobile</li>
            <li>Graphisme et Design</li>
            <li>Voyage</li>
            <li>Musique</li>
          </ul>
        </div>

        <div>
          <h2>Langues parlées</h2>
          <ul>
            <li>
              <b>NATIF</b>
            </li>
            <li>🇫🇷 Français</li>
            <br />
            <li>
              <b>COURANT</b>
            </li>
            <li>🇺🇸🇬🇧 Anglais</li>
            <li>🇺🇦 Ukrainien</li>
            <br />
            <li>
              <b>INTERMÉDIAIRE</b>
            </li>
            <li>🇷🇺 Russe</li>
            <li>🇵🇱 Polonais</li>
            <br />
            <li>
              <b>NOTIONS</b>
            </li>
            <li>🇩🇪 Allemand</li>
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
export default {};
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
    flex-wrap: wrap;
    justify-content: space-around;
  }

  li {
    list-style-type: none;
    text-align: left;
    margin: 5px 0;
  }
}
</style>