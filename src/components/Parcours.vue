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
              2020-2021 <br/><br/>
              Préparation au diplôme de <u>Dévloppeur web Full-Stack (RNCP 5 Bac+2)</u> grâce à la pédagogie EPITECH, basé sur des projets en autonomie pour la majorité mais aussi quelques projets effectués en groupe avec la méthodologie AGILE.
            </p>
          </li>
          <li>
            <h3>URMA Loire-Atlantique</h3>
            <p>
              2014-2017 <br/><br/>
              Préparation du <u>Baccalauréat Professionel Mécanicien Automobile</u> en alternance. Stage de 2 semaines effectué en Italie à Pinerolo.<br/><i>Obtenu avec mention Bien.</i>
            </p>
          </li>
        </ul>
      </div>

      <div id="xp" class="parcours">
        <ul>
          <li>
            <h3>Rentscape</h3>
            <p>
              CONSEILLER COMMERCIAL | 2018-2019 <br/><br/>
              Prise en charge clientèle internationale: création contrat de location au comptoir, vente options
              additionnelles et convoyage des clients en mini-bus
              <br />
              <br />Gestion administrative: réservations (arrivées / départs), facturations, appels téléphoniques,
              réponse aux mails, gestion parc véhicule
              <br />
              <br />Préparation véhicule pour la location, contrôle flotte véhicule, contrôle stock back-office, petite mécanique
            </p>
          </li>
          <li>
            <h3>Stages ERASMUS+</h3>
            <p>
              MÉCANICIEN AUTO | 2017-2018 <br/><br/>
              Durant un an j'ai pu décourvrir trois entreprises à Berlin et à Londres où j'ai pu effectuer des travaux mécaniques automobile sur différents gammes de véhicule. Allant de la voiture de collection à l'haut-de-gamme.</p>
          </li>
          <li>
            <h3>PSA Citroën Retail</h3>
            <p>
              APPRENTI MÉCANICIEN | 2014-2017 <br/><br/>
              Apprentissage du métier du mécanicien automobile dans son ensemble.
              Effectué en alternance au sein d’une succursale.
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
