<template>
  <div class="fullMain">
    <x-header class="custumHeader" :left-options="{backText: '',showBack: false}"  >
      <span>个人中心</span>
    </x-header>
    <div class="mainbBg">
      <div class="menuHeader">
        <span class="ids">姓名：老王</span>
      </div>
      <img class="myHeadIcon" src="@/assets/img/user.png"/>
      <span class="names" >欢迎您使用出入登记系统</span>
      <div class="saveDiv">
        <button type="button" class="affirmBtn specialBtn mB" >
          <i class="fa fa-pencil-square-o"></i>
          <span>出入登记</span>
        </button>
        <button type="button"  class="affirmBtn specialBtn mB">
          <i class="fa fa-users" aria-hidden="true"></i>
          <span>群组管理</span>
        </button>
        <button type="button" class="affirmBtn specialBtn mB" >
          <i class="fa fa-cog fa-fw"></i>
          <span>我的信息</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {
  XHeader
} from 'vux'

export default {
  name: 'test',
  components: {
    XHeader
  }
}
</script>
