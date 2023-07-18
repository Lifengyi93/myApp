import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Follow from '../Follow'
import Recommend from './Recommend'
import Local from '../Local'
import './index.scss'

const tabList=[
  { title: '关注' },
  { title: '推荐' },
  { title: '本地' }
]

export default class Index extends Component {
  
  state = {
    centerHeight:'',
    current:1
  }

  pageCtx = Taro.getCurrentInstance().page

  componentDidShow () {
    const tabbar = Taro.getTabBar(this.pageCtx)
    tabbar?.setSelected(0)
    const info = Taro.getSystemInfoAsync()
    const { windowHeight} = info
    const tempHeight = (windowHeight - 150) + 'px'
    this.setState({
      centerHeight: tempHeight
    })
  }

  handleClick = (value)=>{
    console.log('value',value)
    this.setState({
      current: value
    })
  }

  render () {
    const {current,centerHeight} = this.state
    const scrollStyle = {
      marginTop:'50px',
      height: centerHeight,
      overflow: 'scroll'
    }
    return (
      <View className='tabs-container'>
        <AtTabs
          className='tabs-content'
          swipeable={false}
          animated={false}
          current={current}
          tabList={tabList}
          onClick={this.handleClick} 
        >
         <AtTabsPane current={current} index={0} >
          <View style={scrollStyle}>
            <Follow />
          </View>
        </AtTabsPane>
         <AtTabsPane current={current} index={1} ><Recommend /></AtTabsPane>
         <AtTabsPane current={current} index={2} ><Local /></AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
