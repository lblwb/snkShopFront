<template>
  <div class="AccountBodyWrapper">
    <div class="AccountBodyAvatar">
      <div class="AccountBodyAvatarImg">
        <div class="userBarAva">
          <div class="userBarAvaBlock"
               style="">
            <div class="userBarAvaBlockWrapper" style="display: flex; align-items: center">
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
      </div>
    </div>
    <div class="AccountBodyUserInfo">
      <div class="AccountBodyUserInfoWrapper">
        <div class="AccountBodyUserInfoTitle">
          Hi, <b>{{ userData ? userData.username : "Anon" }}</b>
        </div>
      </div>
    </div>


    <div class="AccountBodyUserRewards">
      <RewardPoints title="Rewards"/>
    </div>

    <div class="AccountBodyUserOrders">
      <BlockLastOrdersBtn/>
    </div>


    <div class="AccountBodyUserRewards">
      <MainTwoStartBtnsGroup/>
    </div>


  </div>
</template>

<script setup>
import {useUserStore} from "~/stores/userSession.ts";
import BlockLastOrdersBtn from "~/components/app/Main/Orders/Block/BlockLastOrdersBtn.vue";
import DirectGlbBtn from "~/components/app/Main/Glb/Btn/DirectGlbBtn.vue";
import LinkBlockBtn from "~/components/app/Main/Glb/Btn/LinkBlockBtn.vue";
import WhereStartBtn from "~/components/app/Main/Glb/Btn/WhereStartBtn.vue";
import RewardPoints from "~/components/app/Main/Glb/Btn/RewardPoints.vue";
import MainTwoStartBtnsGroup from "~/components/app/Main/Glb/Btn/MainTwoStartBtnsGroup.vue";


definePageMeta({
  layout: "twa-default"
})

const userStore = useUserStore();
let userData = computed(() => userStore.getUserData);
</script>

<style scoped>
.AccountBodyWrapper {
  padding: 6vh 0;
}

.AccountBodyAvatar {
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.userBarAva {
  box-sizing: border-box;
  width: 64px;
  height: 64px;
  background: linear-gradient(180deg, #F64D4D 0%, #D33E86 100%);
  border: 1px solid #FFFFFF;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.userBarAva svg {
  width: 32px;
  height: 32px;
}

.AccountBodyUserInfo {
  margin-bottom: 24px;
}

.AccountBodyUserInfoWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.AccountBodyUserInfoTitle {
  font-size: 18px;
}

/**/

.AccountBodyUserRewards{
  /*margin-bottom: 16px;*/
}

.AccountBodyUserOrders{
  margin-bottom: 18px;
}
</style>
