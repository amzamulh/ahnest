import Switch from './Switch';
import { CheckIcon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/solid';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    variant: {
      control: 'select',
      options: [
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
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    onChange: { action: 'toggled' },
    onIcon: {
      control: { type: 'boolean' },
      mapping: {
        true: <CheckIcon />,
        false: null,
      },
    },
    offIcon: {
      control: { type: 'boolean' },
      mapping: {
        true: <XMarkIcon />,
        false: null,
      },
    },
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Primary Switch',
    checked: false,
    onIcon: <CheckIcon />,
    offIcon: <XMarkIcon />,
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Secondary Switch',
    checked: false,
  },
};

export const Info = {
  args: {
    variant: 'info',
    size: 'md',
    label: 'Info Switch',
    checked: false,
  },
};

export const Success = {
  args: {
    variant: 'success',
    size: 'md',
    label: 'Success Switch',
    checked: true,
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    size: 'md',
    label: 'Warning Switch',
    checked: false,
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    size: 'md',
    label: 'Danger Switch',
    checked: true,
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Disabled Switch',
    disabled: true,
    checked: false,
  },
};

export const Loading = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Loading Switch',
    loading: true,
  },
};

export const Sizes = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Switch variant="primary" size="xs" label="XS Switch" checked />
      <Switch variant="primary" size="sm" label="SM Switch" />
      <Switch variant="primary" size="md" label="MD Switch" checked />
      <Switch variant="primary" size="lg" label="LG Switch" />
      <Switch variant="primary" size="xl" label="XL Switch" checked />
    </div>
  ),
};
export const BorderRadius = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Switch
        variant="primary"
        size="lg"
        radius="xs"
        label="Rounded-XS Switch"
        checked
      />
      <Switch
        variant="primary"
        size="lg"
        radius="sm"
        label="Rounded-MD Switch"
        checked
      />
      <Switch
        variant="primary"
        size="lg"
        radius="md"
        label="Rounded-SM Switch"
      />
      <Switch
        variant="primary"
        size="lg"
        radius="lg"
        label="Rounded-LG Switch"
      />
      <Switch
        variant="primary"
        size="lg"
        radius="xl"
        label="Rounded-XL Switch"
        checked
      />
      <Switch
        variant="primary"
        size="lg"
        radius="full"
        label="Full-XL Switch"
        checked
      />
    </div>
  ),
};

export const LoadingVariants = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Switch variant="primary" size="md" label="Switch" loading />
      <Switch variant="success" size="md" label="Switch" loading />
      <Switch variant="danger" size="md" label="Switch" loading />
    </div>
  ),
};

export const CustomIcons = {
  args: {
    variant: 'info',
    size: 'lg',
    label: 'Custom Icon Switch',
    checked: true,
    onIcon: <SparklesIcon />,
    offIcon: <XMarkIcon />,
  },
};
