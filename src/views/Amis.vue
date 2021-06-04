<template>
  <div
    ref="renderBox"
  ></div>
</template>

<script>
import {
  alert as amisAlert,
  render as renderSchema
} from 'amis'
import ReactDOM from 'react-dom'
export default {
  name: 'Amis',
  data () {
    return {
      amisScoped: {},
      env: {},
      schema: {
        type: 'page',
        name: 'page1',
        data: {
          id: 1
        },
        body: [
          {
            type: 'form',
            name: 'form1',
            debug: true,
            mode: 'horizontal',
            controls: [
              {
                type: 'text',
                label: 'A',
                name: 'a'
              },
              {
                type: 'text',
                label: 'B',
                name: 'b'
              },
              {
                type: 'button',
                label: 'B = A',
                onClick: (e, props) => {
                  console.log(props)
                  const formDate = this.amisScoped.getComponentByName('page1.form1').getValues()
                  this.amisScoped.getComponentByName('page1.form1').setValues({ b: formDate.a })
                }
              },
              {
                type: 'button',
                label: 'dialog',
                actionType: 'dialog',
                dialog: {
                  actions: [],
                  wrapWithPanel: false,
                  data: {
                    rows: [
                      {
                        engine: 'Tridentofivjt',
                        browser: 'Internet Explorer 4.0',
                        platform: 'Win 95+',
                        version: '4',
                        grade: 'X',
                        id: 1
                      },
                      {
                        engine: 'Tridenterhvz29',
                        browser: 'Internet Explorer 5.0',
                        platform: 'Win 95+',
                        version: '5',
                        grade: 'C',
                        id: 2
                      },
                      {
                        engine: 'Tridentp9ljff',
                        browser: 'Internet Explorer 5.5',
                        platform: 'Win 95+',
                        version: '5.5',
                        grade: 'A',
                        id: 3
                      }
                    ]
                  },
                  body: {
                    type: 'list',
                    source: '$rows',
                    listItem: {
                      body: [
                        {
                          type: 'hbox',
                          columns: [
                            {
                              label: 'Engine',
                              name: 'engine'
                            },
                            {
                              name: 'version',
                              label: 'Version'
                            }
                          ]
                        }
                      ],
                      actions: [
                        {
                          type: 'action',
                          level: 'link',
                          label: '使用',
                          actionType: 'cancel',
                          onClick: (e, props) => {
                            this.amisScoped.getComponentByName('page1.form1').setValues({ b: props.data.engine })
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    }
  },

  mounted () {
    this.env = {
      confirm: (msg) => amisAlert(msg, '系统提示')
      // 其他配置实现...
    }
    ReactDOM.render(renderSchema(this.schema,
      {
        scopeRef: (ref) => (this.amisScoped = ref)
      },
      this.env
    ), this.$refs.renderBox)
  }
}
</script>
