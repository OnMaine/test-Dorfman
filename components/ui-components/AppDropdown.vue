<template>
  <div class="dropdown" :tabindex @blur="visible = false">
    <div
      class="dropdown__selected"
      :class="{ 'dropdown__selected--open': visible }"
      @click="toggle"
    >
      <div class="dropdown__label-wrapper">
        <component :is="selectedValue.icon" class="dropdown__icon" />
        <span class="dropdown__label">{{ selectedValue.label }}</span>
      </div>

      <AppIconDropdownArrow
        class="dropdown__arrow"
        :class="{ 'dropdown__arrow--open': visible }"
      />
    </div>

    <ul
      class="dropdown__items"
      :class="{ 'dropdown__items--hidden': !visible }"
    >
      <li
        v-for="option of options"
        :key="option.label"
        class="dropdown__option"
        @click="select(option)"
      >
        <ClientOnly>
          <component :is="option.icon" class="dropdown__icon" />
        </ClientOnly>
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" generic="T extends { value: string; label: string; icon?: any }">
const props = withDefaults(defineProps<{
  options: T[]
  tabindex?: number
}>(), {
  tabindex: 0
})

const emit = defineEmits<{
  change: [value: string]
}>()

const selectedValue = shallowRef(props.options[0])
const visible = ref(false)

function toggle () {
  visible.value = !visible.value
}

function select (option: T) {
  selectedValue.value = option
  visible.value = false

  emit('change', option.value)
}
</script>

<style scoped lang="scss">
$color-background-default: #181b2a;
$color-background-opened: #0c0c1d;
$color-border: #313242;
$color-option-hover: #B3C8FF;

.dropdown {
  position: relative;
  width: 240px;
  height: 48px;
  text-align: left;
  outline: none;

  &__selected {
    background-color: $color-background-default;
    border-radius: var(--default-radius);
    border: 1px solid $color-border;
    padding: 12px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--open {
      background-color: $color-background-opened;
      border-radius: var(--default-radius) var(--default-radius) 0 0;
    }
  }

  &__label-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__label {
    color: white;
  }

  &__arrow {
    transition: transform 0.3s ease;

    &--open {
      stroke: white;
      transform: rotate(180deg);
    }
  }

  &__icon {
    stroke: white;
  }

  &__items {
    color: #fff;
    border-radius: 0 0 6px 6px;
    overflow: hidden;
    border-right: 1px solid $color-border;
    border-left: 1px solid $color-border;
    border-bottom: 1px solid $color-border;
    position: absolute;
    background-color: $color-background-opened;
    left: 0;
    right: 0;
    z-index: 1;

    &--hidden {
      display: none;
    }
  }

  &__option {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    padding: 7px 12px;
    cursor: pointer;

    &:hover {
      color: $color-option-hover;
      background-color: #1f1d2d;

      svg {
        stroke: $color-option-hover;
      }
    }
  }
}
</style>
