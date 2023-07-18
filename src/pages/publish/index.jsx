import { Component } from 'react'
import { AtImagePicker,AtInput,AtTextarea,AtTag,AtButton,AtIcon } from 'taro-ui'
import { View,Textarea } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      areaValue:'',
      files: [
        {
        url: 'https://gd-hbimg.huaban.com/ac2506ff5640d79b106d95d31d92a6f1945e983a95d6e1-0bgobm',
        },
        {
          url: 'https://gd-hbimg.huaban.com/692615cf2062afbfa7556238929217d52b9497c638e80-aPSQ9T',
        },
        {
          url: 'https://gd-hbimg.huaban.com/99b7ca7239ca43c67484c2d80fb696404f59ab455dd2f-dCYd7b',
        }
      ]
      }
  }

  onChange (files) {
    this.setState({
      files
    })
  }
  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }

  onSubmit () {
    console.log(this.state.value)
  }
  onReset () {
    this.setState({
      value: '',
    })
  }

  handleChange (value) {
    this.setState({
      areaValue:value
    })
  }

  render () {
    const {areaValue} = this.state
    return (
      <View className='publish'>
          <AtImagePicker
            length={3} //单行3张
            files={this.state.files}
            onChange={this.onChange.bind(this)}
          />
          <AtInput
            name='value'
            type='text'
            placeholder='填写标题更能吸引用户~'
            value={this.state.value}
          />
          <AtTextarea
            className='content'
            height={300}
            value={areaValue}
            maxLength={200}
            placeholder='添加正文描述'
            onChange={this.handleChange.bind(this)}
          />
          <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;display:none' autoHeight />
          <View className='tags'>
            <AtTag type='primary' circle active>标签</AtTag>
            <AtTag type='primary' circle>标签</AtTag>
            <AtTag type='primary' circle>标签</AtTag>
          </View>
          <View className='submit'>
            <View className='draft'><AtIcon value='bookmark' size='20' color='#FFF'></AtIcon></View>
            <AtButton type='primary' className='send' circle >发布</AtButton>
          </View>
      </View>
    )
  }
}
