import { Component } from 'react'
import { AtTag,AtAvatar  } from 'taro-ui'
import { View,Image,Text} from '@tarojs/components'
import './index.scss'


export default class Local extends Component {

  list = [
    {id:'1',title:'love&love',img:'https://threejs.org/files/projects/coastalworld.png',num:1409},
    {id:'2',title:'linZhi',img:'https://threejs.org/files/projects/handswtf.png',num:271},
    {id:'3',title:'郑云',img:'https://threejs.org/files/projects/webgi-jewelry.png',num:32},
    {id:'4',title:'小七',img:'https://threejs.org/files/projects/madbox.png',num:48},
    {id:'5',title:'小七',img:'https://threejs.org/files/projects/anumberfromtheghost.png',num:48},
    {id:'6',title:'小七',img:'https://threejs.org/files/projects/mothersday.png',num:48},
  ]

  renderList = ()=>{
    return this.list.map(item=>{
       return (
         <View className='card' key={item.id}>
           <Image className='card-img' src={item.img} mode='aspectFill' />
           <View className='card-info'>
             <Image className='card-info-img' src={item.img} mode='aspectFill' />
             <AtAvatar className='card-info-avatar' circle image={item.img} size='small'></AtAvatar>
             <Text className='card-info-text'>{item.title}{item.num}</Text>
           </View>
         </View>
       )
     })
   }

  render () {
    return (
      <View className='tabs'>
        <View className='tabs-tag'>
          <AtTag className='tags' name='tag-1' type='primary' circle > 摄影师 </AtTag>
          <AtTag className='tags' name='tag-2' type='primary' circle > 模 特 </AtTag>
          <AtTag className='tags' name='tag-3' type='primary' circle > 设计师 </AtTag>
        </View>
        <View className='tabs-card'>
          {this.renderList()}
        </View>
      </View>
    )
  }
}