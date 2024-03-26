<script>
</script>


<template>
  <main>
  <slot>

  </slot>

  </main>
</template>

<style lang="scss" scoped>

main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--footer-height) - var(--header-height));

}

</style>