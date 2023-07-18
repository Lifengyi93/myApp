import { Component } from 'react'
import { View,Text,Image } from '@tarojs/components'
// import Empty from '../../components/Empty'
import { AtIcon,AtTabs, AtTabsPane } from 'taro-ui'
import male from '../../image/male.svg'
import './index.scss'

const tabList = [
  { title: '作品' }, 
  { title: '订单' }, 
]

export default class Index extends Component {

  state={
    current:0
  }
  
  handleClick = (value) =>{
    this.setState({current:value})
  }
  render(){
    const {current} = this.state
    return (
      <View className='userCenter'>
        <View className='user-info'>
          <View className='info'>
            <Image className='user-pic' src='https://threejs.org/files/projects/futurecube.png' />
            <View className='account'>
              <Text className='name'>Pattonli</Text>
              <View className='account-id'>账  号：<Text>xt2168361921</Text></View>
              <View className='gender-location'>
                <Image className='gender' src={male}></Image>
                <Text className='location'>湖北·武汉</Text>
              </View>
            </View>
            <View className='setting'>
              <AtIcon value='settings' size='20' color='#FFF'></AtIcon>
            </View>
          </View>
          <View className='sign'>
            <Text>时间，带不走真正的朋友；岁月，留不住虚幻的拥有...</Text>
          </View>
          <View className='bottom'>
            <View className='achiaeve'>
              <View><View>关注</View><Text>20</Text></View>
              <View><View>粉丝</View><Text>200</Text></View>
              <View><View>获赞</View><Text>392870</Text></View>
            </View>
            <View className='follow'>
              <Text className='message'>
                <AtIcon value='message' size='14' color='#FFF'></AtIcon>
              </Text>
              <Text className='add'>关注</Text>
            </View>
          </View>
        </View>
        <View className='store'>
          <AtTabs 
            current={current}
            tabList={tabList}
            onClick={this.handleClick}
            animated={false}
          >
            <AtTabsPane current={current} index={0} >
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
            </AtTabsPane>
            <AtTabsPane current={current} index={1}>
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
            </AtTabsPane>
          </AtTabs>
        </View>
      </View>
    )
  }
}