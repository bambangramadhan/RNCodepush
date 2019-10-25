import * as common from './common';
import * as views from './views';
import * as parts from './parts';

const Data = () => ({
  root: {
    component: views.Data()
  }
})

const Test = () => ({
  root: {
    stack: {
      children: [{
        component: views.Test()
      }],
      options: {
        layout: parts.layoutOrientation
      }
    },
  },
})

const Bams = () => ({
  root: {
    stack: {
      children: [
        views.akun()
      ],
      options: {
        layout: parts.layoutOrientation
      }
    },
  },
})

const main = () => ({
  root: {
    bottomTabs: {
      children: [
        Bams()
      ]
    }
  }
})

export {
  main,
  views,
  common,
  Test,
  Bams,
  Data
}