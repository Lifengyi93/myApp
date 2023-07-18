import { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import ChatInput from '../../components/ChatInput'
import './index.scss'

const content = `2月21日，在萍聚工作室，朱国萍与来自上海崇明区东平镇的社区干部们交流。新华社记者 刘颖 摄

66岁的朱国萍爱讲故事，会讲故事。9年前，她把社区里的故事带到了全国两会上，讲给了总书记。

那是2014年3月5日，人民大会堂上海厅。

这个时刻，上海团人大代表都很期盼。习近平总书记连续两届都是上海团代表，每年都会来团里参加审议。`
const path = 'https://gd-hbimg.huaban.com/ac2506ff5640d79b106d95d31d92a6f1945e983a95d6e1-0bgobm'

const messagelist =[
  {name:'left',message:'你好!',time:'27-01-2023',self:false,pic:'https://threejs.org/files/projects/stickittothestickman.png'},
  {name:'left',message:'最近如何',time:'27-01-2023',self:false,pic:'https://threejs.org/files/projects/stickittothestickman.png'},
  {name:'right',message:'还不错',time:'27-01-2023',self:true,pic:'https://threejs.org/files/projects/futurecube.png'},
  {name:'right',message:content,time:'27-01-2023',self:true,pic:'https://threejs.org/files/projects/futurecube.png'},
  {name:'left',message:path,type:'image',time:'27-01-2023',self:false,pic:'https://threejs.org/files/projects/stickittothestickman.png'},
  {name:'right',message:'😄😄哈哈',time:'27-01-2023',self:true,pic:'https://threejs.org/files/projects/futurecube.png'},

]

export default class Index extends Component {

  renderMessage = ()=>{
   return messagelist.map((item,index)=>{
      return (
        <>
        {!item.self?
          <View className='msg-list-left' key={item.name+index}>
            <Image className='msg-list-left-img' src={item.pic}></Image>
            {
              item.type!=='image'?
              <View className='msg-list-left-msg'>
                <Text>{item.message}</Text>
              </View>:
              <View className='img-container'>
                <Image src={item.message} className='img' />
              </View>
            }
          </View>:
          <View className='msg-list-right' key={item.name+index}>
             <View className='msg-list-right-msg'>
              <Text>{item.message}</Text>
            </View>
            <Image className='msg-list-right-img' src={item.pic}></Image>
          </View>
        }
        </>
      )
    })
  }

  render () {
    return (
      <View className='chat-type'>
        {this.renderMessage()}
        <ChatInput/>
      </View>
    )
  }
}