<script lang="ts" setup>
const todos = [
  {
    task_id: 1,
    account_id: "taro_yamada",
    title: "買い物",
    detail: "卵、にんじん、牛乳",
    category: "FAMIRY",
    status: "PRIVATE",
    expired_at: "2024-07-20T00:00:00",
    created_at: "2024-07-02T12:00:00",
    updated_at: "",
  },
  {
    task_id: 2,
    account_id: "taro_yamada",
    title: "PCセットアップ",
    detail: "先日購入したPCのセットアップ",
    category: "WORK",
    status: "PUBLIC",
    expired_at: "2024-07-10T00:00:00",
    created_at: "2024-07-02T12:00:00",
    updated_at: "",
  },
  {
    task_id: 3,
    account_id: "taro_yamada",
    title: "田中さん用資料作成",
    detail: "田中さんに依頼されていた資料の作成",
    category: "WORK",
    status: "PUBLIC",
    expired_at: "2024-07-11T15:00:00",
    created_at: "2024-07-02T12:00:00",
    updated_at: "",
  },
];
</script>

<template>
  <div class="content-main-center">
    <v-card class="card-main" variant="outlined">
      <Table max-height="75vh">
        <thead>
          <tr>
            <th class="text-left">タイトル</th>
            <th class="text-left"></th>
            <th class="text-left"></th>
            <th class="text-left"></th>
            <th class="text-left">カテゴリー</th>
            <th class="text-left">状態</th>
            <th class="text-left">期限</th>
            <th class="text-left">登録日時</th>
          </tr>
        </thead>
        <tbody height="300">
          <tr v-for="item in todos" :key="item.task_id" class="clickable">
            <td class="text-left">{{ item.title }}</td>
            <td class="text-left"></td>
            <td class="text-left"></td>
            <td class="text-left"></td>
            <td class="text-left">{{ item.category }}</td>
            <td class="text-left">{{ item.status }}</td>
            <td class="text-left">{{ item.expired_at }}</td>
            <td class="text-left">{{ item.created_at }}</td>
          </tr>
        </tbody>
      </Table>
    </v-card>
  </div>
</template>

<style scoped>
thead {
  background-color: #eceff1;
}
</style>
