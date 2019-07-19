<template>
    <div>
        <v-navigation-drawer
            fixed
            v-model="drawer"
            app
            v-if="isLoggedIn"
        >
            <v-list>
                <v-list-tile to="/">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile>

                <v-list-group
                    prepend-icon="account_circle"
                >
                <template v-slot:activator>
                    <v-list-tile>
                    <v-list-tile-title>Users</v-list-tile-title>
                    </v-list-tile>
                </template>
                <v-list-group
                    no-action
                    sub-group
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
        <v-toolbar 
            app
        >
            <v-toolbar-side-icon v-if="isLoggedIn && !drawer" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-btn
                fab
                dark
                right
                small
                color="red"
                v-if="isLoggedIn && drawer"
                @click="drawer = !drawer"
            >
                <v-icon>clear</v-icon>
            </v-btn> 
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/" v-if="isLoggedIn">
                    <v-icon class="mr-2">fingerprint</v-icon>
                    Login
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/register" v-if="!isLoggedIn">
                    <v-icon class="mr-2">account_circle</v-icon>
                    Register
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-if="isLoggedIn" @click="logout">
                    <v-icon class="mr-2">exit_to_apps</v-icon>
                    Logout
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    },
    computed:{
        ...mapGetters('authentication', [
            'isLoggedIn'
        ])
    },
    methods:{
        ...mapActions('authentication', [
            'logout'
        ])
    }
}
</script>

<style>

</style>
