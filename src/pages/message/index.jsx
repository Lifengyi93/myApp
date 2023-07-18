import { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtList, AtListItem,AtSwipeAction  } from "taro-ui"
import { View,Text } from '@tarojs/components'
import MsgType from './msgType'
import './index.scss'

const list =[
  {
    title:'guimiz',
    note:'天气不错，出去拍照吧',
    thumb:'https://threejs.org/files/projects/junni.png',
    date:'02-25',
    unreadNum:4,
  },
  {
    title:'momo',
    note:'你准备什么时候出去拍',
    thumb:'https://threejs.org/files/projects/futurecube.png',
    date:'02-23',
    unreadNum:12,
  },
  {
    title:'博悦摄影工作室',
    note:'上次拍的您还满意吗，记得给好评😃',
    thumb:'https://threejs.org/files/projects/blobmixer.png',
    date:'02-22',
    unreadNum:120,
  },
  {
    title:'去有风的地方',
    note:'互赞，谢谢',
    thumb:'https://threejs.org/files/projects/anumberfromtheghost.png',
    date:'02-21',
    unreadNum:0,
  },
  {
    title:'佳能',
    note:'感动常在',
    thumb:'https://threejs.org/files/projects/stickittothestickman.png',
    date:'02-21',
    unreadNum:0,
  },
  {
    title:'尼康',
    note:'主打的就是一个虚化',
    thumb:'https://threejs.org/files/projects/coastalworld.png',
    date:'02-21',
    unreadNum:0,
  }
]

const options=[
  {
    text: '已读',
    style: {
      backgroundColor: '#6190E8',
    }
  },
  {
    text: '删除',
    style: {
      backgroundColor: '#FF4949',
      // width: '50px',
    }
  }
]

export default class Index extends Component {

  pageCtx = Taro.getCurrentInstance().page

  componentDidShow () {
    const tabbar = Taro.getTabBar(this.pageCtx)
    tabbar?.setSelected(2)
  }

  handleSingle=(index)=>{
    console.log('index',index)
  }

  handleClick = () => {
    Taro.navigateTo({
      url: '/pages/chatRoom/index',
    })
  }

  render(){
    return (
      <View className='message'>
        <MsgType></MsgType>
        <AtList>
          {list.map((item, index) => (
            <AtSwipeAction
              className='swiper'
              // maxDistance={100}
              key={index}
              // onOpened={this.handleSingle.bind(this, index)}
              isOpened={item.isOpened}
              options={options}
            >
              <AtListItem className='list-item' title={item.title} note={item.note} thumb={item.thumb} onClick={this.handleClick} />
              <View className='info'>
                <Text className='date'>{item.date}</Text>
                {item.unreadNum?<Text className='num'>{item.unreadNum>99?'99+':item.unreadNum}</Text>:<Text></Text>}
              </View>
            </AtSwipeAction>
          ))}
        </AtList>
      </View>
    )
  }
}