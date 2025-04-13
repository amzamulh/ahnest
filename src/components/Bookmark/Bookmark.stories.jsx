import Bookmark from './Bookmark';

export default {
  title: 'Components/Bookmark',
  component: Bookmark,
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
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    onToggle: { action: 'toggled' },
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Primary Bookmark',
    active: false,
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Secondary Bookmark',
    active: false,
  },
};

export const Info = {
  args: {
    variant: 'info',
    size: 'md',
    label: 'Info Bookmark',
    active: false,
  },
};

export const Success = {
  args: {
    variant: 'success',
    size: 'md',
    label: 'Success',
    active: true,
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    size: 'md',
    label: 'Warning Bookmark',
    active: false,
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    size: 'md',
    label: 'Danger',
    active: true,
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Disabled Bookmark',
    disabled: true,
    active: false,
  },
};

export const Loading = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Loading Bookmark',
    loading: true,
  },
};

export const Sizes = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Bookmark variant="primary" size="xs" label="XS Bookmark" active />
      <Bookmark variant="primary" size="sm" label="SM Bookmark" active />
      <Bookmark variant="primary" size="md" label="MD Bookmark" active />
      <Bookmark variant="primary" size="lg" label="LG Bookmark" active />
      <Bookmark variant="primary" size="xl" label="XL Bookmark" active />
    </div>
  ),
};

export const LoadingVariants = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Bookmark variant="primary" size="md" label="Book Mark" loading />
      <Bookmark variant="success" size="md" label="Book Mark" loading />
      <Bookmark variant="danger" size="md" label="Book Mark" loading />
    </div>
  ),
};
