import type { icons } from '@controls/Icon';

export function getIconNameByFeature(feature: string): keyof typeof icons | null {
  switch (feature) {
    case 'AC':
      return 'wind';
    case 'bathroom':
      return 'shower';
    case 'kitchen':
      return 'cupHot';
    case 'TV':
      return 'tv';
    // case 'radio':
    //   return 'radio';
    // case 'refrigerator':
    //   return 'refrigerator';
    case 'microwave':
      return 'diagram';
    // case 'gas':
    //   return 'gas';
    // case 'water':
    //   return 'water';
    default:
      return null;
  }
}

export function getIconNameByFormType(formType: string): keyof typeof icons {
  // "form": panelTruck fullyIntegrated alcove
  switch (formType) {
    case 'panelTruck':
      return 'grid1x2';
    case 'fullyIntegrated':
      return 'grid2x2';
    case 'alcove':
      return 'grid3x3';
    default:
      // @ts-expect-error Unknown form types impossible
      return '-';
  }
}
