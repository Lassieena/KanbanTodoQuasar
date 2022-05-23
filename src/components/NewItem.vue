<template>
  <div>
    <q-input
      v-model="text"
      placeholder="Add a task"
      @keyup.enter="submit"
      color="secondary"
    />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    submit () {
      if (this.text.trim().length > 0) {
        this.$store.commit('app/addItem', { text: this.text })
        this.text = ''
      }
    }
  }
}
</script>

<style>

</style>
