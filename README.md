# alphabet-list-ali
支付宝小程序中支持字母筛选的列表的组件

# 参数列表
* 是否显示栏组标题
```showAlphabet: Boolean```
* 侧边栏导航颜色
```alphabetColor: Color```
* 列表
```list: Array```
    1. key: 侧边栏的名字
    2. datas: Array[string, object] 数据数组
    3. dataKey: 如果是string留空，如果是object 填写key值
* 选中回调函数
```onChoose: Function```
