export const CHANGE_SLIDER_FILTER_VALUE = 'CHANGE_SLIDER_FILTER_VALUE';

export function changeSliderFilterValue (value) {
  return {
    type: CHANGE_SLIDER_FILTER_VALUE,
    value
  };
}
