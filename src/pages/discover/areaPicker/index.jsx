import { Component } from 'react'
import { View, Picker} from '@tarojs/components'
// import { AtList, AtListItem } from 'taro-ui'
import address from './config'
import './index.scss'


export default class AreaPicker extends Component {

  state = {
    multiIndex: [0, 0, 0],
    addressMulti: [],
    selectArea: '请选择所在地区'
  }

  componentDidMount() {
    this.initAddress()
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      selectArea: nextProps.myAreas || '请选择所在地区'
    })
  }
  // 初始化城市JSON数据
  initAddress=()=> {
    let addressMulti = [];
    let addressJSON = address;

    // 第一纬度（省）
    let ArrayOne = [];
    for (let key in addressJSON) {
      ArrayOne.push(key);
    };
    addressMulti.push(ArrayOne);

    // 第二纬度（市）
    let ArrayTwo = [];
    for (let key in addressJSON[ArrayOne[0]]) {
      ArrayTwo.push(key);
    };
    addressMulti.push(ArrayTwo);

    // 第三纬度（区）
    let ArrayThree = addressJSON[ArrayOne[0]][ArrayTwo[0]];
    addressMulti.push(ArrayThree);

    this.setState({
      addressMulti: addressMulti
    });
  }
	
  // 最后选择的地址
  onChange=(e)=> {
  	// e 的值返回的是一个数组，列如：[0, 0, 0]
    const { addressMulti, multiIndex } = this.state
    this.setState({
      multiIndex: e.detail.value,
      selectArea: addressMulti[0][multiIndex[0]] + ' ' + addressMulti[1][multiIndex[1]] + ' ' + addressMulti[2][multiIndex[2]]
    });
    const myAreas = addressMulti[0][multiIndex[0]] + ' ' + addressMulti[1][multiIndex[1]] + ' ' + addressMulti[2][multiIndex[2]]
    // const myAreas1 = addressMulti[0][multiIndex[0]] 
    // const myAreas2 = addressMulti[1][multiIndex[1]] 
    // const myAreas3 = addressMulti[2][multiIndex[2]]
    // 调用父组件传参
    this.props.onSelectArea(myAreas)
  }

  getKeyList=(obj)=> {
    let keyList = [];
    if (obj) {
      for (let key in obj) {
        keyList.push(key);
      };
    };
    return keyList;
  }
  
  // 选择某个地址列表
  onColumnChange=(e)=> {

    let data = {
      addressMulti: this.state.addressMulti,
      multiIndex: this.state.multiIndex
    };
    // column 指的是列
    data.multiIndex[e.detail.column] = e.detail.value;
    let keyOne = null
    let keyTwo = null
    switch (e.detail.column) {
      case 0:
        // 计算第二纬度
        keyOne = data.addressMulti[0][data.multiIndex[0]];
        console.log('keyOne',keyOne)
        data.addressMulti[1] = this.getKeyList(address[keyOne]);
        // 计算第三纬度
        keyTwo = data.addressMulti[1][0];
        data.addressMulti[2] = address[keyOne][keyTwo];
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        // 计算第三纬度
        keyOne = data.addressMulti[0][data.multiIndex[0]];
        keyTwo = data.addressMulti[1][data.multiIndex[1]];
        data.addressMulti[2] = address[keyOne][keyTwo];
        data.multiIndex[2] = 0;
        break;
    }
    
    const {addressMulti} = data
    this.setState({addressMulti:[...addressMulti]});
    

  }
  
  render() {
    
    const { addressMulti, multiIndex, selectArea } = this.state
    console.log('addressMulti',addressMulti)

    return (
      <View className='container'>
        <Picker
          mode='multiSelector'
          onChange={this.onChange}
          onColumnChange={this.onColumnChange}
          value={multiIndex}
          range={addressMulti} 
        >
          <View className='picker'>
            {selectArea}
          </View>
        </Picker>
      </View>
    )
  }
}
