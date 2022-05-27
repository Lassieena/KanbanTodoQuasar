<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <lane :items="todoItems" title="To-Do" id="todo" />あ
        
      </div>
      <div class="col">
        <lane :items="inProgressItems" title="In Progress" id="inProgress" />あ
      </div>
      <div class="col">
        <lane :items="doneItems" title="Done" id="done" />あ
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import Lane from 'components/Lane.vue'

export default defineComponent({
  name: 'IndexPage',
    // components: { Lane },
    computed: mapState({
      todoItems: s => s.app.items.todo,
      inProgressItems: s => s.app.items.inProgress,
      doneItems: s => s.app.items.done
    })
})
</script>
