<template>
    <div class="container">
        <Headers></Headers>
        <div class="wp">
            <div class="padding">
                <h3>文章详情</h3>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$route, 'this.$route');
    }
  }
</script>

<style scoped lang="less">
</style>
