<template>
  <div>
    <!-- <a-input v-model="inputValue"/>
    {{inputValueLasterLetter}}-->
    <!-- <a-show :content="inputValue"/> -->
    <!-- {{appWithVersion}}
    {{userName}}
    {{firstLetter}}-->
    {{appName}}
    <p>{{appWithVersion}}</p>
    <p>{{appVersion}}</p>
    <p>{{userName}}</p>

    <button @click="updateAppName1">修改</button>
  </div>
</template>
<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
import { mapState, mapGetters, mapMutations,mapActions } from "vuex";
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
      userName: state => state.user.userName,
      appVersion: state => state.appVersion
    }),
    inputValueLasterLetter() {
      return this.inputValue.substr(-1, 1);
    },
    appWithVersion() {
      return this.$store.getters.appWithVersion;
    }
    // firstLetter() {
    //   return this.$store.getters.firstLetter;
    // }
  },
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    ...mapMutations(["SET_APP_NAME", "SET_USER_NAME"]),
    ...mapActions(['updateAppName']),
    updateAppName1() {
      // this.SET_APP_NAME("newName");
      // this.$store.commit("SET_APP_VERSION");
      // this.SET_USER_NAME("newName111");
      // this.updateAppName()
      this.$store.dispatch('updateAppName')
    }
  }
};
</script>

