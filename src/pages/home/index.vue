<template>
<div class="container">
	这是home页面 22
	<div class="home-bg"></div>
	<!--验证问题三  computed Object-->
	<div :style="computedStyle"></div>
	<div :style="{width: widthed, height: heighted, background: 'red'}"></div>
	<!--验证问题三结束  computed Object-->

	<!--验证问题四ref-->
	<div class="home-header" ref="header">这是header</div>
	<!--验证问题四ref结束-->

	<!--验证问题5 methods调用-->
	<div>这是methods调用 {{isUserInfo()}}</div>
	<!--验证问题5 methods调用 结束-->

	<!--验证问题6 filter-->
	<div style="margin-top: 30px">
		<div>{{userName}}</div>
		<Filter :value="userName"
		        :filterName1="{parm1:'getSensitiveName'}"
		        textAligned = "left"
		>
		</Filter>
		<!--使用computed方式-->
		<div>{{getSensitiveName_invnm}}</div>
	</div>
	<!--验证问题6 filter 结束-->

	<!--验证问题7 行内样式rpx-->
	<div style="margin-top: 40px; font-size: 30px">这是直接用px</div>
	<div style="font-size: 60rpx">这是用rpx</div>
	<div class="font-size-30">这是用css样式</div>
	<!--验证问题7 行内样式rpx结束-->

	<!--验证动画效果-->
	<img src="https://aliyun-oss-zkluoload.oss-cn-beijing.aliyuncs.com/gmxcc/static/pages/user/inviteFriend/yaoqinghaoyou_icon_zhuanfa@2x.png" alt="" class="animate-icon alphaDown absolute " mode="widthFix">
	<!--验证动画效果结束-->
</div>
</template>

<script type="text/ecmascript-6">
  import Filter from '@/components/Filter'
  import MyFilter from './filter'
	export default {
	  data() {
	    return {
				widthed: '20px',
		    heighted: '20px',
		    userName: '王小明',
		    assetNumber: 1464646
	    }
	  },
		// 验证问题一
		created() {
	    console.log('created 开始的时候就会执行')
		},
		onLoad() {
	    console.log('home页面的 onLoad开始工作')
			console.log(this)
		},
    // 问题一结束
		computed: {
      ...MyFilter.filter,
      computedStyle() {
        let obj = {
          width: '20px',
          height : '20px',
	        background: 'red'
        }
        return obj
      }
		},
		methods: {
			isUserInfo() {
			  return '返回userInfo'
			}
		},
		components: {
      Filter
		}
	}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	* {
		color: red
	}
	.home-bg
		// 验证问题二
		width 50px
		height 50px
		background url("./images/smallImg.png") no-repeat center
	.home-header
		margin-top 50px
	.font-size-30
		font-size 30px
	/*箭头下拉效果*/
	/*@keyframes alphaDown {
		0% {
			opacity: 1;
			transform: translate(0px,0px);
		}
		10% {
			opacity: 1;
			transform: translate(0,4vw);
		}
		90% {
			opacity: 1;
			transform: translate(0,4vw);
		}
		to {
			opacity: 1;
			transform: translate(0px,0px);
		}
	}*/
	@-webkit-keyframes alphaDown {
		0% {
			opacity: 1;
			transform: translate(0px,0px);
		}
		10% {
			opacity: 1;
			transform: translate(0,4vw);
		}
		90% {
			opacity: 1;
			transform: translate(0,4vw);
		}
		to {
			opacity: 1;
			transform: translate(0px,0px);
		}
	}
	.alphaDown {
		animation-name: alphaDown;
		animation-duration: 1s;
		animation-iteration-count:infinite;
	}
	.animate-icon
		width 10vw
		right 60px
		z-index 33
	/*sksk*/

</style>
