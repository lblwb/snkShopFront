<template>
  <div class="AppLw">
    <div class="AppLwWrapper">
      <div class="AppHeader"
           style="padding-bottom:6px; margin-bottom: 8px; border-bottom: 1px solid #F4F4F4; min-height: 36px;">
        <div class="AppHeaderWrapper" style="display: flex; align-items: center; justify-content: space-between;">
          <!--          -->
          <div class="AppHeaderUserBar" @click="$router.push({ name: 'user-account' })" v-haptic-engine>
            <div class="userBarWrapper" style="display: flex; flex-flow: row; gap: 10px; align-items: center">
              <div class="userBarAva">
                <div class="userBarAvaBlock"
                     style="width: 42px; height: 42px; display: flex; align-items: center; justify-content: center">
                  <div class="userBarAvaBlockWrapper" style="display: flex;">
                    <div class="userBarAvaIcon" style="display: flex;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6.04369 8.24112C6.40333 5.28315 8.9389 3 12 3C15.0628 3 17.5994 5.28561 17.9569 8.24589C19.2241 8.62023 20.3374 9.12072 21.1918 9.73599C22.1996 10.4616 23 11.4678 23 12.724C23 13.6544 22.5554 14.4562 21.9247 15.0939C21.2984 15.7272 20.4418 16.2511 19.4628 16.6692C18.6133 17.0321 17.6365 17.3303 16.5697 17.5517L17.8321 19.4453C18.1384 19.9048 18.0142 20.5257 17.5547 20.8321C17.0952 21.1384 16.4743 21.0142 16.1679 20.5547L14.3867 17.8829C13.6163 17.9598 12.8172 18 12 18C11.0354 18 10.0959 17.944 9.19921 17.8376L7.89443 20.4472C7.64744 20.9412 7.04676 21.1414 6.55279 20.8944C6.05881 20.6474 5.85858 20.0468 6.10557 19.5528L7.13768 17.4886C6.18452 17.2748 5.30845 16.9987 4.53719 16.6692C3.55819 16.2511 2.70165 15.7272 2.07528 15.0939C1.44455 14.4562 1 13.6544 1 12.724C1 11.4672 1.80433 10.4586 2.81446 9.73133C3.668 9.11681 4.77899 8.61572 6.04369 8.24112ZM8.06938 9.04184C8.07317 8.95023 8.06433 8.85658 8.04152 8.76305C8.03315 8.72873 8.0231 8.69525 8.01148 8.66269C8.16719 6.6198 9.8878 5 12 5C14.1324 5 15.8656 6.65088 15.9926 8.72132C15.9875 8.7381 15.9829 8.7551 15.9787 8.77231C15.9582 8.85611 15.9489 8.94003 15.9498 9.02248C15.9411 9.03156 15.9312 9.04143 15.9199 9.0521C15.7894 9.17557 15.5468 9.33282 15.1641 9.48587C14.4042 9.78976 13.2859 10 12 10C10.7141 10 9.59583 9.78976 8.83595 9.48587C8.45324 9.33282 8.21064 9.17557 8.08008 9.0521C8.07637 9.04859 8.0728 9.04517 8.06938 9.04184ZM6.43794 10.2115C5.40688 10.532 4.57519 10.9281 3.98304 11.3544C3.21567 11.9069 3 12.3908 3 12.724C3 12.9771 3.11545 13.3015 3.49722 13.6875C3.88336 14.0779 4.49181 14.4751 5.32281 14.83C6.98121 15.5384 9.3416 16 12 16C14.6584 16 17.0188 15.5384 18.6772 14.83C19.5082 14.4751 20.1166 14.0779 20.5028 13.6875C20.8846 13.3015 21 12.9771 21 12.724C21 12.3892 20.7854 11.9079 20.0232 11.359C19.4304 10.9322 18.5958 10.5359 17.5593 10.2151C17.4766 10.3207 17.3869 10.4175 17.2941 10.5052C16.9186 10.8604 16.4289 11.1341 15.9067 11.3429C14.8568 11.7627 13.4751 12 12 12C10.5249 12 9.14317 11.7627 8.0933 11.3429C7.57114 11.1341 7.08142 10.8604 6.70589 10.5052C6.6121 10.4165 6.52136 10.3185 6.43794 10.2115ZM6 13C6 12.4477 6.44772 12 7 12H7.01C7.56228 12 8.01 12.4477 8.01 13C8.01 13.5523 7.56228 14 7.01 14H7C6.44772 14 6 13.5523 6 13ZM16 13C16 12.4477 16.4477 12 17 12H17.01C17.5623 12 18.01 12.4477 18.01 13C18.01 13.5523 17.5623 14 17.01 14H17C16.4477 14 16 13.5523 16 13ZM11 14C11 13.4477 11.4477 13 12 13H12.01C12.5623 13 13.01 13.4477 13.01 14C13.01 14.5523 12.5623 15 12.01 15H12C11.4477 15 11 14.5523 11 14Z"
                              fill="#F1EFFF"/>
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
              <div class="userBarInfo">
                <div class="userBarInfoWrapper">
                  <div class="userBarInfoName" style="margin-bottom: 3px;">
                    <div class="userBarInfoNameWrapper" style="display: flex; align-items: center; gap: 4px;">
                      <div class="userBarInfoNameTitle" style="">
                        {{ userData ? userData.username : "Anon" }}
                      </div>
                      <div class="userBarInfoNameIcon" style="display: flex; align-items: center;">
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.89645 3.54644C5.09171 3.35118 5.40829 3.35118 5.60355 3.54644L9.10355 7.04644C9.29882 7.2417 9.29882 7.55828 9.10355 7.75355L5.60355 11.2535C5.40829 11.4488 5.09171 11.4488 4.89645 11.2535C4.70118 11.0583 4.70118 10.7417 4.89645 10.5464L8.04289 7.39999L4.89645 4.25355C4.70118 4.05829 4.70118 3.7417 4.89645 3.54644Z"
                                fill="black"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="userBarInfoBadgeBlk" style="background: #000; padding: 2px 6px; border-radius: 10px;">
                    <div class="userBarInfoBadgeBlkWrapper"
                         style="display: flex; align-items: center; justify-content: center;">
                      <div class="userBarInfoBadgeBlkTitle" style="color: #fff; font-size: 10px; font-weight: 600;">
                        {{ userRoleData.name ? userRoleData.name : '' }}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="AppHeaderActions">
            <div class="AppHeaderActionsWrapper">
              <div class="AppHeaderActionsBtn" style="background: #fff; padding: 6px 8px; border-radius: 32px;"
                   @click="showGroupTelegram" v-haptic-engine>
                <div class="actionsBtnWrapper" style="display: flex; align-items: center; gap: 8px">
                  <div class="actionsBtnBlock"
                       style="background: #357AF6; border-radius: 32px; display: flex; align-items: center;">
                    <div class="actionsBtnBlockIcon"
                         style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; color: #fff;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div class="actionsBtnInfo">
                    <div class="actionsBtnInfoWrapper">
                      <div class="actionsBtnInfoTitle" style="margin-bottom: 2px; font-size: 13px; font-weight: 600;">
                        @telegramChannel
                      </div>
                      <div class="actionsBtnInfoDesc" style="font-size: 12px; font-weight: 400; color: #959599">
                        наш Telegram-канал
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
      <!--        <path d="M12 8.04V3M15.5 10L20 7.5M15.5 14L20 16.5M12 15.96V21M8.5 14L4 16.5M8.5 10L4 7.495"-->
      <!--              stroke="#0A84FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>-->
      <!--      </svg>-->
      <!--      -->
      <slot name="Navbar"></slot>

      <SearchProductInput/>

      <NavbarBlbApp/>

      <div class="AppLwBody">

        <!--        <slot name="Body">-->
        <ClientOnly>
          <!--          <NuxtLoadingIndicator/>-->
          <LoadingBar/>

          <MiniApp/>
          <!--   -->
          <Transition name="fade">
            <NuxtPage/>
          </Transition>
        </ClientOnly>
        <!--        </slot>-->
      </div>

      <div class="AppLwBottomNav">
        <!--        <FooterNavMobileFixed/>-->
      </div>


    </div>
  </div>
</template>

<script setup>
import "~/assets/css/telegram.css";

// import FooterNavMobileFixed from "~/components/twa/footer_nav/footerNavMobileFixed.vue";
import {useUserStore} from "~/stores/userSession.ts";
import NavbarBlbApp from "~/components/app/Main/Glb/NavbarBlbApp.vue";
import SearchProductInput from "~/components/app/Main/Product/Search/SearchProductInput.vue";

const $router = useRouter();

const userStore = useUserStore();
let userData = computed(() => userStore.getUserData);
let userRoleData = computed(() => userStore.getUserRole);

// onMounted(async () => {
//   await userStore.fetchAndPushTgUser();
// });

onServerPrefetch(async () => {
  // ✅ this will work
  await userStore.fetchAndPushTgUser();
})


const showGroupTelegram = () => {
  console.log("showGroupTelegram");
}


</script>

<style>
@import 'animate.css';
</style>

<style scoped>
.AppLw {
  max-width: 480px;
  margin: 0 auto;
}

.AppLw .AppLwWrapper {
  padding: 1.8vh 2.4vw;
  min-height: 100vh;
}


.AppLw .AppNavbar {
  margin-bottom: 36px;
}

.AppLwBody {
  margin-bottom: 80px;
  /*overflow: hidden;*/
}

.AppLw .AppNavbar .NavbarWrapper {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}

.AppHeaderUserBar {

}

.AppHeaderUserBar:hover,
.AppHeaderUserBar:focus {
  opacity: 0.8;
}


/**/


.userBarAvaBlock {
  box-sizing: border-box;
  width: 42px;
  height: 42px;
  background: linear-gradient(180deg, #F64D4D 0%, #D33E86 100%);
  border: 1px solid #FFFFFF;
  border-radius: 24px;
}

.userBarInfoName {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */
  letter-spacing: 0.08em;
  color: #000000;
}

.userBarInfoNameTitle {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.08em;
  color: #000000;
}
</style>