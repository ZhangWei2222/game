<template lang="pug">
  div.user-modal__wrapper
    div.user-modal
      i.user-modal__close.fa.fa-times-circle-o(@click='closeModal')
      div.user-modal__content
        slot(name='content')
</template>

<script>
export default {
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
@import '../style/user-modal';
</style>
