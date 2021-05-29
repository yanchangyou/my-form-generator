import { defaultSettings } from 'fr-generator';

// 只需写配置，方便可扩展

export const helloWidgetsSettings = [
  {
    title: '基础组件(其他)',
    widgets: [{
      text: '标题',
      name: 'title',
      schema: {
        "type": "html",
        "widget": "title",
        "text": "标题",
      },
      "setting": {
        "text": {
          title: '标题',
          type: 'string',
          default: "标题"
        },
      }
    }, {
      text: '按钮',
      name: 'hello',
      schema: {
        "type": "html",
        "widget": "button",
        "text": "点击",
      },
      "setting": {
        "text": {
          title: '按钮名称',
          type: 'string',
          default: "点击"
        },
        "action": {
          "title": "动作",
          "default": "open",
          "enum": [
            "open",
            "goto",
            "execute",
            "back"
          ],
          "enumNames": [
            "执行流程",
            "当前页跳转",
            "跳转新页面",
            "返回"
          ],
          "type": "string",
          "widget": "select"
        },
        "url": {
          title: '地址',
          type: 'string',
          default: "https://www.baidu.com"
        },
      }
    }, {
      text: '链接',
      name: 'link',
      schema: {
        "type": "html",
        "widget": "link",
        "text": "点击",
      },
      "setting": {
        "text": {
          title: '按钮名称',
          type: 'string',
          default: "点击"
        },
        "action": {
          "title": "动作",
          "default": "open",
          "enum": [
            "open",
            "goto",
            "execute",
            "back"
          ],
          "enumNames": [
            "执行流程",
            "当前页跳转",
            "跳转新页面",
            "返回"
          ],
          "type": "string",
          "widget": "select"
        },
        "url": {
          title: '地址',
          type: 'string',
          default: "https://www.baidu.com"
        },
      }
    }, {
      text: '自定义输入框',
      name: 'myInput',
      schema: {
        "type": "string",
        "widget": "myInput",
        default: "默认值"
      },
      "setting": {
        "text": {
          title: '名称',
          type: 'string',
          default: "默认值"
        },
        "url": {
          title: '地址',
          type: 'string',
          default: "https://www.baidu.com"
        },
      }
    }, {
      text: '按钮区',
      name: 'buttons',
      schema: {
        "type": "object",
        "widget": "buttons",
        "text": "按钮区",
        properties: {
        },
      },
      "setting": {
      }
    }],
  }];

export const mySettings = [defaultSettings[0], ...helloWidgetsSettings, defaultSettings[1], defaultSettings[2]];
