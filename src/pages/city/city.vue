<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>  
    </div>
</template>
<script>
import cityHeader from "./components/header";
import citySearch from "./components/search";
import cityList from "./components/List";
import cityAlphabet from "./components/alphabet";
import axios from "axios";
export default {
  name: "city",
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet,
  },
  data(){
    return {
      cities:{},
      hotCities:[]
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted(){
    this.getCityInfo()
  },
}
</script>
<style lang="stylus" scoped>
</style>

