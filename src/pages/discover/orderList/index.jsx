import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtCard,AtButton } from "taro-ui"
import './index.scss'

const data = [
  {note:'人数:1',extra:'2023-03-05',title:'婚礼跟拍',thumb:'https://threejs.org/files/projects/futurecube.png',content:'新人梳妆晨袍、送亲、结亲、婚宴、仪式全程跟拍',address:'武汉市光谷希尔顿酒店'},
  {note:'人数:2',extra:'2023-03-05',title:'领证跟拍',thumb:'https://threejs.org/files/projects/blobmixer.png',content:'新人梳妆晨袍、送亲、结亲、婚宴、仪式全程跟拍',address:'武汉市东湖高新区政务中心'},
  {note:'人数:3',extra:'2023-03-05',title:'婚礼跟拍',thumb:'https://threejs.org/files/projects/madbox.png',content:'新人梳妆晨袍、送亲、结亲、婚宴、仪式全程跟拍',address:'武汉市洪山区东湖宾馆'},
  {note:'人数:4',extra:'2023-03-05',title:'全家福',thumb:'https://threejs.org/files/projects/bruno-simon.png',content:'新人梳妆晨袍、送亲、结亲、婚宴、仪式全程跟拍',address:'武汉大学'},
  {note:'人数:5',extra:'2023-03-05',title:'毕业照',thumb:'https://threejs.org/files/projects/futurecube.png',content:'新人梳妆晨袍、送亲、结亲、婚宴、仪式全程跟拍',address:'武汉市洪山区关东街道'},
  {note:'人数:4',extra:'2023-03-05',title:'情侣写真',thumb:'https://threejs.org/files/projects/chartogne-taillet.png',content:'新人梳妆晨袍、送亲、结亲、婚宴、仪式全程跟拍',address:'武汉市光谷希尔顿酒店'},
  {note:'人数:3',extra:'2023-03-05',title:'婚礼跟拍',thumb:'https://threejs.org/files/projects/larsberg.png',content:'新人梳妆晨袍、送亲、结亲、婚宴、仪式全程跟拍',address:'武汉市光谷希尔顿酒店'},
  {note:'人数:2',extra:'2023-03-05',title:'婚礼跟拍',thumb:'https://threejs.org/files/projects/aframe.png',content:'新人梳妆晨袍、送亲、结亲、婚宴、仪式全程跟拍',address:'武汉市光谷希尔顿酒店'}
]

export default class Orderlist extends Component {
  renderList = ()=>{
    return data.map((item,index)=>{
      return (
        <AtCard
          key={item.note+index}
          note={item.note}
          extra={item.extra}
          title={item.title}
          thumb={item.thumb}
          className='order-list-card'
        >
          <View>{item.content}</View>
          <View className='dot'>{item.address}</View>
          <AtButton className='deal-btn' type='primary' size='small' circle full={false}>去接单</AtButton>
        </AtCard>
      )
    })
  }
  render () {
    return (
      <View className='order-list'>
        {this.renderList()}
      </View>
    )
  }
}