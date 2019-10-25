export const animationPop = () => ({
  enabled: true,
  // waitForRender: true,
  content: {
    x: {
      from: 0,
      to: 1000,
      duration: 300,
      interpolation: 'decelerate',
    }
  }
});

export const animationPush = () => ({
  enabled: true,
  // waitForRender: true,
  content: {
    x: {
      from: 1000,
      to: 0,
      duration: 300,
      interpolation: 'decelerate',
    }
  }
});

export const animationSetRoot = () => ({
  enable: true,
  waitForRender: true,
  x: {
    from: 1000,
    to: 0,
    duration: 300,
    interpolation: 'decelerate',
  },
  alpha: {
    from: 0,
    to: 1,
    duration: 500,
    interpolation: 'accelerate',
  }
})

export const statusBar = () => ({
  backgroundColor: 'transparent',
  visible: true,
  style: 'dark',
  drawBehind: true
})

export const topBar = () => ({
  visible: false,
  drawBehind: true
})

export const layoutOrientation = {
  orientation: ['portrait']
}

export const bottomTab = (text, icon, testID) => ({
  text: text,
  icon: icon,
  iconColor: '#C3B9CE',
  selectedIconColor: '#000000',
  textColor: '#C3B9CE',
  selectedTextColor: '#000000',
  testID: testID,
  titleDisplayMode: 'alwaysShow',
  fontSize: 12
})

export const bottomTabs = () => ({
  elevation: 8,
  titleDisplayMode: 'alwaysShow'
})

export const bottomTabsHidden = () => ({
  visible: false,
  drawBehind: true,
  animate: true
})