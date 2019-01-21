<template>
  <div>
    <Form>
      <FormItem label="姓名">
        <Input v-model="formData['Name']"/>
      </FormItem>
      <FormItem label="标题">
        <Input v-model="formData['Title']"/>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        Name: "",
        Title: ""
      }
    };
  }
};
</script>

