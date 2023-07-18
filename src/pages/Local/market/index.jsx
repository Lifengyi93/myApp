import { Component } from 'react'
import { View,Image,Text } from '@tarojs/components'
import './index.scss'

const list = [
  {id:'1',title:'摄影师',img:'https://threejs.org/files/projects/anumberfromtheghost.png',num:1409},
  {id:'2',title:'模特',img:'https://threejs.org/files/projects/handswtf.png',num:271},
  {id:'3',title:'设计师',img:'https://threejs.org/files/projects/lusion.png',num:32},
  {id:'4',title:'场地',img:'https://threejs.org/files/projects/turbulent.png',num:48},
]

export default class Local extends Component {

  renderList = ()=>{
   return list.map(item=>{
      return (
        <View className='market-card' key={item.id}>
          <Image className='market-card-img' src={item.img} />
          <View className='market-card-info'>
            <Text className='market-card-info-text'>{item.title}</Text>
            <Text className='market-card-info-num'>{item.num}</Text>
          </View>
        </View>
      )
    })
  }

  render () {
    return (
      <View className='market'>
        {this.renderList()}
      </View>
    )
  }
}
