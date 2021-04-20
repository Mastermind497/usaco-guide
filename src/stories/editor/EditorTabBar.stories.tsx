import { Story } from '@storybook/react';
import React from 'react';
import EditorTabBar from '../../components/Editor/EditorTabBar';

export default {
  title: 'Editor/TabBar',
  component: EditorTabBar,
};

const Template: Story = args => (
  <div>
    <EditorTabBar {...args} />
    <div className="h-24 bg-[#1E1E1E] p-8">VSCode Editor</div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      label: 'Contributing.mdx',
    },
    {
      label: 'Prefix_Sums.mdx',
    },
  ],
  activeTab: 'Contributing.mdx',
};
