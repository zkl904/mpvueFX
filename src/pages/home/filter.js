const filter = {
  getSensitiveName_invnm() {
    let fetchBit = this.$filter.fetchBit(this.assetNumber, false, 2)
    return this.$filter.thousandSplit(fetchBit)
  }
}


export default {
  filter
}
