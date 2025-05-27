import Icon from './Icon';
import {
  SparklesIcon,
  ArrowRightIcon,
  BellIcon,
  CogIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    iconName: {
      control: { type: null },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
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
    iconPosition: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    gap: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    inline: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export const Base = {
  args: {
    iconName: <SparklesIcon />,
    size: 'md',
    variant: 'base',
  },
};

export const Primary = {
  args: {
    iconName: <SparklesIcon />,
    size: 'md',
    variant: 'primary',
  },
};

export const Success = {
  args: {
    iconName: <SparklesIcon />,
    size: 'md',
    variant: 'success',
  },
};

export const DifferentIcons = {
  render: () => (
    <div className="flex gap-4">
      <Icon iconName={<HomeIcon />} variant="primary" />
      <Icon iconName={<BellIcon />} variant="warning" />
      <Icon iconName={<CogIcon />} variant="secondary" />
      <Icon iconName={<SparklesIcon />} variant="success" />
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon iconName={<SparklesIcon />} size="xs" />
      <Icon iconName={<SparklesIcon />} size="sm" />
      <Icon iconName={<SparklesIcon />} size="md" />
      <Icon iconName={<SparklesIcon />} size="lg" />
      <Icon iconName={<SparklesIcon />} size="xl" />
    </div>
  ),
};
