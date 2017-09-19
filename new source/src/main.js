// const wildfireConfig = {
//   database: 'wilddog',
//   databaseConfig: {
//     siteId: 'wd2231595668ouosqu'
//   },
//   pageURL: 'http://chengkang.me/wildfire',
//   pageTitle: 'Wildfire Demo',
//   locale: 'zh-CN'
// }

const wildfireConfig = {
  database: 'firebase',
  databaseConfig: {
    apiKey: 'AIzaSyCLsuRlCYjLyetc40v0-yFKHZVhumi85bs',
    authDomain: 'wildfirewebsite-35a4f.firebaseapp.com',
    databaseURL: 'https://wildfirewebsite-35a4f.firebaseio.com',
    projectId: 'wildfirewebsite-35a4f',
    storageBucket: '',
    messagingSenderId: '911552849262'
  },
  pageURL: 'http://chengkang.me/wildfire',
  pageTitle: 'Wildfire Demo',
  locale: 'zh-CN'
}

const {
  database = 'firebase',
  databaseConfig, // required
  pageTitle = document.title,
  pageURL = window.location.href,
  locale = 'en'
// } = window.wildfireConfig
} = wildfireConfig

Vue.prototype.$config = {
  database,
  databaseConfig,
  pageTitle,
  pageURL,
  locale,
  defaultAvatarURL: 'http://7u2sl0.com1.z0.glb.clouddn.com/wildfire/firefighter-avatar.png',
  anonymousUserId: 'anonymous'
}

import Vue from 'vue'
import wilddog from 'wilddog'
import WildVue from 'wildvue'
import firebase from 'firebase'
import VueFire from 'vuefire'
import moment from 'moment'
import i18next from 'i18next'
import App from './App'

Vue.config.productionTip = true
Vue.prototype.$i18next = i18next
Vue.prototype.$moment = moment

// Moved all iview injection into ./loadiView.js
// You can choose the component you want to use in that file.
import { iView } from './loadiView'
Vue.use(iView)

if (database === 'wilddog') {
  Vue.use(WildVue)
  Vue.prototype.$app = wilddog.initializeApp({
    authDomain: `${databaseConfig.siteId}.wilddog.com`,
    syncURL: `https://${databaseConfig.siteId}.wilddogio.com`
  })
  Vue.prototype.$database = Vue.prototype.$app.sync()
  Vue.prototype.$auth = Vue.prototype.$app.auth()
} else if (database === 'firebase') {
  Vue.use(VueFire)
  Vue.prototype.$app = firebase.initializeApp(databaseConfig)
  Vue.prototype.$database = Vue.prototype.$app.database()
  Vue.prototype.$auth = Vue.prototype.$app.auth()
}

moment.locale(locale.toLowerCase())

i18next.init({
  lng: locale,
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        'button/reply': 'Reply',
        'button/cancel': 'Cancel',
        'button/hide': 'Hide',
        'button/delete': 'Delete',
        'button/post': 'Post',
        'button/reset': 'Reset',
        'button/comments': 'Comments',
        'button/discussions': 'Discussions',
        'button/signUp': 'Sign Up',
        'button/signIn': 'Sign in',
        'button/signOut': 'Sign out',
        'button/posting': 'Posting',
        'text/loading': 'Loading',
        'text/loadingComments': 'Loading comments',
        'textarea/joinTheConversation': 'Join the discusstion...',
        'textarea/joinTheConversationAnonymously': 'Join the discusstion as Anonymous User',
        'textarea/replyToUserComment': 'reply to {{username}}\'s comment',
        'text/anonymousUser': 'Anoymous User',
        'text/add_wildfire_to_your_site': 'Add Wildfire to your site',
        'text/postTheFirstComment': 'Post the first comment!',
        'text/showMoreDiscussion': 'Show more',
        'text/showLessDiscussion': 'Show less',
        'text/loadingCommentContent': 'Loading comment content...',
        'text/commentPosted': 'Comment posted!',
        'text/areYouSureToDeleteThisComment': 'Are you sure to delete this comment?',
        'text/email': 'Email',
        'text/password': 'Password',
        'text/reEnterPassword': 'Re-enter password',
        'text/confirm': 'Confirm',
        'text/signOutTitle': 'Sign Out',
        'text/signOutConfirmText': 'Are you sure to sign out Wildfire?',
        'error/notValidServiceProvider': 'Please check your config: "sercice" should be "firebase" or "wilddog".',
        'error/noDatabaseConfig': 'Please check your config: missing "databaseConfig"',
        'error/failedToLoadComments': 'Failed to load comments.',
        'error/failedToPostComment': 'Failed to post comment.',
        'error/pleaseEnterEmail': 'Please enter your email.',
        'error/invalidEmail': 'Invalid email address.',
        'error/pleaseEnterPassword': 'Please enter your password.',
        'error/pleaseReEnterPassword': 'Please re-enter your password.',
        'error/twoPasswordsDontMatch': 'The two passwords don\'t match.',
        'error/passwordMin': 'Password should be at least 6 digits.',
        'message/invalidForm': 'Invalid form! Check it and try again.',
        'message/signUpSuccess': 'Signup success!',
        'message/signUpFailed': 'Signup failed, please try again!',
        'message/signInSuccess': 'Signin success!',
        'message/signInFailed': 'Signin failed, please try again!',
        'message/emailAlreadyInUse': 'Email already in use, try to login!',
        'message/operationNotAllowed': 'Email accounts are not enabled, please contact the admin!',
        'message/somethingGoesWrong': 'Oops! Something goes wrong!'
      }
    },
    'zh-CN': {
      translation: {
        'button/reply': '回复',
        'button/cancel': '取消',
        'button/hide': '收起',
        'button/delete': '删除',
        'button/post': '发送',
        'button/reset': '清空',
        'button/comments': '条评论',
        'button/discussions': '条讨论',
        'button/signUp': '注册',
        'button/signIn': '登录',
        'button/signOut': '注销',
        'button/posting': '发送中',
        'text/loading': '加载中',
        'text/loadingComments': '评论加载中',
        'textarea/joinTheConversation': '一起来发言吧...',
        'textarea/joinTheConversationAnonymously': '以 匿名用户 身份发言...',
        'textarea/replyToUserComment': '回复 {{username}} 的评论',
        'text/anonymousUser': '匿名用户',
        'text/add_wildfire_to_your_site': '在你的网站使用 Wildfire',
        'text/postTheFirstComment': '快来发布第一条评论吧！',
        'text/showMoreDiscussion': '展开更多讨论',
        'text/showLessDiscussion': '收起更多讨论',
        'text/loadingCommentContent': '加载评论内容中...',
        'text/commentPosted': '评论成功！',
        'text/areYouSureToDeleteThisComment': '你确定要删除这条评论吗？',
        'text/email': '电子邮箱',
        'text/password': '密码',
        'text/reEnterPassword': '再次输入密码',
        'text/confirm': '确认',
        'text/signOutTitle': '注销登录',
        'text/signOutConfirmText': '确定注销当前 Wildfire 账号？',
        'error/notValidServiceProvider': '请检查你的配置： "sercice" 应该为 "firebase" 或者 "wilddog"。',
        'error/noDatabaseConfig': '请检查你的配置： 找不到 "databaseConfig"',
        'error/failedToLoadComments': '加载评论失败。',
        'error/failedToPostComment': '发送评论失败。',
        'error/pleaseEnterEmail': '请输入你的邮箱地址。',
        'error/invalidEmail': '邮箱格式不正确。',
        'error/pleaseEnterPassword': '请输入你的密码。',
        'error/pleaseReEnterPassword': '请再次输入密码。',
        'error/twoPasswordsDontMatch': '两次输入的密码不一致。',
        'error/passwordMin': '密码长度不能小于6位。',
        'message/invalidForm': '表单验证失败，请按要求填写！',
        'message/signUpSuccess': '注册成功！',
        'message/signUpFailed': '注册失败，请重试！',
        'message/signInSuccess': '登录成功！',
        'message/signInFailed': '登录失败，请重试！',
        'message/emailAlreadyInUse': '邮箱已经注册，请直接登录！',
        'message/operationNotAllowed': '邮箱登录被禁止，请联系站主！',
        'message/somethingGoesWrong': '发生了未知错误！'
      }
    }
  }
}, (err, t) => {
  if (err) {
    console.error(err)
  } else {
    console.log('i18next Initialized!')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#wildfire',
  template: '<App/>',
  components: { App }
})