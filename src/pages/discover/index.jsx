import {useMemo,useState} from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { View,Text } from '@tarojs/components'
import PhotoAppointment from './photoAppointment'
import Orderlist from './orderList'
import Empty from '../../components/Empty'
import './index.scss'

export default function Index() {

  const tabList = [
    { title: '摄影订单' }, 
    { title: '约拍订单' }, 
  ]

  const page = useMemo(() => Taro.getCurrentInstance().page, [])

  const [current,setCurrent] = useState(0)

  useDidShow(() => {
    const tabbar = Taro.getTabBar(page)
    tabbar?.setSelected(1)
  })

  const handleClick = (value) =>{
    setCurrent(value)
  }
  
  return (
    <View className='store'>
      <AtTabs 
        current={current}
        tabList={tabList}
        onClick={handleClick}
        className='store-tabs'
      >
        <AtTabsPane current={current} index={0} >
          <PhotoAppointment />
          <Orderlist />
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
         <Empty size='normal' />
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}
