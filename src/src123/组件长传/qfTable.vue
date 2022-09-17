<template>
  <table border="1" cellpadding="10" cellspacing="0">
    <thead>
      <tr>
        <th v-for="item in column">{{ item.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data">
        <!-- 
        <td>{{row.id}}</td>
        <td>{{row.name}}</td>
        <td>{{row.age}}</td>
        <td>暂不写</td>

        {{row.???}}
        {{row.col.prop}}
        {{row[col.prop]}}
        -->
        <td v-for="(col, index) in column">
          {{
            column[index].$scopedSlots.default
              ? column[index].$scopedSlots.default(row)[0].text
              : row[col.prop]
          }}
        </td>
      </tr>
      <!-- 默认插槽：因为调用了所以才提示组件不存在 -->
      <slot></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      column: [
        // 之前：{title: '编号', key: 'id'}
        // 现在：{label: '编号', prop: 'id'}
        // 存放了一个个子组件对象， 然后每个字组件对象上有label、prop数据
      ],
    };
  },
  mounted() {
    // 父渲染 -> 渲染过程中解析子组件 子组件渲染 -> 子完毕后子mounted  -> .... -> 最后父mounted
    console.log(this.column);
    console.log(this.column[4].$scopedSlots.default({ sex: 1 })[0].text);
  },
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style></style>
