import { HB_THRESHOLDS, RISK_LEVELS } from './constants';

export const calculateRiskLevel = (hbLevel, gender) => {
  const thresholds = gender === 'Pria' ? HB_THRESHOLDS.PRIA : HB_THRESHOLDS.WANITA;
  
  if (hbLevel < thresholds.BERAT) return RISK_LEVELS.BERAT;
  if (hbLevel < thresholds.SEDANG) return RISK_LEVELS.SEDANG;
  if (hbLevel < thresholds.RINGAN) return RISK_LEVELS.SEDANG;
  return RISK_LEVELS.RINGAN;
};

export const getRiskBadgeClass = (riskLevel) => {
  switch (riskLevel) {
    case RISK_LEVELS.RINGAN:
      return 'badge-ringan';
    case RISK_LEVELS.SEDANG:
      return 'badge-sedang';
    case RISK_LEVELS.BERAT:
      return 'badge-berat';
    default:
      return 'badge-ringan';
  }
};

export const formatDate = (timestamp) => {
  if (!timestamp) return '-';
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export const formatDateShort = (timestamp) => {
  if (!timestamp) return '-';
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date);
};