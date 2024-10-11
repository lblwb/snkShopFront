import {defineStore} from "pinia";
// @ts-ignore
import {useWebApp} from "vue-tg";

// @ts-ignore
export const useUserStore = defineStore("userStore", {
    state: () => ({
        user: {
            data: {
                username: null,
            },
            //
            role: {
                data: {
                    name: "Beginner",
                },
            },
        },
    }),
    actions: {
        setUser(user: any) {
            this.user.data = user;
        },
        async fetchAndPushTgUser() {
            const {initDataUnsafe} = useWebApp();
            await this.setUser(initDataUnsafe.user);
            console.log(this.getUser);
        },
        fetchUserBySession() {
        },
    },
    getters: {
        getUser(): object {
            return this.user;
        },
        getUserRole(): object {
            return this.user.role.data;
        },
        getUserData(): object {
            return this.getUser.data;
        },
        getUserInitData(): string {
            const {initData} = useWebApp();
            return initData;
        },
    },
});
