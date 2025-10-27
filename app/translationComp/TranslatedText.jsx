"use client";

import { useTranslation } from "react-i18next";
import "../../i18n"; // ensure i18n is initialized once

export default function TranslatedText({ ns = "common", k }) {
  const { t } = useTranslation(ns);
  return <>{t(k)}</>;
}
