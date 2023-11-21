import { Meta } from '@storybook/react';
import { Button } from '.';

const meta: Meta = {
  title: '🧩 Components/Forms/Button',
  component: Button,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = () => {
  return <Button />;
};

export const Alll = Template.bind({});
