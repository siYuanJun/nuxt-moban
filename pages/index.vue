<template>
    <div class="container">
        <Headers></Headers>
        <div class="flex justify-center margin-top">
            <ul class="wp-xs">
                <li class="text-sm text-black margin-top-sm"
                    v-for="(item, index) in parmdata.items"
                    @key="index">
                    <nuxt-link class="text-black" :to="{name:'article-id', params: {id: item.passid}}">{{item.title}}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        ip: "",
        parmdata: {
          items: {}
        }
      }
    },
    created() {
      // console.log(this.$config)
      this.init()
    },
    methods: {
      init() {
        let that = this
        that.$axios.$get('duanzi', {params: {page: 1}}).then(res => {
          that.parmdata = res
        })
      }
    }
  }
</script>

<style scoped lang="less">
</style>
