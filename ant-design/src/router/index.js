import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "../views/404";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    hideInMenu: true,
    component: () =>
      import(/*webpackChunkName:"layout"*/ "../layout/UserLayout"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/*webpackChunkName:"Login"*/ "../views/User/Login")
      },
      {
        path: "/user/Register",
        name: "register",
        component: () =>
          import(/*webpackChunkName:"Login"*/ "../views/User/Register")
      }
    ]
  },
  {
    path: "/",
    component: () =>
      import(/*webpackChunkName:"layout"*/ "../layout/BasicLayout"),
    children: [
      //dashboard
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard",
        name: "dashboard",
        meta:{
          icon:"dashboard",title:"仪表盘"
        },
        component: () =>
          import(/*webpackChunkName:"analysis"*/ "../views/Dashboard/Analysis"),
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            meta:{
              title:"分析页"
            },
            component: () =>
              import(
                /*webpackChunkName:"analysis"*/ "../views/Dashboard/Analysis"
              )
          }
        ]
      },
      //form
      {
        path: "/form",
        name: "form",
        component: () =>
          import(/*webpackChunkName:"forms"*/ "../views/Forms/BasicForm"),
          meta:{
            icon:"form",title:"表单"
          },
        children: [
          {
            path: "/dashboard/basic-form",
            name: "basicform",
            meta:{
              title:"基础表单"
            },
            component: () =>
              import(/*webpackChunkName:"analysis"*/ "../views/Forms/BasicForm")
          },
          //step-form
      {
        path: "/form/step-form",
        name: "stepform",
        hideChildrenInMenu: true,
        component: () =>
          import(/*webpackChunkName:"form"*/ "../views/Forms/StepForm"),
          meta:{
            title:"分步表单"
          },
        children: [
          {
            path: "/form/step-form",
            redirect: "/form/step-form/info"
          },
          {
            path: "/form/step-form/info",
            name: "info",
            component: () =>
              import(
                /*webpackChunkName:" form"*/ "../views/Forms/StepForm/Step1"
              )
          },
          {
            path: "/form/step-form/contirm",
            name: "contirm",
            component: () =>
              import(
                /*webpackChunkName:" form"*/ "../views/Forms/StepForm/Step2"
              )
          },
          {
            path: "/form/step-form/result",
            name: "result",
            component: () =>
              import(
                /*webpackChunkName:" form"*/ "../views/Forms/StepForm/Step3"
              )
          }
        ]
      }
        ]
      },
    ]
  },

  {
    path: "*",
    name: "404",
    hideInMenu: true,
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== from) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
