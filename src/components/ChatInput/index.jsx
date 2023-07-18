import { Component } from 'react'
import { View ,Input} from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class ComInput extends Component {
  state = {
    value:''
  }

  handleChange = (e) => {
    const {value} = e.detail
    this.setState({
      value
    })
    return value
  }

  render () {
    const {value} = this.state
    return (
      <View className='common-input'>
        <Input className='input' type='text' placeholder='输入评论...' onInput={this.handleChange} />
        <AtButton type='primary' full={false} size='normal' circle onClick={()=>{console.log(value)}}>发表</AtButton>
      </View>
    )
  }
}