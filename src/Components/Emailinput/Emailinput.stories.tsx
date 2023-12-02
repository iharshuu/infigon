import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Emailinput } from './Emailinput';

const meta: Meta<typeof Emailinput> = {
  title: 'Example/Emailinput',
  component: Emailinput,
  tags: ['autodocs'],
};

export default meta;

type EmailinputStory = StoryObj<typeof Emailinput>;

export const Primary: EmailinputStory = {
  render: (args) => {
    // Local state to manage the email value
    const [email, setEmail] = useState('');

    // Handler to update the local state
    const handleEmailChange = (e: string) => {
      setEmail(e);
      console.log('Email value changed:', e);
    };

    return (
      <Emailinput
        {...args}
        value={email}
        onChange={handleEmailChange}
      />
    );
  },
  args: {
    label: 'Your Email',
    // The value and onChange props will be set in the render function
  },
};
