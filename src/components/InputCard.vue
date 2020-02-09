<template>
  <div>
    {{message}}
    <form @submit.prevent="submit">
      <input v-model="message">

      <li v-for="v in dataList" :key="v.key">
        <input type="checkbox" id="v.key" :value="v" @input="updateValue">
      </li>
    </form>
  </div>
</template>
<script>
export default {
  watch: {
    dataList: {
      handler() {
        console.log({ dataList: this.dataList });
      },
      deep: true
    },
    checkList: {
      handler() {
        console.log({ checkList: this.checkList });
      },
      deep: true
    }
  },
  data() {
    return {
      dataList: [{ key: 1, name: "roo" }, { key: 2, name: "rsaaadaoo" }],
      checkList: []
    };
  },
  computed: {
    message: {
      get() {
        return this.$store.state.message.write.message;
      },
      set(value) {
        this.$store.dispatch("message/WRITE_MESSAGE", { value });
      }
    }
  },
  methods: {
    submit() {
      this.$store.dispatch("message/PUSH_HISTORY");
    },
    updateValue(v) {
      checkList.push(v.target.value);
    }
  }
};
</script>

