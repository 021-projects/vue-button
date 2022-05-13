# vue-button

## Project setup
```
yarn install @021-projects/vue-button
```

### Usage
```vue
import VueButton from '@021-projects/vue-button'

...
components: { VueButton }
...
```

```vue
<vue-button label="Test" />
<vue-button label="No caps" no-caps />
<vue-button label="Test" class="custom-btn" />
<vue-button label="Rounded" rounded />
<vue-button label="Rounded ripple" rounded ripple />
<vue-button label="Ripple flat" ripple flat />

<vue-button label="Small" size="sm" />
<vue-button label="Medium" size="md" />
<vue-button label="Large" size="lg" />

<vue-button label="Dark" color="black" text-color="white" />

<vue-button color="black" text-color="white" @click="showAlert"><b>Click me</b></vue-button>
```

### Properties
```typescript
/**
 * Button title 
 */
label: {
  type: String,
  default: ''
},

/**
 * Button size. Allowed xs, sm, md, lg, xl
 */
size: {
  type: String as PropType<TSize>,
  default: 'md'
},

/**
 * Button (background) color
 */
color: {
  type: String,
  default: '#27ae60'
},

/**
 * Button text color
 */
textColor: {
  type: String,
  default: '#fff'
},

/**
 * Rounded borders for button
 */
rounded: {
  type: Boolean,
  default: false
},

/**
 * Ripple effect on click
 */
ripple: {
  type: Boolean,
  default: false
},

/**
 * No shadow 
 */
flat: {
  type: Boolean,
  default: false
},

/**
 * No upppercase text transform 
 */
noCaps: {
  type: Boolean,
  default: false
},

/**
 * Disabled state
 */
disabled: {
  type: Boolean,
  default: false
}
```