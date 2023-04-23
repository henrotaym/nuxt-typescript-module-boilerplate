import { ref } from "#imports";

export const useDisplay = (initialValue: boolean) => {
  const isDisplaying = ref(initialValue);
  const show = () => (isDisplaying.value = true);
  const hide = () => (isDisplaying.value = false);

  return {
    isDisplaying,
    show,
    hide,
  };
};
