"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import ServiceDetail from "../components/services/ServiceDetail";

export default function ServiceDetailClient({ serviceData, slug }) {
  const { t } = useTranslation("mainservic/services");
  
  // Map slugs to translation keys
  const translationKeyMap = {
    "corporate-services": "corporate",
    "government-services": "government", 
    "individual-services": "individual",
    "legal-support": "legalSupport"
  };
  
  const translationKey = translationKeyMap[slug] || slug;

  // Create translated service data with safe defaults
  const translatedServiceData = {
    ...serviceData,
    // Translate basic text fields
    title: t(`${translationKey}.title`, { defaultValue: serviceData.title }),
    subtitle: t(`${translationKey}.subtitle`, { defaultValue: serviceData.subtitle }),
    description: t(`${translationKey}.description`, { defaultValue: serviceData.description }),
    overview: t(`${translationKey}.overview`, { defaultValue: serviceData.overview }),
    
    // Translate services array
    services: serviceData.services?.map((service, index) => ({
      ...service,
      title: t(`${translationKey}.services.${index}.title`, { defaultValue: service.title }),
      description: t(`${translationKey}.services.${index}.description`, { defaultValue: service.description }),
      features: service.features?.map((feature, featureIndex) => 
        t(`${translationKey}.services.${index}.features.${featureIndex}`, { defaultValue: feature })
      ) || []
    })) || [],
    
    // Translate benefits array
    benefits: serviceData.benefits?.map((benefit, index) => 
      t(`${translationKey}.benefits.${index}`, { defaultValue: benefit })
    ) || [],
    
    // Translate process array
    process: serviceData.process?.map((step, index) => ({
      ...step,
      title: t(`${translationKey}.process.${index}.title`, { defaultValue: step.title }),
      description: t(`${translationKey}.process.${index}.description`, { defaultValue: step.description })
    })) || []
  };

  return <ServiceDetail serviceData={translatedServiceData} />;
}