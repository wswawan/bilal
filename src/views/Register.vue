<template>
    <v-layout
        row wrap
    >
        <v-flex xs12 md4 offset-md4>
            <v-form
                ref="form"
                lazy-validation
            >
                <h1>Register</h1>
                <v-text-field
                    :rules="emailRules"
                    required
                    label="Email"
                    type="email"
                    autocomplete="username"
                    :value="registerEmail"
                    @input="setRegisterEmail"
                ></v-text-field>
                <v-text-field
                    required
                    label="Password"
                    autocomplete="current-password"
                    :type="showPass ? 'text': 'password'"
                    :rules="passwordRules"
                    :counter="30"
                    :value="registerPassword"
                    :append-icon="showPass ? 'visibility' : 'visibility_off'"
                    @click:append="showPass = !showPass"
                    @input="setRegisterPassword"
                ></v-text-field>
                <v-select
                    required
                    label="Select Role"
                    @change="setRegisterRole"
                    :items="roles"
                    :rules='roleRules'
                    item-text="name"
                    item-value="id"
                ></v-select>
                <v-alert type="error" :value="registerError">
                    {{registerError}}
                </v-alert>
                <v-btn dark @click="registerUser" color="success"><v-icon class="mr-2">account_circle</v-icon>Register</v-btn>
                <v-btn dark @click="registerUser" color="warning"><v-icon class="mr-2">lock_open</v-icon>Reset Password</v-btn>
                <v-btn dark @click="registerUser" color="info"><v-icon class="mr-2">fingerprint</v-icon>Login</v-btn>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    data:() => ({
        showPass: false,
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 6) || 'Password at least 6 characters',
            v => (v && v.length <= 30) || 'Password maximal is 30 characters'
        ],
        roleRules: [
            v => !!v || 'Role is required'
        ]
    }),
    mounted() {
        this.fetchRoles();
    },
    computed:{
        ...mapState('authentication', [
            'roles',
            'registerEmail',
            'registerPassword',
            'registerRole',
            'registerError',
            'snackbar'
    
        ])
    },
    methods: {
        ...mapActions('authentication', [
            'fetchRoles',
            'register'
        ]),
        ...mapMutations('authentication', [
            'setToken',
            'setRegisterEmail',
            'setRegisterPassword',
            'setRegisterRole',
            'setRoles',
            'setRegisterError',
            'setSnackbar'
        ]),
        registerUser(){
            if(this.$refs.form.validate())
                this.register()
        }
    }
}
</script>

<style lang="scss">
    .theme--dark.v-list{
        background: none
    }
    .v-snack--multi-line .v-snack__content{
        height: 100%;
        padding: 0;
    }
</style>
