import * as parts from './parts';

export const Test = () => ({
  id: 'Test',
  name: 'Test',
  options: {
    statusBar: parts.statusBar(),
    topBar: parts.topBar(),
    animations: {
      push: parts.animationPush()
    }
  }
});

export const Bams = () => ({
  component: {
    id: 'Bams',
    name: 'Bams',
    options: {
      statusBar: parts.statusBar(),
      topBar: parts.topBar(),
      animations: {
        push: parts.animationPush()
      }
    }
  }
});

export const Data = () => ({
  id: 'Data',
  name: 'Data',
  options: {
    statusBar: parts.statusBar(),
    topBar: parts.topBar(),
    animations: {
      push: parts.animationPush()
    }
  }
});