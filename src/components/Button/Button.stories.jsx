// src/components/Button/Button.stories.jsx
import Button from './Button';
import { SparklesIcon } from '@heroicons/react/24/solid';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'base',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'danger',
        'disabled',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    label: { control: 'text' },
    iconPosition: { control: 'inline-radio', options: ['left', 'right'] },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  tags: ['autodocs'],
};
export const Base = {
  args: {
    variant: 'base',
    label: 'Based',
    size: 'md',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Secondary Button',
  },
};

export const Info = {
  args: {
    variant: 'info',
    size: 'md',
    label: 'Info Button',
  },
};

export const Success = {
  args: {
    variant: 'success',
    size: 'md',
    label: 'Success Button',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    size: 'md',
    label: 'Warning Button',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    size: 'md',
    label: 'Danger Button',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Disabled Button',
    disabled: true,
  },
};

export const WithIconLeft = {
  args: {
    variant: 'success',
    size: 'md',
    label: 'Button',
    icon: <SparklesIcon />,
    iconPosition: 'left',
  },
};

export const WithIconRight = {
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Button',
    icon: <SparklesIcon />,
    iconPosition: 'right',
  },
};

export const Sizes = {
  render: () => (
    <div className="space-x-4">
      <Button variant="primary" size="xl" label="Button" />
      <Button variant="secondary" size="lg" label="Button" />
      <Button variant="info" size="md" label="Button" />
      <Button variant="success" size="sm" label="Button" />
      <Button variant="danger" size="xs" label="Button" />
    </div>
  ),
};
