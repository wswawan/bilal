<template>
    <div>
        <v-navigation-drawer
            stateless
            value="true"
            v-model="drawer"
            app
        >
            <v-list>
                <v-list-tile>
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile>

                <v-list-group
                prepend-icon="account_circle"
                value="true"
                >
                <template v-slot:activator>
                    <v-list-tile>
                    <v-list-tile-title>Users</v-list-tile-title>
                    </v-list-tile>
                </template>
                <v-list-group
                    no-action
                    sub-group
                    value="true"
                >
                    <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-title>Admin</v-list-tile-title>
                    </v-list-tile>
                    </template>

                    <v-list-tile
                    v-for="(admin, i) in admins"
                    :key="i"
                    >
                    <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                    <v-list-tile-action>
                        <v-icon v-text="admin[1]"></v-icon>
                    </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>

                <v-list-group
                    sub-group
                    no-action
                >
                    <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-title>Actions</v-list-tile-title>
                    </v-list-tile>
                    </template>
                    <v-list-tile
                    v-for="(crud, i) in cruds"
                    :key="i"
                    >
                    <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                    <v-list-tile-action>
                        <v-icon v-text="crud[1]"></v-icon>
                    </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/">
                    <v-icon class="mr-2">home</v-icon>
                    Home
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/register">
                    <v-icon class="mr-2">account_box</v-icon>
                    Register
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    name: 'Toolbar',
    data() {
      return {
        drawer: null,
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

<style>

</style>
