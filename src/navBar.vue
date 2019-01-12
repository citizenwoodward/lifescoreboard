<template>
<div class="route-wrap">
  <router-link to="/createcard"> <span class="nav-title"> Create A Scorecard </span>
    <svg style="position:relative;left:5px;top:5px;width:24px;height:24px"
         viewBox="0 0 24 24">
      <path fill="#ffffff"
            d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,	17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
    </svg>
  </router-link>
  <router-link to="/scorecards"> <span class="nav-title"> Scorecards </span>
    <svg style="width:24px;height:24px"
         viewBox="0 0 24 24">
      <path fill="#ffffff"
            d="M5,2H19A1,1 0 0,1 20,3V13A1,1 0 0,1 19,14H5A1,1 0 0,1 4,13V3A1,1 0 0,1 5,2M6,4V12H18V4H6M20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17V16H20V17M20,21A1,1 0 0,1 19,22H5A1,1 0 0,1 4,21V20H20V21Z" />
    </svg>
  </router-link>
  <router-link to="/stats"> <span class="nav-title"> Stats </span>
    <svg xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         version="1.1"
         x="0px"
         y="0px"
         width="24px"
         height="24px"
         viewBox="0 0 24 24"
         style="enable-background:new 0 0 24 24;"
         xml:space="preserve">
      <g id="Layer_1">
        <g>
          <g>
            <path class="st0"
                  d="M22,5.7h-4c-0.3,0-0.6,0.3-0.6,0.6v3.9h-2.8V3.6c0-0.3-0.3-0.6-0.6-0.6h-4c-0.3,0-0.6,0.3-0.6,0.6v10.7H6.6     V9.5C6.6,9.2,6.3,9,6,9H2C1.7,9,1.5,9.2,1.5,9.5v10.9c0,0.3,0.3,0.6,0.6,0.6h4h4h4h4h4c0.3,0,0.6-0.3,0.6-0.6V6.3     C22.5,6,22.3,5.7,22,5.7z M5.5,19.8H2.6v-9.7h2.8C5.5,10.1,5.5,19.8,5.5,19.8z M9.4,19.8H6.6v-4.3h2.8V19.8z M13.4,10.7v9.1h-2.8     V4.2h2.8V10.7z M17.4,19.8h-2.8v-8.5h2.8V19.8z M21.4,19.8h-2.8v-9.1V6.9h2.8L21.4,19.8L21.4,19.8z" />
          </g>
        </g>
      </g>
    </svg>
  </router-link>
  <div @click="signBox()">
  	<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path class="st0" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
</svg>
  </div>
</div>

</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
    	text: ""
    }
  },
  methods: {
  	signBox() {
  		this.$emit('signdis')
  	}
  }
}

</script>

<style scoped="">
.route-wrap {
  font-size: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  background-color: #2196F3;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px 0;
  z-index: 2;
  /*margin: 0 20px;*/
}

a {
  color: white;
  text-decoration: none;
}

.st0 {
  fill: #FFFFFF;
}

.nav-title {
  display: none;
}
</style>
