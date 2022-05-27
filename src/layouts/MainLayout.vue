<template>
  <div id="q-app" class="bg-grey-4">
    <q-layout>
      <navigation />

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Navigation from 'components/Navigation.vue'



export default defineComponent({
  name: 'MainLayout',
  components: { Navigation },
  created () {
    this.$store.commit('app/initStore')
  }

})
</script>
