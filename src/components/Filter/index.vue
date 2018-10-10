<template>
<div :style="{display: displayType, marginRight: marginRighted, marginLeft: marginLefted, width: widthed, height: heighted, textAlign: textAligned}">
	{{currentValue}}
</div>
</template>

<script type="text/ecmascript-6">
  /**
   * 因为小程序不能使用filter , 而mpvue又不能再template模版的{{}}中调用methed函数, 大部分可以使用computed代替 , 但是遇到v-for中的item要使用filter的话就没有办法, 肯定要传一个值,因此使用这个filter组件 , 使用props来传递这个值
   * Filter
   * @author Kaili.zheng
   * @type Component
   * @module components/Filter
   * @example
   * <Filter :value="item.invnm"
             :filterName1="{parm1:'getSensitiveName', parm2: '' , parm3: ''}"
             textAligned = "left"
      >
      </Filter>
   */
export default {
  name: 'filter',
	props: {
    value: {
      type: String
    },
    filterName1: Object, // filter 的名字  传递方式 :filterName1="{parm1:'getSensitiveName', parm2: '', parm3: ''}"
    filterName2: Object,
		// css相关
		displayType: {  // inline-block 或者 block
      type: String,
			default: 'block'
    },
		marginRighted: String,
    marginLefted: String,
		widthed: String,
		heighted: String,
		textAligned: String,
	},
	data() {
    return {
      currentValue: ''
    }
	},
	onLoad() {
    this.currentValue = this.value
    let res1
    switch (this.filterName1.parm1) {
			case 'thousandSplit':
			  res1 = this.$filter.thousandSplit(this.currentValue)
				break
      case 'cardNoSplit':
        res1 = this.$filter.cardNoSplit(this.currentValue , this.filterName1.parm2? this.filterName1.parm2: null )
        break
      case 'mobileNoSplit':
        res1 = this.$filter.mobileNoSplit(this.currentValue,  this.filterName1.parm2? this.filterName1.parm2: null)
        break
      case 'getSensitiveBankCard':
        res1 = this.$filter.getSensitiveBankCard(this.currentValue)
        break
      case 'getSensitivePhone':
        res1 = this.$filter.getSensitivePhone(this.currentValue)
        break
      case 'getSensitiveName':
        res1 = this.$filter.getSensitiveName(this.currentValue)
        break
      case 'fetchBit':
        res1 = this.$filter.fetchBit(this.currentValue, this.filterName1.parm2? this.filterName1.parm2: false , this.filterName1.parm3? this.filterName1.parm3: 2)
        break
      case 'convertTenThousand':
        res1 = this.$filter.convertTenThousand(this.currentValue)
        break
      case 'removeZero':
        res1 = this.$filter.removeZero(this.currentValue)
        break
      case 'percentNumber':
        res1 = this.$filter.percentNumber(this.currentValue)
        break
    }
    this.currentValue = res1
		if (this.filterName2) {
      let res2
      switch (this.filterName2.parm1) {
        case 'thousandSplit':
          res2 = this.$filter.thousandSplit(this.currentValue)
          break
        case 'cardNoSplit':
          res2 = this.$filter.cardNoSplit(this.currentValue , this.filterName1.parm2? this.filterName1.parm2: null )
          break
        case 'mobileNoSplit':
          res2 = this.$filter.mobileNoSplit(this.currentValue,  this.filterName1.parm2? this.filterName1.parm2: null)
          break
        case 'getSensitiveBankCard':
          res2 = this.$filter.getSensitiveBankCard(this.currentValue)
          break
        case 'getSensitivePhone':
          res2 = this.$filter.getSensitivePhone(this.currentValue)
          break
        case 'getSensitiveName':
          res2 = this.$filter.getSensitiveName(this.currentValue)
          break
        case 'fetchBit':
          res2 = this.$filter.fetchBit(this.currentValue, this.filterName1.parm2? this.filterName1.parm2: false , this.filterName1.parm3? this.filterName1.parm3: 2)
          break
        case 'convertTenThousand':
          res2 = this.$filter.convertTenThousand(this.currentValue)
          break
        case 'removeZero':
          res2 = this.$filter.removeZero(this.currentValue)
          break
        case 'percentNumber':
          res2 = this.$filter.percentNumber(this.currentValue)
          break
      }
      this.currentValue = res2
		}
	},
	watch: {
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
