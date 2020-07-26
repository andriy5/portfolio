<template>
  <div id="page_top">
    <a href="#">
      <span class="circle">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="32" height="50"
          viewBox="0 0 172 172"
          style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1d1d1d"><path d="M85.8925,44.72c-1.78719,0.02688 -3.49375,0.7525 -4.75687,2.01563l-68.8,68.8c-1.80063,1.72 -2.52625,4.28656 -1.89469,6.70531c0.63156,2.40531 2.51281,4.28656 4.91813,4.91813c2.41875,0.63156 4.98531,-0.09406 6.70531,-1.89469l63.93562,-63.93563l63.93563,63.93563c1.72,1.80062 4.28656,2.52625 6.70531,1.89469c2.40531,-0.63156 4.28656,-2.51281 4.91813,-4.91813c0.63156,-2.41875 -0.09406,-4.98531 -1.89469,-6.70531l-68.8,-68.8c-1.31688,-1.31688 -3.10406,-2.0425 -4.97188,-2.01563z"></path></g></g></svg>
      </span>
    </a>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .circle {
    height: 50px;
    width: 50px;
    background-color: rgba(255, 255, 255, 0.664);
    background: linear-gradient(129deg, rgba(199, 188, 124, 0.685) 0%, rgba(233, 193, 120, 0.685) 35%, rgba(204, 108, 108, 0.685) 100%);
    // border-radius: 50%;
    display: inline-block;

    &:hover {
      background: rgb(230,196,0);
      background: linear-gradient(129deg, rgba(230,196,0,1) 0%, rgba(241,157,0,1) 35%, rgba(208,18,18,1) 100%);
    }
  }
  

  #page_top {
      position: fixed;
      bottom: 30px;
      left: 30px;
  }
  #page_top a {
      // background-color: #999;
      // color: #fff;
      // text-align: center;
      // text-decoration: none;
      // padding: 20px 20px;
      // border-radius: 100%;
  }
  #page_top a:hover {
      // background-color: #666;
      // text-decoration: none;
  }
</style>