import schedule from './../views/schedule'
import classinfo from './../views/schedule/classInfo'
export default {
  path: '/schedule',
  name: 'schedule',
  component: schedule,
  children: [{
    path: 'classinfo',
    name: 'scheduleClassinfo',
    component: classinfo
  }]
}
