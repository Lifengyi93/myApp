import { Component } from 'react'
import { View } from '@tarojs/components'
import Market from './market'
import HotZone from './hotZone'
import HotTabs from './hotTabs'
import './index.scss'

export default class Local extends Component {

  render () {
    return (
      <View className='index'>
        <Market />
        <HotZone title='摄影胜地' />
        <HotTabs />
      </View>
    )
  }
}