<template>
  <v-container class="parent">
    <div class="hello">
      <h2>{{ msg }}</h2>
      <span>{{ updateDate }}</span>
      <div class="my-2">
        <v-btn color="green" style="color:white" @click="jump">官网</v-btn>
      </div>
    </div>
    <div class="content" style="margin: 30px 0 0 0">
      <v-tabs v-model="tab" grow>
        <v-tab v-for="item in items" :key="item.tab">{{ item.content }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item key="One">
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="(item,i) in weekdays" :key="i">
              <v-expansion-panel-header>{{item.route}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table fixed-header height="300px">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-center">{{item.location.name}}</th>
                        <th class="text-center">{{item.location.calories}}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item2 in item.desserts" :key="item2.name">
                        <td class="text-center">{{ item2.name }}</td>
                        <td class="text-center">{{ item2.calories }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-tab-item>
        <v-tab-item key="Two">
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="(item,i) in weekdend" :key="i">
              <v-expansion-panel-header>{{item.route}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table fixed-header height="300px">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-center">{{item.location.name}}</th>
                        <th class="text-center">{{item.location.calories}}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item2 in item.desserts" :key="item2.name">
                        <td class="text-center">{{ item2.name }}</td>
                        <td class="text-center">{{ item2.calories }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      tab: null,
      items: [
        { tab: "One", content: "工作日" },
        { tab: "Two", content: "周末" }
      ],
      msg: "复旦大学校车时刻表",
      updateDate: "更新于 2020年5月30日",
      weekdays: [
        {
          route: "邯郸 ⇆ 江湾",
          desserts: [
            {
              name: "",
              calories: "7:10"
            },
            {
              name: "",
              calories: "7:20"
            },
            {
              name: "7:30",
              calories: "7:30"
            },
            {
              name: "7:40",
              calories: "7:40"
            },
            {
              name: "",
              calories: "7:50"
            },
            {
              name: "8:00",
              calories: "8:00"
            },
            {
              name: "8:15",
              calories: "8:15"
            },
            {
              name: "8:30(2辆)",
              calories: "8:30"
            },
            {
              name: "",
              calories: "8:45"
            },
            {
              name: "9:00",
              calories: "9:00(2辆)"
            },
            {
              name: "",
              calories: "9:15"
            },
            {
              name: "9:30",
              calories: "9:30"
            },
            {
              name: "10:00",
              calories: "10:00"
            },
            {
              name: "10:20",
              calories: "10:30"
            },
            {
              name: "11:00",
              calories: ""
            },
            {
              name: "",
              calories: "11:10"
            },
            {
              name: "11:30",
              calories: "11:40"
            },
            {
              name: "11:45",
              calories: ""
            },
            {
              name: "12:00",
              calories: "12:00"
            },
            {
              name: "",
              calories: "12:15"
            },
            {
              name: "12:30",
              calories: "12:30"
            },
            {
              name: "",
              calories: "12:40"
            },
            {
              name: "13:00",
              calories: "13:00"
            },
            {
              name: "13:30",
              calories: "13:30"
            },
            {
              name: "14:00",
              calories: "14:00"
            },
            {
              name: "14:30",
              calories: ""
            },
            {
              name: "15:00",
              calories: "15:00(2辆)"
            },
            {
              name: "",
              calories: "15:15"
            },
            {
              name: "15:30",
              calories: "15:30"
            },
            {
              name: "16:00",
              calories: "16:00"
            },
            {
              name: "16:15",
              calories: ""
            },
            {
              name: "16:20",
              calories: ""
            },
            {
              name: "16:30",
              calories: "16:30"
            },
            {
              name: "",
              calories: "16:55"
            },
            {
              name: "17:00",
              calories: "17:00"
            },
            {
              name: "17:15",
              calories: "17:10"
            },
            {
              name: "17:25",
              calories: ""
            },
            {
              name: "17:35",
              calories: "17:30"
            },
            {
              name: "17:45",
              calories: ""
            },
            {
              name: "18:00",
              calories: "18:00(2辆)"
            },
            {
              name: "18:30",
              calories: ""
            },
            {
              name: "",
              calories: "19:00"
            },
            {
              name: "20:00",
              calories: "20:00"
            },
            {
              name: "20:20",
              calories: ""
            },
            {
              name: "20:30",
              calories: "20:30"
            },
            {
              name: "20:50",
              calories: ""
            },
            {
              name: "21:00",
              calories: "21:00"
            },
            {
              name: "21:20",
              calories: "21:20"
            },
            {
              name: "21:40",
              calories: "21:45"
            },
            {
              name: "22:00",
              calories: ""
            },
            {
              name: "22:15",
              calories: "22:10"
            },
            {
              name: "22:30",
              calories: ""
            }
          ],
          location: {
            name: "理科图书馆东侧",
            calories: "校区宣传栏"
          }
        },
        {
          route: "邯郸 ⇆ 枫林",
          desserts: [
            {
              name: "6:55",
              calories: ""
            },
            {
              name: "7:10",
              calories: "7:10"
            },
            {
              name: "",
              calories: "7:20"
            },
            {
              name: "8:15",
              calories: "8:15"
            },
            {
              name: "9:15",
              calories: "9:15"
            },
            {
              name: "10:15",
              calories: ""
            },
            {
              name: "11:00",
              calories: "11:00"
            },
            {
              name: "",
              calories: "11:45"
            },
            {
              name: "",
              calories: "12:15"
            },
            {
              name: "12:30",
              calories: ""
            },
            {
              name: "13:00",
              calories: "13:00"
            },
            {
              name: "14:00",
              calories: "14:00"
            },
            {
              name: "",
              calories: "14:30"
            },
            {
              name: "15:30",
              calories: "15:30"
            },
            {
              name: "16:00",
              calories: "16:00"
            },
            {
              name: "16:55",
              calories: "16:55"
            },
            {
              name: "17:10",
              calories: "17:10"
            },
            {
              name: "",
              calories: "17:25"
            },
            {
              name: "18:00",
              calories: "18:20"
            },
            {
              name: "19:30",
              calories: ""
            },
            {
              name: "20:20(2辆)",
              calories: "20:20"
            },
            {
              name: "",
              calories: "21:15"
            },
            {
              name: "21:25(2辆)",
              calories: ""
            },
            {
              name: "",
              calories: "21:50"
            }
          ],
          location: {
            name: "老化学楼东侧",
            calories: "西苑(近8号楼)"
          }
        },
        {
          route: "邯郸 ⇆ 张江",
          desserts: [
            {
              name: "7:10",
              calories: "7:00"
            },
            {
              name: "",
              calories: "7:15"
            },
            {
              name: "7:40",
              calories: ""
            },
            {
              name: "8:00",
              calories: "8:00"
            },
            {
              name: "8:30",
              calories: ""
            },
            {
              name: "",
              calories: "8:40"
            },
            {
              name: "9:00",
              calories: "9:00"
            },
            {
              name: "10:00",
              calories: "10:00"
            },
            {
              name: "11:50",
              calories: "11:50(2辆)"
            },
            {
              name: "",
              calories: "12:15"
            },
            {
              name: "12:30",
              calories: ""
            },
            {
              name: "",
              calories: "12:40"
            },
            {
              name: "12:45",
              calories: ""
            },
            {
              name: "14:30",
              calories: "14:15"
            },
            {
              name: "",
              calories: "15:20"
            },
            {
              name: "15:30",
              calories: ""
            },
            {
              name: "",
              calories: "16:00"
            },
            {
              name: "16:15",
              calories: "16:10"
            },
            {
              name: "",
              calories: "16:20"
            },
            {
              name: "",
              calories: "16:40"
            },
            {
              name: "",
              calories: "17:00"
            },
            {
              name: "17:20(2辆)",
              calories: "17:20"
            },
            {
              name: "18:30",
              calories: "18:30"
            },
            {
              name: "20:20(3辆)",
              calories: ""
            },
            {
              name: "20:30",
              calories: ""
            },
            {
              name: "21:00",
              calories: ""
            },
            {
              name: "21:20(2辆）",
              calories: "21:10"
            }
          ],
          location: {
            name: "理科图书馆东侧",
            calories: "I期图书馆西侧"
          }
        },
        {
          route: "枫林 ⇆ 张江",
          desserts: [
            {
              name: "西苑(近8号楼)",
              calories: "II期1号门卫室东侧"
            }
          ],
          location: {
            name: "西苑(近8号楼)",
            calories: "II期1号门卫室东侧"
          }
        },
        {
          route: "上科大 ⇆ 张江",
          desserts: [
            {
              name: "学生宿舍区内",
              calories: "I期图书馆西侧"
            }
          ],
          location: {
            name: "学生宿舍区内",
            calories: "I期图书馆西侧"
          }
        }
      ],
      weekdend: [
        {
          route: "邯郸 ⇆ 江湾",
          desserts: [
            {
              name: "",
              calories: "7:40"
            },
            {
              name: "",
              calories: "8:00"
            },
            {
              name: "8:20",
              calories: "8:20"
            },
            {
              name: "8:40",
              calories: "8:40"
            },
            {
              name: "9:00",
              calories: "9:00"
            },
            {
              name: "9:20",
              calories: "9:20"
            },
            {
              name: "9:40",
              calories: "9:40"
            },
            {
              name: "",
              calories: "10:20"
            },
            {
              name: "17:00(2辆)",
              calories: ""
            },
            {
              name: "",
              calories: "17:30(2辆)"
            },
            {
              name: "20:15",
              calories: ""
            },
            {
              name: "",
              calories: "20:40"
            },
            {
              name: "21:00",
              calories: ""
            },
            {
              name: "",
              calories: "21:20"
            },
            {
              name: "21:45",
              calories: ""
            },
            {
              name: "",
              calories: "22:10"
            },
            {
              name: "22:30",
              calories: ""
            },
          ],
          location: {
            name: "理科图书馆东侧",
            calories: "校区宣传栏"
          }
        },
        {
          route: "邯郸 ⇆ 枫林",
          desserts: [
            {
              name: "8:00",
              calories: ""
            },
            {
              name: "",
              calories: "9:00"
            },
            {
              name: "16:30",
              calories: ""
            },
            {
              name: "",
              calories: "17:30"
            },
          ],
          location: {
            name: "老化学楼东侧",
            calories: "西苑(近8号楼)"
          }
        },
        {
          route: "邯郸 ⇆ 张江",
          desserts: [
            {
              name: "8:30",
              calories: ""
            },
            {
              name: "",
              calories: "9:20"
            },
            {
              name: "16:30",
              calories: ""
            },
            {
              name: "",
              calories: "17:30"
            }
          ],
          location: {
            name: "理科图书馆东侧",
            calories: "I期图书馆西侧"
          }
        },
        {
          route: "上科大 ⇆ 张江",
          desserts: [
            {
              name: "学生宿舍区内",
              calories: "I期图书馆西侧"
            }
          ],
          location: {
            name: "学生宿舍区内",
            calories: "I期图书馆西侧"
          }
        }
      ]
    };
  },
  methods: {
    jump() {
      //window.open('https://www.baidu.com')     // 在新标签页打开
      window.location.href =
        "http://www.xyfw.fudan.edu.cn/24/72/c18047a205938/page.htm"; //在原标签页打开
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parent {
  text-align: center;
}
.v-expansion-panel-header {
  font-size: 16px;
  padding: 20px;
}
h2 {
  color: #2196f3;
}
span {
  color: gray;
}

a {
  color: #42b983;
}
</style>
