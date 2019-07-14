Component({
  mixins: [],
  data:{
    alpha: 0 ,
    windowHeight: 0,
    scrollHeight: 0,
    offsetTop: 0,
    scrollViewTop: 0,
    apTabOffsetTop: 0
  },
  props: {
    onChoose: (e) => { console.log(e) },
    showAlphabet: true,
    alphabetColor: '#333333',
    list: [],
    apHeight: 18,
    itemStyle: ''
  },
  didMount() {
    try {
      my.createSelectorQuery()
        .select('#Top').boundingClientRect()
        .select('.alphabet-in-scroll').boundingClientRect()
        .select('.alphabet-in-selector').boundingClientRect()
        .exec(res => {
          let sysInfo = my.getSystemInfoSync()
          if (res && res.length === 3 && this.props.list && this.props.list.length > 0) {
            let headerOffsetTop = res[0].height;
            let scrollViewTop = res[1].top
            let apTabOffsetTop = res[2].top
            console.log(res)
            this.setData({
              windowHeight: sysInfo.windowHeight,
              scrollHeight: sysInfo.windowHeight - headerOffsetTop  + 'px',
              scrollViewTop: scrollViewTop,
              apTabOffsetTop: apTabOffsetTop
            })
          }
        })
    } catch (e) {
      console.log(e)
    }
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handlerAlphaTap(e) {
      let {ap} = e.target.targetDataset;
      this.setData({alpha: ap});
    },
    handlerMove(e) {
      let touchIndex = e.target.targetDataset.index
      let touchOffsetTop = e.target.offsetTop + (this.data.windowHeight * 0.05)
      let moveY = e.touches[0].clientY;
      if (touchIndex > -1) {
        let {list} = this.props;
        let rY = moveY - touchOffsetTop;
          let index = Math.ceil((rY - this.props.apHeight) / this.props.apHeight) + touchIndex;
          if (index < 0) {
            this.setData({
              alpha: 0
            })
          } else if(index < list.length) {
            let nonwAp = list[index];
            nonwAp && this.setData({alpha: nonwAp.key});
          } else {
            this.setData({
              alpha: list.length
            })
          }
      }
      
    },
    onClickItem(e) {
      this.props.onChoose(e.currentTarget.dataset.item)
    }
  },
});
