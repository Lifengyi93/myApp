import { Component } from 'react'
import { View,Image,Text } from '@tarojs/components'
import './index.scss'

const data = [
  {id:1,star:'4.5',name:'东湖·别院',visited:'24300',img:'https://gd-hbimg.huaban.com/daa3bd1f47a8b8b520f934e423511179d61248216c364-9bcrM2'},
  {id:2,star:'4.5',name:'东湖人家 weeding house',visited:'24300',img:'https://gd-hbimg.huaban.com/87fe29c4884d5c668b3feb340537d7b45140a4182ddd5-sCs1TM_fw658webp'},
  {id:3,star:'4.5',name:'江夏藏龙岛湿地公园',visited:'24300',img:'https://gd-hbimg.huaban.com/8558f8a87410d932a0f637b4df03725dd7fbc73332b20-5r1nTz_fw1200'},
  {id:4,star:'4.5',name:'武汉市东湖高新区普罗旺斯迎宾中心',visited:'24300',img:'https://gd-hbimg.huaban.com/4e847da2a1bedda4d9851393cbaed806daec58a82bfec-BFzOcI_fw1200'}
]

export default class hotZone extends Component {
  renderList =()=>{
    return data.map(item=>{
      return (
        <View className='zone-list-item' key={item.id}>
          <Image className='zone-list-item-img' src={item.img} />
          <View className='zone-list-item-info'>
            <View className='name'>{item.name}</View>
            <View className='visited'>
              <Text className='visited-text'>{item.visited}人最近去过</Text>
              <View className='visited-star'>{item.star}</View>
            </View>
          </View>
        </View>
      )
    })
  }
  render () {
    const {title} = this.props
    return (
      <View className='zone'>
        <View className='zone-title'>{title}</View>
        <View className='zone-list'>
          {this.renderList()}
        </View>
      </View>
    )
  }
}