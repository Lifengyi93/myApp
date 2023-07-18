import { Component } from 'react'
import { View, Image,Text } from '@tarojs/components'
import AreaPicker from '../areaPicker'
import location from '../../../image/location.svg'
import filter from '../../../image/filter.svg'
import './index.scss'

export default class PhotoAppointment extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      myAreas: '请选择',   // 所在地区
    }
  }

  // 地址的选择
  selectArea=(myAreas)=> {
    this.setState({
      myAreas: myAreas,
    })
  }

  render () {
    const {  myAreas } = this.state
    return (
      <View className='appointment'>
        <Image src={location} className='appointment-img' />
        <AreaPicker myAreas={myAreas} onSelectArea={this.selectArea} />
        <View className='filter'>
          <Image src={filter} className='filter-img' />
          <Text>筛选</Text>
        </View>
      </View>
    )
  }
}