<template>
  <div>
    <a-input v-model="inputValue"/>
    {{inputValueLasterLetter}}
    <!-- <a-show :content="inputValue"/> -->
    {{appWithVersion}}
    {{userName}}
    {{firstLetter}}
  </div>
</template>
<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "store",
  components: {
    AInput,
    AShow
  },
  computed: {
    // appName() {
    //   return this.$store.state.appName;
    // },
    // userName() {
    //   return this.$store.state.user.userName;
    // }
    // ...mapState([
    //   'appName'
    // ])
    //  ...mapGetters(['appWithVersion']),
    ...mapGetters(["firstLetter"]),
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName
    }),
    inputValueLasterLetter() {
      return this.inputValue.substr(-1, 1);
    },
    appWithVersion(){
      return this.$store.getters.appWithVersion
    }
    // firstLetter() {
    //   return this.$store.getters.firstLetter;
    // }
  },
  data() {
    return {
      inputValue: ""
    };
  }
};
</script>

