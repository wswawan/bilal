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
                    counter="30"
                    :value="registerPassword"
                    :append-icon="showPass ? 'visibility' : 'visibility_off'"
                    @click:append="showPass = !showPass"
                    @input="setRegisterPassword"
                ></v-text-field>
                <v-text-field
                    autocomplete="new-password"
                    v-show="registerPassword && registerPassword.length > 5"
                    required
                    label="Password Confirmation"
                    :type="showPass ? 'text': 'password'"
                    :rules="passwordConfirm"
                    :value="passwordToMatch"
                    :append-icon="showPass ? 'visibility' : 'visibility_off'"
                    @input="setPasswordToMatch"
                    @click:append="showPass = !showPass"
                ></v-text-field>
                <v-select
                    required
                    label="Select Role"
                    @change="setRegisterRole"
                    :value="registerRole"
                    :items="roles"
                    :rules='roleRules'
                    item-text="name"
                    item-value="id"
                ></v-select>
                <v-snackbar
                    auto-height
                    bottom
                    right
                    :timeout="0"
                    :value="snackbar"
                    color=error
                >
                    {{registerError}}
                    
                    <v-btn flat @click="setSnackbar">close</v-btn>
                </v-snackbar>
                <v-btn dark round @click="registerUser" color="success"><v-icon class="mr-2">account_circle</v-icon>Register</v-btn>
                <v-btn dark round @click="registerUser" color="info"><v-icon class="mr-2">fingerprint</v-icon>Login</v-btn>
                <v-btn dark round @click="registerUser" color="warning"><v-icon class="mr-2">lock_open</v-icon>Reset Password</v-btn>
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
        passwordConfirm(){
            return [
                () => (this.registerPassword === this.passwordToMatch) || 'Password must match',
                v => !!v || 'Password confirmation is required'
            ]
        },
        emailRulesServer(){
            const rules = []
            if(this.registerError){
                const rule = 
                    v => (v && this.registerError) || this.registerError
            
                rules.push(rule)
            }
            return rules
        },
        ...mapState('authentication', [
            'roles',
            'registerEmail',
            'registerPassword',
            'registerRole',
            'registerError',
            'snackbar',
            'passwordToMatch'
    
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
            'setSnackbar',
            'setPasswordToMatch'
        ]),
        registerUser(){
            if(this.$refs.form.validate()){
                this.register()
            }
                
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
