<template>
<div class="padre">
   <div class="hijo">Texto alineado aquí.</div>
</div>
</template>


<script>
  export default {
      auth: 'guest',

  };
</script>


<style>
.hijo {
   line-height: 50; 
}
.padre {
    position: absolute;
    height: calc(100% - 1rem);
}
</style>