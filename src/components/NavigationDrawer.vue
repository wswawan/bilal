<template>
  
</template>

<script>
  export default {
    props: [
        'drawer'
    ],
    data() {
      return {
        admins: [
            ['Management', 'people_outline'],
            ['Settings', 'settings']
        ],
        cruds: [
            ['Create', 'add'],
            ['Read', 'insert_drive_file'],
            ['Update', 'update'],
            ['Delete', 'delete']
        ]
      }
    }
  }
</script>