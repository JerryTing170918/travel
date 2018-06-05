<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>  
    </div>
</template>
<script>
import cityHeader from "./components/header";
import citySearch from "./components/search";
import cityList from "./components/List";
import cityAlphabet from "./components/alphabet";
export default {
  name: "city",
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet,
  }
};
</script>
<style lang="stylus" scoped>

</style>

