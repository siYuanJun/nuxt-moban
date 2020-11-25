<template>
    <div class="container">
        <div class="header-lnline">
            <ul class="nav flex justify-center">
                <li>
                    <nuxt-link :to="{name:'index'}" class="text-white">首页</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{name:'about'}" class="text-white">关于</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="less">
</style>
