<template>
  <div class="hello">
    <table>
      <tr>
        <th>账号</th>
        <th>密码</th>
        <th>用户名</th>
      </tr>
      <tr v-for="(v, i) in tabdata" :key="i">
        <td>{{ v.mobile }}</td>
        <td>{{ v.password }}</td>
        <td>{{ v.username }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data () {
    return {
      tabdata: [],
    };
  },
  created () {
    this.query()
    // this.queryslist();
    // this.querysdatil();
    // this.querystian();
    // this.querysxiu()
    // this.querysanchu();
  },
  methods: {
    query () {
      $.ajax({
        url: this.$baseURI + "/swagger/IndIndustry/list",
        success: function (data) {
          console.log(data);
        },
      });
    },
    // queryslist () {
    //   $.ajax({
    //     url: this.$baseURI + "/swagger/eduUniversity/list?pageSize=10&pageNum=1",
    //     success: function (data) {
    //       console.log(data, "获取大学列表成功");
    //     },
    //   });
    // },
    // querysdatil () {
    //   $.ajax({
    //     url: this.$baseURI + "/swagger/eduUniversity/getInfo?EuID=1",
    //     success: function (data) {
    //       console.log(data, "根据ID获取大学详细成功");
    //     },
    //   });
    // },
    // querysanchu () {
    //   $.ajax({
    //     type: "Post",
    //     url: this.$baseURI + "/swagger/eduUniversity/remove",
    //     data: { EuID: 7 },
    //     success: function (data) {
    //       console.log(data, "删除大学信息成功");
    //     },
    //   });
    // },
    // querystian () {
    //   $.ajax({
    //     type: "Post",
    //     url: this.$baseURI + "/swagger/eduUniversity/add",
    //     data: {
    //       createBy: "",
    //       createTime: "",
    //       createUserID: "",
    //       euAddr: "",
    //       euArea: "",
    //       euCityName: "北京市",
    //       euCode: "4111010007",
    //       euDepartment: "工业和信息化部",
    //       euID: "7",
    //       euIs211: 1,
    //       euIs985: 1,
    //       euIsFirst: 1,
    //       euIsPublic: 1,
    //       euLevel: 2,
    //       euName: "北京理工大学",
    //       euProvinceName: "北京市",
    //       euUrl: "",
    //       eutype: "",
    //       isDeleted: 0,
    //       isEnabled: 1,
    //     },
    //     success: function (data) {
    //       console.log(data, "新增大学信息成功");
    //     },
    //   });
    // },
    // querysxiu () {

    //   $.ajax({
    //     type: "Post",
    //     url: this.$baseURI + "/swagger/eduUniversity/edit",
    //     data: {
    //       createBy: "",
    //       createTime: "",
    //       createUserID: "",
    //       euAddr: "77",
    //       euArea: "",
    //       euCityName: "北京市",
    //       euCode: "4111010007",
    //       euDepartment: "工业和信息化部",
    //       euID: "7",
    //       euIs211: 1,
    //       euIs985: 1,
    //       euIsFirst: 1,
    //       euIsPublic: 1,
    //       euLevel: 2,
    //       euName: "北京理工大学",
    //       euProvinceName: "北京市",
    //       euUrl: "",
    //       eutype: "222",
    //       isDeleted: 0,
    //       isEnabled: 1,
    //     },
    //     success: function (data) {
    //       console.log(data, "更新大学信息成功");
    //     },
    //   });
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
