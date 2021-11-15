import cloudbase from "@cloudbase/js-sdk";

export const app = cloudbase.init({
  env: "lab-clock-in-8g1unwf8651fda4d",
});

export const auth = app.auth({
  persistence: "local",
});

// 应用初始化时
if (!auth.hasLoginState()) {
  await login();
}

async function login() {
  await auth.anonymousAuthProvider().signIn();
  // 匿名登录成功检测登录状态isAnonymous字段为true
  const loginState = await auth.getLoginState();
  console.log(loginState?.isAnonymousAuth); // true
}

console.log("hasAuth...");

export const db = app.database();

export const res = await db.collection("user").get();
