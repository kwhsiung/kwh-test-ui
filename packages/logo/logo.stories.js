import { storiesOf } from '@storybook/vue'
import Logo from './src/App.vue'

storiesOf('JTableRow', module).add('normal', () => ({
  components: { Logo },
  template: `
      <Logo
        :values="values"
      />
    `,
  data: () => ({
    values: ['José Silva', 'email@email.com']
  })
}))
