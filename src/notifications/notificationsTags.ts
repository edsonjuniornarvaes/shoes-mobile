import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    user_name: "Edson",
    user_email: "edsonjunior.narvaes@gmail.com",
  });
}
