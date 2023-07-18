import { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtButton,AtAvatar  } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class UserInfo extends Component {
  state = {
    userInfo:{}
  }

  componentWillMount() {}

  getUserInfo = ()=>{
    Taro.getUserInfo({
      success:response=>{
        const {userInfo} = response
        this.setState({userInfo})
        console.log('userInfo',userInfo)
      }
    })
  }

  render () {
    const {userInfo} = this.state
    const {avatarUrl,nickName,gender,city,province} = userInfo
    return (
      <View className='profile'>
        <View className='pic'>
          {
            avatarUrl?
            <AtAvatar circle size='large' image='https://taro-ui.jd.com/img/logo-taro.png'></AtAvatar>:
            <AtAvatar circle text='凹凸实验室' size='large'></AtAvatar>
          }
        </View>
        <View className='info'>
          {nickName?<Text>{nickName}</Text>:<AtButton type='primary' onClick={this.getUserInfo} size='small' full={false}>点击登录</AtButton>}
          <View className='location'>
            <Text>{province?`${province} ${city}`:'userInfo'}</Text>
          </View>
        </View>
      </View>
    )
  }
}