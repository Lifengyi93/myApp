import { Component } from 'react'
import { AtNavBar } from 'taro-ui'

export default class Index extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount () { }

  // componentDidMount () { }

  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }

  render () {
    console.log('props',this.props)
    const {title} = this.props
    return (
      <AtNavBar
        onClickRgIconSt={this.handleClick}
        onClickRgIconNd={this.handleClick}
        onClickLeftIcon={this.handleClick}
        color='#000'
        title={title}
        leftText='返回'
        // rightFirstIconType='bullet-list'
        // rightSecondIconType='user'
      />
    )
  }
}
