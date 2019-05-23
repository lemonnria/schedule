<template>
  <div>
    <div class="header-action-bar__container">
      <div type="primary"
        class="el-icon-close"></div>
      <div class="my-schedule-text">个人课表</div>
      <div type="primary"
        class="el-icon-more">
      </div>
    </div>
    <div class="header-action-bar-semester">
      <div>18-19学年上学期-第五周</div>
      <div> <img class="header-action-bar-arrow-size"
          src="./../assets/arrow-down.svg"
          @click="show=!show" /></div>
      <!-- <el-select v-model="value"
        placeholder="18-19学年上学期">
        <el-option v-for="item in semesterSelect"
          :key="item.id"
          :label="item.label"
          :value="item.value"></el-option>
      </el-select>
      <el-select v-model="index"
        placeholder="第1周">
        <el-option v-for="index in 20"
          :value="index"
          :key="index">第{{ index }}周</el-option>
      </el-select> -->
    </div>
    <div class="header-action-bar-day__container">
      <ul class="header-action-bar-day__show">
        <li v-for="item in selectWeekList"
          :key="item.id"
          class="header-action-bar-day__week">
          <p>{{item.title}}</p>
        </li>
      </ul>
      <div>
      </div>
    </div>
    <div>
      <div class="side-bar-section">
        <div>
          <ul>
            <li v-for="index in 13"
              :key="index"
              class="side-bar-section__num">
              <p>{{index}}</p>
            </li>
          </ul>
          <div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="show"
      class="select-semeter-week__container">
      <div>
        <div class="select-bar">
          <div class="select-bar__cancel">取消</div>
          <div class="select-bar__confirm">确定</div>
        </div>
        <div>
          <div>
            <el-select v-model="value"
              placeholder="18-19学年上学期">
              <el-option v-for="item in semesterSelect"
                :key="item.id"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
          </div>
          -
          <div>
            <el-select v-model="index"
              placeholder="第1周">
              <el-option v-for="index in 20"
                :value="index"
                :key="index">第{{ index }}周</el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    month: {
      type: String
    }
  },
  data() {
    return {
      show: false,
      semesterSelect: [
        {
          id: 1,
          value: '选项1',
          label: '18-19学年上学期'
        },
        {
          id: 2,
          value: '选项2',
          label: '18-19学年下学期'
        },
        {
          id: 3,
          value: '选项3',
          label: '18-19学年暑假'
        }
      ],
      selectWeekList: [
        {
          id: '01',
          title: '周一'
        },
        {
          id: '02',
          title: '周二'
        },
        {
          id: '03',
          title: '周三'
        },
        {
          id: '04',
          title: '周四'
        },
        {
          id: '05',
          title: '周五'
        },
        {
          id: '06',
          title: '周六'
        },
        {
          id: '07',
          title: '周日'
        }
      ],
      courseList: [],
      noneSchedule: {
        icon: '/src/views/schedule/assets/icon-mobile-schedule-no-data.svg',
        title: '暂无课程'
      },
      colorList: [
        '#88AEFF',
        '#AB8FFD',
        '#FFC44F',
        '#BBDC02',
        '#FF9ED5',
        '#02DCA2',
        '#F0A882',
        '#88D4FF',
        '#E98FFD',
        '#FF9962',
        '#76DC02',
        '#FF9E9E',
        '#00D6DD',
        '#FF7979',
        '#6C98FF',
        '#FFBB7C',
        '#FF7B52',
        '#00DF8D',
        '#78BFFE',
        '#00C8FF',
        '#D389FD'
      ]
    }
  },
  created() {
    this.$store.dispatch('getdata')
  },
  computed: {
    data() {
      return this.$store.state.data
    }
  },
  methods: {}
}
</script>

<style scoped>
.select-bar__ {
  display: flex;
  flex-direction: row;
  height: 30px;
}
.select-bar__cancel {
  color: #78bffe;
  position: relative;
  margin-top: 3px;
  margin-left: -200px;
}
.select-bar__confirm {
  position: relative;
  margin-top: 0px;
  margin-left: -200px;
  color: #78bffe;
}
.side-bar-section__num {
  display: flex;
  justify-content: center;
  height: 100px;
  border-bottom: soild 2px black;
}
.select-semeter-week__container {
  position: fixed;
  margin-top: 550px;
  width: 414px;
  height: 186px;
  background-color: white;
  z-index: 990;
}
.header-action-bar-arrow-size {
  position: relative;
  width: 20px;
  height: 20px;
  margin-top: 5px;
}
.header-action-bar-day__week {
  margin-right: 7px;
  margin-left: 18.5px;
  font-size: 14px;
  margin-top: 15px;
  color: #3a82cc;
}
.header-action-bar-day__show {
  display: flex;
  list-style: none;
  margin-left: 30px;
}
.side-bar-section {
  position: fixed;
  margin-top: 172px;
  width: 40px;
  background-color: #f4f8f9;
  border-right: 1px solid #f2f2f3;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.header-action-bar-day__container {
  background-color: #f4f8f9;
  width: 414px;
  height: 50px;
  position: fixed;
  margin-top: 122px;
  border-bottom: 1px solid #f2f2f3;
  z-index: 50;
}
.header-action-bar__container {
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 414px;
  height: 72px;
  margin: 0px;
  padding: 0px;
  background-color: #4e77ac;
}
.el-icon-arrow-down {
  margin-top: 4px;
}
.header-action-bar-semester {
  position: fixed;
  display: flex;
  justify-content: center;
  width: 414px;
  height: 50px;
  top: 72px;
  justify-content: center;
  align-items: center;
}
.el-icon-close {
  color: white;
  font-size: 17px;
  margin-top: 40px;
  margin-left: 19px;
}
.el-icon-more {
  color: white;
  font-size: 20px;
  margin-top: 39px;
  margin-left: 240px;
}
.my-schedule-text {
  color: white;
  font-weight: 700;
  font-size: 19px;
  margin-top: 35px;
  margin-left: 10px;
}
</style>
