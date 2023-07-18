import Taro, { usePullDownRefresh, useReachBottom } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import { View, Text,Image } from '@tarojs/components'
import {goodsList,dataList} from "./config";
import './index.scss'

const ImageLoadList = []

const Recommend = ()=> {

  const [allGoods,setAllGoods]=useState(goodsList);
  const [imgWidth, setImgWidth] = useState(0);
  const [goodsLeft, setGoodsLeft] = useState([]);
  const [goodsRight, setGoodsRight] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    // console.log('goodsList',goodsList)
    Taro.getSystemInfo({
      success: (res => {
        let ww = res.windowWidth;
        let width = ww * 0.5;
        setImgWidth(width)
      })
    })
  })

  const onImageLoad = (e) => {
    let oImgW = e.detail.width;         //图片原始宽度
    let oImgH = e.detail.height;        //图片原始高度
    let scale = imgWidth / oImgW;        //比例计算
    let imgHeight = oImgH * scale;      //自适应高度

    //初始化ImageLoadList数据
    ImageLoadList.push({
      id: parseInt(e.currentTarget.id),
      height: imgHeight,
    })
    
    if(ImageLoadList.length===allGoods.length){
      ImageLoadList.sort((a,b)=>{return a.id-b.id})
      pushImageArr(ImageLoadList)
    }
  }

  const renderHeight = (num)=>{
    const obj = allGoods.find(item=>item.id===num)
    const height = obj.title.length>12?60:50
    return height
  }

  const pushImageArr = (goods)=>{
    let left = goods[0].height + renderHeight(0) //左边的高度
    let right = goods[1].height + renderHeight(1)//右边的高度
    let leftArr = [0]
    let rightArr = [1]
    // console.log(left,1,'加到左边',left)
    // console.log(right,2,'加到右边',right)
    goods.forEach((item,index)=>{
      if(index>1){
        if(left>right){ //加到右边
          right+=(item.height + renderHeight(index))
          rightArr.push(index)
          // console.log(right,index+1,'加到右边',goods[index].height)
        }else{
          left+=(item.height  + renderHeight(index))
          leftArr.push(index)
          // console.log(left,index+1,'加到左边',goods[index].height)
        }
      }
    })

    const leftGoods =[]
    const rightGoods =[]
    leftArr.map(item=>{
      allGoods.forEach(list=>{
        if(list.id===item){
          leftGoods.push(list)
        }
      })
    })

    rightArr.map(item=>{
      allGoods.forEach(list=>{
        if(list.id===item){
          rightGoods.push(list)
        }
      })
    })

    setGoodsLeft(leftGoods)
    setGoodsRight(rightGoods)
  }

  const handleDetails = ()=>{
    Taro.navigateTo({
      url: '/pages/details/index',
    })
  }

  const handleLike = (e)=>{
    e.stopPropagation()
  }

   // 下拉刷新
   usePullDownRefresh(() => {
    console.log('下拉刷新')
  });

  // 上拉加载
  useReachBottom(() => {
    // console.log('上拉加载')
    setLoading(true)
    // Taro.showLoading({
    //   title: 'loading....',
    //   mask: true
    // })

    setTimeout(()=>{
      // Taro.hideLoading();
      setLoading(false)
      const num = count+1
      setCount(num)
      dataList(num).forEach(item=>{
        allGoods.push(item)
      })
      setAllGoods([...allGoods])
    },500)
    // getLiveArticleList(tabs, page + 1);
  });
  
  return (
    <View className='goods'>
      <View style={{display: 'none'}}>
        {
          allGoods.map((item, index) => {
            return (
              <Image key={item+index} onLoad={onImageLoad} id={index} src={item.image} />
            )
          })
        }
      </View>
      <View className='goods-container'>
          <View className='goods-left'>
            {
              goodsLeft.map((item, index) => {
                return (
                  <View className='goods-item' key={item+index} onClick={handleDetails} >
                    <Image src={item.image} className='goods-img' style={item.imgStyle} id={index} mode='widthFix' />
                    <View className='goods-name'>
                      <View className='title'>{item.title}</View>
                      <View className='at-info'>
                        <Image className='user-pic' src='https://threejs.org/files/projects/stickittothestickman.png' />
                        <View className='at-icon at-icon-heart' onClick={(e)=>handleLike(e)}>
                          <Text className='like-val'>{item.value}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )
              })
            }
          </View>
          <View className='goods-right'>
            {
              goodsRight.map((item, index) => {
                return (
                  <View className='goods-item' key={item+index} onClick={handleDetails}>
                    <Image src={item.image} className='goods-img' style={item.imgStyle} id={index} mode='widthFix' />
                    <View className='goods-name'>
                      <View className='title'>{item.title}</View>
                      <View className='at-info'>
                        <Image className='user-pic' src='https://threejs.org/files/projects/futurecube.png' />
                        <View className='at-icon at-icon-heart'>
                          <Text className='like-val'>{item.value*10}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )
              })
            }
          </View>
      </View>
      <View className='loading'>{loading ? '加载中...' : ''}</View>
    </View>
  )
}


export default Recommend