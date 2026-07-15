export interface ServiceOption {
  value: string;
  label: string;
}

export const SERVICE_OPTIONS: ServiceOption[] = [
  { value: "cadastru-intabulare",  label: "Cadastru și intabulare" },
  { value: "prima-inscriere",      label: "Prima înscriere în cartea funciară" },
  { value: "dezmembrare-alipire",  label: "Dezmembrare / Alipire teren" },
  { value: "actualizare-cadastrala", label: "Actualizare cadastrală" },
  { value: "ridicare-topografica", label: "Ridicare topografică" },
  { value: "trasare",              label: "Trasare construcție / limite" },
  { value: "certificat-edificare", label: "Certificat de edificare" },
  { value: "certificat-energetic", label: "Certificat energetic" },
  { value: "certificat-urbanism",  label: "Certificat de urbanism" },
  { value: "due-diligence",        label: "Verificare imobil (due diligence)" },
  { value: "extras-cf",            label: "Extras de carte funciară" },
  { value: "altele",               label: "Altele / Nu știu sigur" },
];

export function getServiceLabel(value?: string | null): string {
  if (!value) return "—";
  return SERVICE_OPTIONS.find((o) => o.value === value)?.label ?? value;
}
