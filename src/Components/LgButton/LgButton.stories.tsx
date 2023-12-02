import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { LgButton } from './LgButton';
import { BsTelephone, BsChevronRight } from 'react-icons/bs';
import { RxAvatar } from 'react-icons/rx';
import { AiFillMail } from "react-icons/ai";



const meta: Meta = {
  title: 'Example/LgButton',
  component: LgButton,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: (
      <>
        <div className="flex items-center justify-center">
          <BsTelephone className="text-xl mr-2" />
          <p>Sign in page</p>
        </div>
        <BsChevronRight className="ml-2" />
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: (
      <>
        <div className="flex items-center justify-center">
          <AiFillMail className="text-xl mr-2" />
          <p>Login with Email</p>
        </div>
        <BsChevronRight className="ml-2" />
      </>
    ),
  },
};
// export const Large: Story = {
  
//   args: {
//     variant: 'success',
//     children: (
//       <>
//         <div className="flex items-center justify-center">
//           <RxAvatar className="text-xl mr-2" />
//           <p>{activeComponent === 'SignUp' ? 'Log In instead' : 'Sign Up instead'}</p>
//         </div>
//         <BsChevronRight className="ml-2" />
//       </>
//     ),
//   },
// };
export const Large: StoryObj = {
  render: (args) => {
    // State to toggle the active component
    const [activeComponent, setActiveComponent] = useState(false);

    // Handler to toggle the state
    const toggleActiveComponent = () => {
      setActiveComponent(!activeComponent);
    };

    return (
      <LgButton {...args} onClick={toggleActiveComponent}>
        <div className="flex items-center justify-center">
          <RxAvatar className="text-xl mr-2" />
          <p>{activeComponent ? 'Log In instead' : 'Sign Up instead'}</p>
        </div>
        <BsChevronRight className="ml-2" />
      </LgButton>
    );
  },
  args: {
    variant: 'success',
    // children will be rendered from the render function
  },
};


