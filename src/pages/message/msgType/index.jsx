import { Component } from 'react'
// import Taro from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import like from '../../../image/like.svg'
import follow from '../../../image/follow.svg'
import chat from '../../../image/chat.svg'
import './index.scss'

export default class MsgType extends Component {

  // handleClick=()=>{
  //   Taro.navigateTo({
  //     url: '/pages/chatRoom/index',
  //   })
  // }

  render () {
    return (
      <View className='chat-type'>
        <View className='chat-item'>
          <Image src={like} className='chat-item-img' ></Image>
          <Text>点赞</Text>
        </View>
        <View className='chat-item'>
          <Image src={follow} className='chat-item-img'></Image>
          <Text>关注</Text>
        </View>
        <View className='chat-item'>
          <Image src={chat} className='chat-item-img'></Image>
          <Text>评论和@</Text>
        </View>
      </View>
    )
  }
}