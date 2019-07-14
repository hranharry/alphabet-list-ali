Component({
  mixins: [],
  data:{
    alpha: 0 ,
    scrollHeight: 0,
    offsetTop: 0,
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
        .select('#alphabet-tab').boundingClientRect()
        .exec(res => {
          let sysInfo = my.getSystemInfoSync()
          if (res && res.length === 2 && this.props.list && this.props.list.length > 0) {
            let offsetTop = res[0].height;
            let apTabOffsetTop = res[1].top
            this.setData({
              scrollHeight: sysInfo.windowHeight - offsetTop  + 'px',
              apTabOffsetTop: apTabOffsetTop
            })
          }
        })
    } catch (e) {
      
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
      let {list} = this.props;
      let moveY = e.touches[0].clientY;
      let rY = moveY - this.data.apTabOffsetTop;
      if(rY >= 0) {
        let index = Math.ceil((rY - this.props.apHeight)/ this.props.apHeight);
        if(0 <= index < list.length) {
          let nonwAp = list[index];
          nonwAp && this.setData({alpha: nonwAp.key});
        } 
      }
    },
    onClickItem(e) {
      this.props.onChoose(e.currentTarget.dataset.item)
    }
  },
});
