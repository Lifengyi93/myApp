import { Component } from 'react'
import Taro from '@tarojs/taro';
import {View, Image} from '@tarojs/components'
import { AtBadge } from 'taro-ui'
import add from '../image/add.png'
import './index.scss'
 
export default class Index extends Component {
  state = {
    selected: null,
    color: '#666',
    selectedColor: '#a52a2a',
    list:[
      {
        pagePath: '/pages/index/index',
        text: '首页',
        iconPath: '../image/home.png',
        selectedIconPath: '../image/home_fill.png'
      },
      {
        pagePath: '/pages/discover/index',
        text: '发现',
        iconPath: '../image/discover.png',
        selectedIconPath: '../image/discover_fill.png'
      },
      {
        pagePath: '/pages/message/index',
        text: '消息',
        iconPath: '../image/community.png',
        selectedIconPath: '../image/community_fill.png'
      },
      {
        pagePath: '/pages/project/index',
        text: '我的',
        iconPath: '../image/my.png',
        selectedIconPath: '../image/my_fill.png'
      },
    ]
  }

  goPublish = () => {
    Taro.navigateTo({url: '/pages/publish/index'})
  }

  switchTab = (index,item) => {
    this.setSelected(index)
    const url = item.pagePath
    Taro.switchTab({url})
  }

  setSelected =(idx)=> {
    this.setState({
      selected: idx
    })
  }
 
  // 自定义 tabBar的页面
  render() {
    const { list, selected, color, selectedColor } = this.state
    return (
      <View className='tab-bar'>
        <View className='tab-bar-wrap'>
          {
            list.map((item, index) => {
              return <View className='tab-bar-wrap-item'
                onClick={this.switchTab.bind(this,index,item)}
                key={item.text}
              >
                {index!==2?
                <Image className='tab-bar-wrap-item-icon' src={selected === index ? item.selectedIconPath : item.iconPath} />:
                <AtBadge value={10} maxValue={99}>
                    <Image className='tab-bar-wrap-item-icon' src={selected === index ? item.selectedIconPath : item.iconPath} />
                </AtBadge>
                }
                <View className='tab-bar-wrap-item-btn' style={{color: selected === index ? selectedColor : color}}>{item.text}</View>
              </View>
            })
          }
        </View>
        <View className='add' onClick={this.goPublish}>
          <Image className='add-icon' src={add} />
        </View>
      </View>
    )
  }
}