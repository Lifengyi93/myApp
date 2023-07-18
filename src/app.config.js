// eslint-disable-next-line no-undef
export default defineAppConfig({
  // "lazyCodeLoading":"requiredComponents",
  pages: [
    'pages/index/index',
    'pages/project/index',
    'pages/details/index',
    'pages/discover/index',
    'pages/publish/index',
    'pages/message/index',
    'pages/userCenter/index',
    'pages/chatRoom/index'
  ],
  tabBar:{
    color: '#666',
    selectedColor: '#ed6c00',
    backgroundColor: '#fafafa',
    borderStyle: 'black',
    custom: true,
    list:[
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'image/home.png',
        selectedIconPath: 'image/home_fill.png'
      },
      {
        pagePath: 'pages/discover/index',
        text: '发现',
        iconPath: 'image/discover.png',
        selectedIconPath: 'image/discover_fill.png'
      },
      {
        pagePath: 'pages/message/index',
        text: '消息',
        iconPath: 'image/community.png',
        selectedIconPath: 'image/community_fill.png'
      },
      {
        pagePath: 'pages/project/index',
        text: '我的',
        iconPath: 'image/my.png',
        selectedIconPath: 'image/my_fill.png'
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: true,
    onReachBottomDistance: 150,
    backgroundTextStyle: 'dark',
  }
})
