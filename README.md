# React Project Starter

A professional React starter with Vite, ESLint, Prettier, and Storybook configured for JavaScript development.

![Project Screenshot](screenshot.png)

## Code format, structure and dev tools

- ⚡️ **Vite** - Next generation frontend tooling
- ⚛️ **React 18** - With latest features
- ✨ **ESLint** - Code quality and consistency
- 💅 **Prettier** - Code formatting

## UI development, testing, and documentation tools

- 🎨 **Storybook** - UI component development environment

## Getting Started

- 🛠 **Production-ready** - Optimized build configuration
- 📦 **Component library** - With Storybook

### Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+

# React UI Components

A collection of reusable React components—Button, Checkbox, Switch, and Bookmark—styled with TailwindCSS and documented with Storybook. Each component supports multiple variants, sizes, and states, designed for consistent, accessible, and production-ready user interfaces.

## Features

- **Components**:
  - **Button**: Customizable button with icons and loading state.
  - **Checkbox**: Flexible checkbox with label and loading state.
  - **Switch**: Toggle switch with thumb icons and loading state.
  - **Bookmark**: Toggleable bookmark/favorite icon with label and loading state.
- **Variants**: `primary`, `secondary`, `info`, `success`, `warning`, `danger`, `disabled`.
- **Sizes**: `xs`, `sm`, `md`, `lg`, `xl`.
- **BorderRadius**: `xs`, `sm`, `md`, `lg`, `xl`, `full`.
- **States**: Support for `disabled`, `loading`, and `active` (Bookmark) or `checked` (Checkbox/Switch).
- **Accessibility**: Includes `aria-label`, `aria-checked` (Checkbox/Switch), `aria-pressed` (Bookmark), and semantic markup.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amzamulh/ahnest.git
   cd ahnest
   ```

# Uses

## Button

### Usage Example

```jsx
import Button from './components/Button';

function Example() {
  return (
    <Button
      variant="primary"
      size="lg"
      label="Submit"
      icon={<FiSend />}
      iconPosition="right"
      onClick={() => console.log('Clicked!')}
    />
  );
}
```

### Button Props

| Prop           | Type        | Default   | Description                                                                                               |
| -------------- | ----------- | --------- | --------------------------------------------------------------------------------------------------------- |
| `variant`      | `string`    | `primary` | Button style variant. Options: `primary`, `secondary`, `info`, `success`, `warning`, `danger`, `disabled` |
| `size`         | `string`    | `md`      | Button size. Options: `xs`, `sm`, `md`, `lg`, `xl`                                                        |
| `label`        | `string`    | -         | Button text **(required)**                                                                                |
| `icon`         | `ReactNode` | -         | Optional icon component (e.g., from React Icons library)                                                  |
| `iconPosition` | `string`    | `left`    | Icon placement relative to text. Options: `left`, `right`                                                 |
| `onClick`      | `function`  | -         | Click handler function `(event) => void`                                                                  |
| `disabled`     | `boolean`   | `false`   | Disables the button and applies disabled styling                                                          |
| `loading`      | `boolean`   | `false`   | Shows a loading spinner and disables interaction                                                          |

## Checkbox

### Usage Example

```jsx
import Checkbox from './components/Checkbox';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      variant="primary"
      size="md"
      label="Accept terms and conditions"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}
```

### Checkbox Props

| Prop       | Type       | Default   | Description                                                                                                 |
| ---------- | ---------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| `variant`  | `string`   | `primary` | Checkbox style variant. Options: `primary`, `secondary`, `info`, `success`, `warning`, `danger`, `disabled` |
| `size`     | `string`   | `md`      | Checkbox size. Options: `xs`, `sm`, `md`, `lg`, `xl`                                                        |
| `label`    | `string`   | -         | Optional text label displayed next to checkbox                                                              |
| `checked`  | `boolean`  | `false`   | Controlled checked state of the checkbox                                                                    |
| `onChange` | `function` | -         | Change handler: `(event: React.ChangeEvent<HTMLInputElement>) => void`                                      |
| `disabled` | `boolean`  | `false`   | Disables the checkbox interaction                                                                           |
| `loading`  | `boolean`  | `false`   | Shows a loading spinner (disables interaction)                                                              |

## Switch

### Usage Example

```jsx
import Switch from './components/Switch';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

function Example() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      variant="primary"
      size="md"
      label="Enable notifications"
      checked={enabled}
      onChange={setEnabled}
      onIcon={<CheckIcon className="text-white" />}
      offIcon={<XMarkIcon className="text-gray-500" />}
    />
  );
}
```

### Switch Props

| Prop       | Type        | Default                                      | Description                                                                                               |
| ---------- | ----------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `variant`  | `string`    | `primary`                                    | Switch style variant. Options: `primary`, `secondary`, `info`, `success`, `warning`, `danger`, `disabled` |
| `size`     | `string`    | `md`                                         | Switch size. Options: `xs`, `sm`, `md`, `lg`, `xl`                                                        |
| `label`    | `string`    | -                                            | Optional text label displayed next to switch                                                              |
| `checked`  | `boolean`   | `false`                                      | Controlled state of the switch                                                                            |
| `onChange` | `function`  | -                                            | Change handler: `(checked: boolean) => void`                                                              |
| `disabled` | `boolean`   | `false`                                      | Disables the switch interaction                                                                           |
| `loading`  | `boolean`   | `false`                                      | Shows a loading spinner (disables interaction)                                                            |
| `onIcon`   | `ReactNode` | `<CheckIcon className="text-primary-600" />` | Icon displayed when switch is on                                                                          |
| `offIcon`  | `ReactNode` | `<XMarkIcon className="text-gray-400" />`    | Icon displayed when switch is off                                                                         |

## Bookmark

### Usage Example

```jsx
import Bookmark from './components/Bookmark';

function Example() {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <Bookmark
      variant="primary"
      size="lg"
      label={bookmarked ? 'Saved' : 'Save for later'}
      active={bookmarked}
      onToggle={setBookmarked}
    />
  );
}
```

### Bookmark Props

| Prop       | Type       | Default   | Description                                                                                                 |
| ---------- | ---------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| `variant`  | `string`   | `primary` | Bookmark style variant. Options: `primary`, `secondary`, `info`, `success`, `warning`, `danger`, `disabled` |
| `size`     | `string`   | `md`      | Bookmark size. Options: `xs`, `sm`, `md`, `lg`, `xl`                                                        |
| `label`    | `string`   | -         | Optional text displayed next to bookmark icon                                                               |
| `active`   | `boolean`  | `false`   | Bookmark state (filled/active when true)                                                                    |
| `onToggle` | `function` | -         | Toggle handler: `(active: boolean) => void`                                                                 |
| `disabled` | `boolean`  | `false`   | Disables interaction with the bookmark                                                                      |
| `loading`  | `boolean`  | `false`   | Shows a loading spinner (disables interaction)                                                              |
