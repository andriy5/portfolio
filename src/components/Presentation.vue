<template>
  <div id="presentation" class="part">
    <div id="presentation__right">
      <img src="@/assets/moi.png" id="picture" />
      <div id="presentation__right__title">
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="1em"
            height="1em"
            viewBox="0 0 172 172"
            style=" fill:#000000;"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <path d="M0,172v-172h172v172z" fill="none" />
              <g id="original-icon" fill="#ffffff">
                <path
                  d="M54.91906,6.97406c-2.68906,0.06829 -5.01273,0.90085 -6.69188,2.58c-0.46784,0.46784 -0.80109,1.02673 -1.02125,1.65281c-1.91952,5.47992 -6.44586,10.00626 -11.92578,11.92578c-0.62608,0.22016 -1.18497,0.55341 -1.65281,1.02125c-5.37328,5.37328 -2.10496,17.35254 7.29656,26.75406l0.18813,0.18813l4.86437,4.86437l-9.17781,9.17781c-3.19576,3.19576 -3.19576,8.3772 0,11.5764l0.00672,0.00672c1.5996,1.5996 3.6966,2.3986 5.79156,2.3986c2.09496,0 4.18525,-0.799 5.78485,-2.3986l52.41969,-52.41969c3.19576,-3.1992 3.19576,-8.38065 0,-11.57641l-0.00672,-0.00672c-1.5996,-1.5996 -3.6966,-2.39859 -5.79156,-2.39859c-2.09496,0 -4.18525,0.79899 -5.78485,2.39859l-9.18453,9.18453l-21.80906,21.80906c-1.34504,1.34504 -3.51933,1.34504 -4.86437,0c-1.34504,-1.34504 -1.34504,-3.51933 0,-4.86437l21.80906,-21.80906l-0.18812,-0.18812c-6.46591,-6.46591 -14.14625,-10.0268 -20.06219,-9.87656zM99.76,51.6c-15.19888,0 -27.52,12.32112 -27.52,27.52c0,15.19888 12.32112,27.52 27.52,27.52c15.19888,0 27.52,-12.32112 27.52,-27.52c0,-15.19888 -12.32112,-27.52 -27.52,-27.52zM27.95672,74.36313c-0.258,0.97352 -0.43672,1.98079 -0.43672,3.03687v43c0,11.40016 9.23984,20.64 20.64,20.64h20.64v24.08h72.24v-10.32c0,-20.898 -16.942,-37.84 -37.84,-37.84h-51.6v-34.01703c-2.59032,1.95048 -5.69729,3.05703 -9.00313,3.05703c-3.89752,0 -7.60014,-1.48227 -10.41406,-4.17235l-0.24859,-0.24187c-2.0124,-2.0124 -3.34454,-4.51193 -3.9775,-7.22265z"
                />
              </g>
            </g>
          </svg>
          Bonjour ! je suis
          <u>Andriy Shakh</u>
        </h1>
        <h1 id="title" class="emphasis">Développeur Web Full-Stack</h1>
        <h2>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          nisi quis eleifend quam. Sit amet mauris commodo quis imperdiet
          massa."
        </h2>
      </div>
      <div id="presentation__right__links">
        <a href="#" class="btn">Me contacter ☞</a>
        <a :href="`${publicPath}CV_DéveloppeurWeb_Andriy_Shakh.pdf`" target="_blank" class="btn">Mon CV ☞</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  name: "Presentation",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#presentation {
  z-index: 1;
  overflow: hidden;
  background-color: rgb(34, 34, 34);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3rem;

  img {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40%;
    height: auto;
    z-index: -1;
    overflow: hidden;
  }

  &__right {
    z-index: 2;
    width: 100%;
    position: relative;

    &__title {
      width: 100%;
      float: right;

      #title {
        font-weight: bold;
      }

      h1 {
        text-align: right;
        text-transform: uppercase;
        font-size: 3vmax;
        font-weight: 400;
      }

      h2 {
        font-family: "Raleway", sans-serif;
        font-size: 2vmax;
        // font-style: italic;
        width: 100%;
        max-width: 70%;
        float: right;
        text-align: right;
        margin-bottom: 3em;
      }
    }

    @media only screen and (max-width: 992px) {
      text-align: center;
      padding: 30px;

      &__title {
        width: 100%;
        float: right;

        h1 {
          text-align: left;
        }

        h2 {
          max-width: 100%;
          font-family: "Raleway", sans-serif;
          font-size: 2vmax;
          width: 100%;
          float: none;
          margin-bottom: 0;
        }
      }
    }

    &__links {
      display: block;
      justify-content: space-between;
      margin: 2em;
      float: right;
      padding-bottom: 2em;

      a {
        @media only screen and (max-width: 992px) {
          display: flex;
          width: auto;
          margin: 20px 0;
        }

        white-space: nowrap;
        text-transform: uppercase;
        font-size: 1.8vmax;
        color: #fff;
        text-decoration: none;
        margin-right: 2rem;
        padding: 10px 15px;
        border: 2px solid #fff;

        &:hover {
          background-color: #fff;
          color: #000;
        }
      }
    }
  }
}

.emphasis {
  background: linear-gradient(to right, #ffbb00 50%, #da1b1b 120%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

  @media only screen and (max-width: 992px) {
    background: linear-gradient(to right, #ffbb00 -10%, #da1b1b 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
