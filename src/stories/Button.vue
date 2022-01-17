<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'app-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator(value) {
        return ['small', 'medium', 'large'].includes(value);
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    const classes = computed(() => ({
      'storybook-button': true,
      'storybook-button--primary': props.primary,
      'storybook-button--secondary': !props.primary,
      [`storybook-button--${props.size || 'medium'}`]: true,
    }));

    const style = computed(() => ({
      backgroundColor: props.backgroundColor,
    }));

    const onClick = () => {
      emit('click');
    };

    return {
      classes,
      style,
      onClick,
    };
  },
};
</script>

<style>
.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}

.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}

.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}

.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}

.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}

.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>
