<template>
  <div>
    <h1 class="emphasis">Mon Parcours</h1>
    <div id="parcours_box" class="part">
      <!-- <picture>
        <img src='@/assets/paint_transparent.png' id="painting"/>
      </picture>-->

      <div id="formation" class="parcours">
        <ul>
          <li>
            <h3>Samsung Campus</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
              pretium viverra suspendisse potenti nullam ac. Nec nam aliquam sem
              et tortor. Dictum fusce ut placerat orci nulla pellentesque. Erat
              imperdiet sed euismod nisi.
            </p>
          </li>
          <li>
            <h3>URMA Loire-Atlantique</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
              pretium viverra suspendisse potenti nullam ac. Nec nam aliquam sem
              et tortor. Dictum fusce ut placerat orci nulla pellentesque. Erat
              imperdiet sed euismod nisi.
            </p>
          </li>
        </ul>
      </div>

      <!-- <h1 class="title-side-A">Formation</h1>
      <h1 class="title-side-B">Éxperience</h1>-->

      <div id="xp" class="parcours">
        <ul>
          <li>
            <h3>Rentscape</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
              pretium viverra suspendisse potenti nullam ac. Nec nam aliquam sem
              et tortor. Dictum fusce ut placerat orci nulla pellentesque. Erat
              imperdiet sed euismod nisi.
            </p>
          </li>
          <li>
            <h3>Stages ERASMUS+</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
              pretium viverra suspendisse potenti nullam ac. Nec nam aliquam sem
              et tortor. Dictum fusce ut placerat orci nulla pellentesque. Erat
              imperdiet sed euismod nisi.
            </p>
          </li>
          <li @mouseover="changeBg" @mouseleave="resetBg">
            <h3>PSA Citroën Retail</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
              pretium viverra suspendisse potenti nullam ac. Nec nam aliquam sem
              et tortor. Dictum fusce ut placerat orci nulla pellentesque. Erat
              imperdiet sed euismod nisi.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Parcours"
};
</script>

<style lang="scss" scoped>
#parcours_box {
  display: flex;
  flex-wrap: wrap;
  margin: 0 3rem;
  justify-content: space-between;
  background-color: #222222;
  overflow: hidden;
}

#painting {
  width: 70%;
  left: 25%;
  position: absolute;
  overflow: hidden;
  z-index: 1;
  filter: invert(4%);
}

.parcours {
  @media only screen and (max-width: 750px) {
    min-width: 80%;
    text-align: center;
    max-width: 100%;
  }
  max-width: 40%;
  margin: 2em;
  z-index: 3;

  ul {
    list-style-type: none;
  }
}

#formation {
  float: left;

  ul {
    padding-left: 0;
  }

  h3 {
    text-transform: uppercase;
    text-align: left;
    font-size: 2vmax;
  }

  p {
    font-size: 1vmax;
    text-align: left;
  }
}

#xp {
  h3 {
    text-transform: uppercase;
    text-align: right;
    font-size: 2vmax;
  }

  p {
    font-size: 1vmax;
    text-align: right;
  }
}

.title-side {
  // position: absolute;
  &-A {
    transform: rotate(90deg);
    margin-right: 2em;
  }

  &-B {
    transform: rotate(-90deg);
    margin-left: 2em;
  }
}
</style>
