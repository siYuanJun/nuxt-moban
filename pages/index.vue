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
        <div class="flex justify-center margin-top">
            <div class="padding text-df text-black">{{ip}}</div>
        </div>
    </div>
</template>

<script>
  import { getData } from "../plugins/axiosA";

  export default {
    data() {
      return {
        ip: "",
      }
    },
    created() {
      // this.getData()
      this.asyncData()
    },
    methods: {
      getData() {
        console.log("接口初始化")
        getData('duanzi', {page: 1}, 'get').then(res => {
          console.log(res)
        }).catch(res => {
          console.log(res)
        })
      },

      asyncData() {
        let that = this
        that.$axios.$get('duanzi').then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="less">
</style>
