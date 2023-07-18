import { Component } from 'react'
import {View, Image,Text } from '@tarojs/components'
import empty from '../../image/nodata.svg'
import './index.scss'

export default class Empty extends Component {
  constructor(props){
    super(props)
  }
  render () {
    const {size='small'} = this.props
    return (
      <View className='empty'>
        <Image src={empty} mode='widthFix' className={size}></Image>
        <Text className='empty-text'>暂无数据</Text>
      </View>
    )
  }
}
