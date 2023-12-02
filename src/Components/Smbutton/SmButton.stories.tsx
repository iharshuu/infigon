// SmButton.stories.tsx
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SmButton } from './SmButton';
import {  BsChevronRight } from 'react-icons/bs';
import { RxAvatar } from 'react-icons/rx'; 

const meta: Meta = {
  title: 'Components/SmButton',
  component: SmButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: (
      <>
        
          <p>Call Us</p>
        
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: (
      <>
          <p>Email Us</p>
        
      </>
    ),
  },
};

export const Large: StoryObj = {
  render: (args) => {
    const [activeComponent, setActiveComponent] = useState(false);
    const toggleActiveComponent = () => {
      setActiveComponent(!activeComponent);
    };

    return (
      <SmButton {...args} onClick={toggleActiveComponent}>
        <div className="flex items-center justify-center">
          <RxAvatar className="text-sm mr-1" />
          <p>{activeComponent ? 'Login' : 'Register'}</p>
        </div>
        <BsChevronRight className="ml-1" />
      </SmButton>
    );
  },
  args: {
    variant: 'success',
  },
};
