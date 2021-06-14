import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  "navTheme": "light",
  "primaryColor": "#1890ff",
  "layout": "top",
  "contentWidth": "Fluid",
  "fixedHeader": true,
  "fixSiderbar": true,
  "title": "Ant Design Pro",
  "pwa": false,
  "iconfontUrl": "",
  "menu": {
    "locale": true
  },
  "headerHeight": 48,
  "menuHeaderRender": false,
  "footerRender": false
}

export type { DefaultSettings };

export default proSettings;
