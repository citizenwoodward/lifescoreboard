<template>
<div class="test">
  <!-- <createcard :goalProp="goalsRef" :titleProp="titleRef"></createcard>
    	<scorecard :goalProp="goalsRef" :titleProp="titleRef"></scorecard> -->
  <!--     	<div v-for="board in reverseBoards">
    		<scorecard :scoreProp="board"></scorecard>
    	</div> -->
  <swiper id="slider" :options="swiperOption">
    <swiper-slide v-for="(board, index) in reverseBoards">
      <scorecard :scoreProp="board"></scorecard>
    </swiper-slide>
  </swiper>
</div>

</template>

<script>
// import goallist from './goallist.vue'
// import {db} from './firebase';
// var todosRef = db.ref('scorecards/0/title')

// import firebase from 'firebase'

import scorecard from './scorecard.vue';
import createcard from './createcard.vue';

import 'swiper/dist/css/swiper.css';

import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  components: {
    scorecard,
    createcard,
    swiper,
    swiperSlide
  },
  props: [
    'scoreProp', 'createProp'
  ],
  name: 'scoreboard',
  data() {
    return {
      boards: this.scoreProp,
      swiperOption: {
          autoHeight:true
        }
    }
  },
  computed: {
    reverseBoards() {
      return this.boards.slice().reverse()
    }

    // titleDate() {

    // 	var valueGetter = Object.values(this.titleProp)
    // 	return valueGetter[0]

  // 	// return this.tester
  // }
  },
  mounted: function() {}
}

</script>

<style scoped="">
.titledate {
  color: #0D47A1;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 0px;
  border-bottom: 1px solid #7F7E7E;
}

#slider {
	overflow-y: visible;
	padding-bottom: 60px;
}

/*.swiper-slide {
	margin-bottom: 20px;
}*/

/*	

	.scorecard div {
		flex:1;
		justify-content: flex-end;
	}*/
</style>
