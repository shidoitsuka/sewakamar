import i18n, { type InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { isProduction } from "./utils";
import { en } from "../assets/locales/en/en";
import { es } from "../assets/locales/es/es";

export const defaultNS = "translations";
export const resources = {
	en: { translations: en },
	es: { translations: es },
} as const;

const i18nOptions: InitOptions = {
	defaultNS,
	ns: [defaultNS],
	debug: !isProduction,
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
	resources,
};

void i18n.use(initReactI18next).use(LanguageDetector).init(i18nOptions);
