import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    textType: {
      control: 'select',
      options: [
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'span',
        'label',
        'strong',
        'small',
        'div',
      ],
    },
    variantText: {
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
      options: [
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        'xxl',
        'max',
        'max2',
        'max3',
        'max4',
      ],
    },
    fontWeight: {
      control: 'select',
      options: [
        'thin',
        'extraLight',
        'light',
        'normal',
        'medium',
        'semiBold',
        'bold',
        'extraBold',
        'black',
      ],
    },
    lineHeight: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
    },
    children: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export const Base = {
  args: {
    textType: 'p',
    variantText: 'base',
    size: 'md',
    fontWeight: 'normal',
    lineHeight: 'base',
    children: 'Base text',
  },
};

export const Primary = {
  args: {
    textType: 'p',
    variantText: 'primary',
    size: 'md',
    fontWeight: 'medium',
    children: 'Primary text',
  },
};

export const Heading1 = {
  args: {
    textType: 'h1',
    variantText: 'base',
    size: 'xxl',
    fontWeight: 'bold',
    children: 'Heading 1',
  },
};

export const Heading2 = {
  args: {
    textType: 'h2',
    variantText: 'base',
    size: 'xl',
    fontWeight: 'bold',
    children: 'Heading 2',
  },
};

export const SuccessText = {
  args: {
    textType: 'span',
    variantText: 'success',
    size: 'lg',
    fontWeight: 'semibold',
    children: 'Success text',
  },
};

export const WarningText = {
  args: {
    textType: 'strong',
    variantText: 'warning',
    size: 'md',
    fontWeight: 'bold',
    children: 'Warning text!',
  },
};

export const DangerText = {
  args: {
    textType: 'p',
    variantText: 'danger',
    size: 'md',
    fontWeight: 'bold',
    children: 'Danger text!',
  },
};

export const DisabledText = {
  args: {
    textType: 'span',
    variantText: 'disabled',
    size: 'sm',
    children: 'Disabled text',
  },
};

export const TextSizes = {
  render: () => (
    <div className="space-y-4">
      <Text textType="p" size="xxl" children="XXL Text (xxl)" />
      <Text textType="p" size="xl" children="XL Text (xl)" />
      <Text textType="p" size="lg" children="Large Text (lg)" />
      <Text textType="p" size="md" children="Medium Text (md)" />
      <Text textType="p" size="sm" children="Small Text (sm)" />
      <Text textType="p" size="xs" children="XS Text (xs)" />
    </div>
  ),
};

export const FontWeights = {
  render: () => (
    <div className="space-y-4">
      <Text textType="p" fontWeight="thin" children="Thin weight" />
      <Text
        textType="p"
        fontWeight="extraLight"
        children="Extra light weight"
      />
      <Text textType="p" fontWeight="light" children="Light weight" />
      <Text textType="p" fontWeight="normal" children="Normal weight" />
      <Text textType="p" fontWeight="medium" children="Medium weight" />
      <Text textType="p" fontWeight="semibold" children="Semibold weight" />
      <Text textType="p" fontWeight="bold" children="Bold weight" />
      <Text textType="p" fontWeight="extrabold" children="Extra bold weight" />
      <Text textType="p" fontWeight="black" children="Black weight" />
    </div>
  ),
};

export const TextElements = {
  render: () => (
    <div className="space-y-4">
      <Text textType="h1" children="Heading 1 (h1)" />
      <Text textType="h2" children="Heading 2 (h2)" />
      <Text textType="h3" children="Heading 3 (h3)" />
      <Text textType="h4" children="Heading 4 (h4)" />
      <Text textType="h5" children="Heading 5 (h5)" />
      <Text textType="h6" children="Heading 6 (h6)" />
      <Text textType="p" children="Paragraph (p)" />
      <Text textType="span" children="Span text" />
      <Text textType="strong" children="Strong text" />
      <Text textType="small" children="Small text" />
      <Text textType="label" children="Label text" />
    </div>
  ),
};
