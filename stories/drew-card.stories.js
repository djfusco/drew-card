import { html } from 'lit';
import '../src/drew-card.js';

export default {
  title: 'DrewCard',
  component: 'drew-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <drew-card
      style="--drew-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </drew-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
