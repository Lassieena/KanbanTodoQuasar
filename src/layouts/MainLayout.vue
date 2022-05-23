<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row text-center">
    <div class="col q-mt-md">
      <q-btn
        label="Backlog"
        @click="$router.push('/backlog')"
        color="secondary"
        :outline="!isPath('/backlog')"
        class="q-mr-md"
      />
      <q-btn
        label="Board"
        @click="$router.push('/board')"
        color="secondary"
        :outline="!isPath('/board')"
      />
    </div>
  </div>
    
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'




export default defineComponent({
  name: 'MainLayout',
  methods: {
    isPath (path) {
      return this.$route.path === path
    },
    created () {
    this.$store.commit('app/initStore')
    }
  }

})
</script>
