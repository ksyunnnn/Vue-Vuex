<template>
  <div>
    <h1>modal.new is {{modal.new}}</h1>
    <button @click="SHOW_MODAL_NEW">SHOW_MODAL_NEW</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: mapState({
    modal: state => state.modal
  }),
  methods: {
    ...mapMutations("modal", ["SHOW_MODAL_NEW"]),
  }
};
</script>