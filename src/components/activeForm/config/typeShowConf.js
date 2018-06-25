const ID = 'id'
const Text = 'text'
const Label = 'label'
const Disabled = 'disabled'
const Placeholder = 'placeholder'
const MultiConf = 'multiConf' // 多行
const ChildConf = 'childConf' // 子项
const Multiple = 'multiple' // 多选
const Step = 'step'
const Min = 'min'
const Max = 'max'
const LabelText = 'labelText'
// const Type = 'type'
const showConfItems = {
  'radio': [ // 单选框
    Text, Label, MultiConf, Disabled
  ],
  'checkbox': [ // 多选框
    Text, Label, MultiConf, Disabled
  ],
  'input': [ // 输入框
    Placeholder, Disabled
  ],
  'inputNumber': [ // 计数器
    Step, Min, Max, 'precision', Disabled
  ],
  'select': [ // 选择器
    Multiple, ChildConf, Disabled
  ],
  'cascader': [ // 级联选择器
    
  ],
  'switch': [ // 开关
    'activeValue', 'inactiveValue', Disabled // active-value: switch 打开时的值; inactive-value: switch 关闭时的值
  ],
  'slider': [ // 滑块
    Step, Min, Max, 'range', 'showInput', Disabled
  ],
  'timePicker': [ // 时间选择器
    Placeholder, Disabled
  ],
  'datePicker': [ // 日期选择器
    'format', Placeholder, Disabled
  ],
  'dateTimePicker': [ // 日期时间选择器

  ],
  'upload': [ // 上传
    
  ],
  'rate': [ // 评分
    Max, 'allowHalf', Disabled
  ],
  'colorPicker': [ // 颜色选择器
    Disabled
  ],
  'transfer': [ // 穿梭框
    
  ]
}
for (let [key, item] of Object.entries(showConfItems)) {
  if (item) {
    if (item.findIndex(val => val === ID) < 0){
      item.unshift(ID, LabelText)
    } else {
      item.unshift(LabelText)
    }
    if(item.findIndex(val => val === Disabled) < 0) {
      item.push(Disabled)
    }
  } else {
    showConfItems[key] = [ID, LabelText, Disabled]
  }
}

export default showConfItems