import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
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
    label: { control: 'text' },
    labelPosition: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Primary Checkbox',
    checked: false,
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Secondary Checkbox',
    checked: false,
  },
};

export const Info = {
  args: {
    variant: 'info',
    size: 'md',
    label: 'Info Checkbox',
    checked: false,
  },
};

export const Success = {
  args: {
    variant: 'success',
    size: 'md',
    label: 'Advanced',
    checked: true,
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    size: 'md',
    label: 'Warning Checkbox',
    checked: false,
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    size: 'md',
    label: 'Production',
    checked: true,
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Disabled Checkbox',
    disabled: true,
    checked: false,
  },
};

export const Loading = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Loading Checkbox',
    loading: true,
  },
};

export const Sizes = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Checkbox variant="primary" size="xs" label="XS Checkbox" checked />
      <Checkbox variant="primary" size="sm" label="SM Checkbox" checked />
      <Checkbox variant="primary" size="md" label="MD Checkbox" checked />
      <Checkbox variant="primary" size="lg" label="LG Checkbox" checked />
      <Checkbox variant="primary" size="xl" label="XL Checkbox" checked />
    </div>
  ),
};

export const LoadingVariants = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Checkbox variant="primary" size="md" label="Primary" loading />
      <Checkbox variant="success" size="md" label="Advanced" loading />
      <Checkbox variant="danger" size="md" label="Production" loading />
    </div>
  ),
};
