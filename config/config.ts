// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'browser',
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user/login',
              name: 'login',
              component: './User/login',
            },
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'register-result',
              icon: 'smile',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'register',
              icon: 'smile',
              path: '/user/register',
              component: './user/register',
            },
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/Nav',
            },
            {
              path: '/Demo',
              name: 'Demo',
              routes: [
                {
                  path: '/Demo/dashboard',
                  name: 'dashboard',
                  icon: 'dashboard',
                  routes: [
                    {
                      path: '/Demo',
                      redirect: '/Demo/dashboard/analysis',
                    },
                    {
                      name: 'analysis',
                      icon: 'smile',
                      path: '/Demo/dashboard/analysis',
                      component: './Demo/dashboard/analysis',
                    },
                    {
                      name: 'monitor',
                      icon: 'smile',
                      path: '/Demo/dashboard/monitor',
                      component: './Demo/dashboard/monitor',
                    },
                    {
                      name: 'workplace',
                      icon: 'smile',
                      path: '/Demo/dashboard/workplace',
                      component: './Demo/dashboard/workplace',
                    },
                  ],
                },
                {
                  path: '/Demo/form',
                  icon: 'form',
                  name: 'form',
                  routes: [
                    {
                      path: '/Demo',
                      redirect: '/Demo/form/basic-form',
                    },
                    {
                      name: 'basic-form',
                      icon: 'smile',
                      path: '/Demo/form/basic-form',
                      component: './Demo/form/basic-form',
                    },
                    {
                      name: 'step-form',
                      icon: 'smile',
                      path: '/Demo/form/step-form',
                      component: './Demo/form/step-form',
                    },
                    {
                      name: 'advanced-form',
                      icon: 'smile',
                      path: '/Demo/form/advanced-form',
                      component: './Demo/form/advanced-form',
                    },
                  ],
                },
                {
                  path: '/Demo/list',
                  icon: 'table',
                  name: 'list',
                  routes: [
                    {
                      path: '/Demo/list/search',
                      name: 'search-list',
                      component: './Demo/list/search',
                      routes: [
                        {
                          path: '/Demo/list/search',
                          redirect: '/Demo/list/search/articles',
                        },
                        {
                          name: 'articles',
                          icon: 'smile',
                          path: '/Demo/list/search/articles',
                          component: './Demo/list/search/articles',
                        },
                        {
                          name: 'projects',
                          icon: 'smile',
                          path: '/Demo/list/search/projects',
                          component: './Demo/list/search/projects',
                        },
                        {
                          name: 'applications',
                          icon: 'smile',
                          path: '/Demo/list/search/applications',
                          component: './Demo/list/search/applications',
                        },
                      ],
                    },
                    {
                      path: '/Demo',
                      redirect: '/Demo/list/table-list',
                    },
                    {
                      name: 'table-list',
                      icon: 'smile',
                      path: '/Demo/list/table-list',
                      component: './Demo/list/table-list',
                    },
                    {
                      name: 'basic-list',
                      icon: 'smile',
                      path: '/Demo/list/basic-list',
                      component: './Demo/list/basic-list',
                    },
                    {
                      name: 'card-list',
                      icon: 'smile',
                      path: '/Demo/list/card-list',
                      component: './Demo/list/card-list',
                    },
                  ],
                },
                {
                  path: '/Demo/profile',
                  name: 'profile',
                  icon: 'profile',
                  routes: [
                    {
                      path: '/Demo',
                      redirect: '/Demo/profile/basic',
                    },
                    {
                      name: 'basic',
                      icon: 'smile',
                      path: '/Demo/profile/basic',
                      component: './Demo/profile/basic',
                    },
                    {
                      name: 'advanced',
                      icon: 'smile',
                      path: '/Demo/profile/advanced',
                      component: './Demo/profile/advanced',
                    },
                  ],
                },
                {
                  name: 'result',
                  icon: 'CheckCircleOutlined',
                  path: '/Demo/result',
                  routes: [
                    {
                      path: '/Demo',
                      redirect: '/Demo/result/success',
                    },
                    {
                      name: 'success',
                      icon: 'smile',
                      path: '/Demo/result/success',
                      component: './Demo/result/success',
                    },
                    {
                      name: 'fail',
                      icon: 'smile',
                      path: '/Demo/result/fail',
                      component: './Demo/result/fail',
                    },
                  ],
                },
                {
                  name: 'exception',
                  icon: 'warning',
                  path: '/Demo/exception',
                  routes: [
                    {
                      path: '/Demo',
                      redirect: '/Demo/exception/403',
                    },
                    {
                      name: '403',
                      icon: 'smile',
                      path: '/Demo/exception/403',
                      component: './Demo/exception/403',
                    },
                    {
                      name: '404',
                      icon: 'smile',
                      path: '/Demo/exception/404',
                      component: './Demo/exception/404',
                    },
                    {
                      name: '500',
                      icon: 'smile',
                      path: '/Demo/exception/500',
                      component: './Demo/exception/500',
                    },
                  ],
                },
                {
                  name: 'account',
                  icon: 'user',
                  path: '/Demo/account',
                  routes: [
                    {
                      path: '/Demo',
                      redirect: '/Demo/account/center',
                    },
                    {
                      name: 'center',
                      icon: 'smile',
                      path: '/Demo/account/center',
                      component: './Demo/account/center',
                    },
                    {
                      name: 'settings',
                      icon: 'smile',
                      path: '/Demo/account/settings',
                      component: './Demo/account/settings',
                    },
                  ],
                },
                {
                  name: 'editor',
                  icon: 'highlight',
                  path: '/Demo/editor',
                  routes: [
                    {
                      path: '/Demo',
                      redirect: '/Demo/editor/flow',
                    },
                    {
                      name: 'flow',
                      icon: 'smile',
                      path: '/Demo/editor/flow',
                      component: './Demo/editor/flow',
                    },
                    {
                      name: 'mind',
                      icon: 'smile',
                      path: '/Demo/editor/mind',
                      component: './Demo/editor/mind',
                    },
                    {
                      name: 'koni',
                      icon: 'smile',
                      path: '/Demo/editor/koni',
                      component: './Demo/editor/koni',
                    },
                  ],
                },
              ]
            },
            {
              path: '/Nav',
              name: 'Nav',
              component: './Nav',
            },
            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  esbuild: {},
});
