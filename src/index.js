// @flow
export { withLocalize } from "./withLocalize";
export { withLocalize as localize } from "./withLocalize"; // Deprecated - replaced by withLocalize
export { Translate } from "./Translate";

export {
  localeReducer,
  initialize,
  addTranslation,
  addTranslationForLanguage,
  setLanguages,
  setActiveLanguage,
  getTranslate,
  getActiveLanguage,
  getLanguages,
  getTranslations,
  getOptions
} from "./locale";
