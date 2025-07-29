export interface CareerItem {
  year: string;
  role: string;
  company: string;
  current?: boolean;
}

export const career: CareerItem[] = [
  { year: '2013', role: 'QA Engineer', company: 'Russia, VTB Bank' },
  { year: '2014', role: 'Sr QA Engineer', company: 'Russia, Raiffeisen Bank' },
  { year: '2016', role: 'DevOps / DevOps Team Lead', company: 'Russia, Mail.ru Group (VK)' },
  { year: '2022', role: 'Lead DevOps (mobile infrastructure)', company: 'Russia, OzonTech' },
  { year: '2023+', role: 'Senior SRE Engineer (core team)', company: 'Israel, Aqua Security', current: true }
];