<template>
  <article>
    <slot></slot>
  </article>

</template>

<script setup>

</script>

<style >

article{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 0 2em 0;
}

.hero-image {
  width: 100%;
}
.hero-image img {
  display: block;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: var(--box-shadow);
}
.prose {
  width: 960px;
  max-width: calc(100% - 1em);
  margin: auto;
  padding: 1em;
  color: rgb(var(--gray-dark));
}
.title {
  margin-bottom: 1em;
  padding: 1em 0;
  text-align: center;
  line-height: 1;
}
.title h1 {
  margin: 0 0 0.5em 0;
}
.date {
  margin-bottom: 0.5em;
  color: rgb(var(--gray));
}
.last-updated-on {
  font-style: italic;
}

@media only screen and (max-width: 960px) {

  h1{
    font-size: 2em;
  }
  article {
    width: 100%;
  }
  .prose{
    padding: 0;
  }
}
</style>