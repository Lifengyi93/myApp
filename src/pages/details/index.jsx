import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View,Text,Swiper,Image,SwiperItem } from '@tarojs/components'
import { AtTabs, AtTabsPane,AtIcon,AtModal } from 'taro-ui'
import ComInput from './Input'
import Empty from '../../components/Empty'
import './index.scss'

export default class details extends Component {

  state = {
    current: 0,
    add:false,
    showModal:false,
    comments:[]
  }

  handleClick = value => {
    this.setState({
      current: value
    })
  }

  handleAdd = () =>{
    const {add} = this.state
    if(!add){ //
      this.setState({add:true})
    }else{
      this.setState({showModal:true})
    }
  }

  handleConfirm = () =>{
    this.setState({add:false})
  }

  handleUserCenter = () => {
    Taro.navigateTo({
      url: '/pages/userCenter/index',
    })
  }

  render () {
    const tabList = [{ title: '评价' }, { title: '参数' }, { title: '相关' }]
    const {current,add,showModal,comments} = this.state
    return (
      <View>
        <View className='at-info'>
          <Image className='user-pic' src='https://threejs.org/files/projects/futurecube.png' onClick={this.handleUserCenter} />
          <View className='add-focus' onClick={this.handleAdd} >
            {add?null:<AtIcon value='add' size='10' color='#fff' className='add' ></AtIcon>}
            <Text className='like-val'>{add?'已关注':'关注'}</Text>
          </View>
          <AtModal
            isOpened={showModal}
            cancelText='取消'
            confirmText='确认'
            onClose={this.handleClose}
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
            content='确认取消关注'
          />
        </View>
        <Swiper className='test-h' indicatorColor='#999' indicatorActiveColor='#333' circular indicatorDots >
          <SwiperItem>
            <Image src='https://gd-hbimg.huaban.com/daa3bd1f47a8b8b520f934e423511179d61248216c364-9bcrM2' className='goods-img' mode='widthFix' />
          </SwiperItem>
          <SwiperItem>
            <Image src='https://gd-hbimg.huaban.com/692615cf2062afbfa7556238929217d52b9497c638e80-aPSQ9T' className='goods-img' mode='widthFix' />
          </SwiperItem>
          <SwiperItem>
            <Image src='https://gd-hbimg.huaban.com/ac2506ff5640d79b106d95d31d92a6f1945e983a95d6e1-0bgobm' className='goods-img' mode='widthFix' />
          </SwiperItem>
        </Swiper>
        <View className='at-article'>
          <View className='at-article__h3'>如果已经全局引入了 taro-ui 的样式文件，则无需再次引入</View>
          <View className='at-article__p'>
            😄这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。
          </View>
          <View className='at-article__p'>
            😄这是文本段落。这是文本段落。这是一段带emoji表情的文字。
          </View>
          <View className='at-article__info'>
            编辑于 11-02
          </View>
        </View>
        
        <AtTabs current={current} tabList={tabList} onClick={this.handleClick}>
          <AtTabsPane current={current} index={0} >
            <View style='padding: 100px 50px;text-align: center;' >
              <Empty size='normal'></Empty>
            </View>  
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>暂无数据</View>
          </AtTabsPane>
          <AtTabsPane current={current} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>暂无数据</View>
          </AtTabsPane>
        </AtTabs>
        {current===0?<ComInput></ComInput>:null}
      </View>
    )
  }
}
