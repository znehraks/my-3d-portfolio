import { IResumeCareer } from '@/types';
import { miridihCareer } from './miridih';
import { aivCareer } from './aiv';
import { fastcampusCareer } from './fastcampus';
import { muhayuCareer } from './muhayu';
import { archidrawCareer } from './archidraw';
import { lab724Career } from './lab724';

export const careers: IResumeCareer[] = [
  miridihCareer,
  aivCareer,
  fastcampusCareer,
  muhayuCareer,
  archidrawCareer,
  lab724Career,
];

export { miridihCareer, aivCareer, fastcampusCareer, muhayuCareer, archidrawCareer, lab724Career };
