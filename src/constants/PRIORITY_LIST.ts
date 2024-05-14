import { ComboBoxList } from '@/atom';
import { MoveDown, MoveRight, MoveUp } from 'lucide-react';

export const PRIORITY_LIST: ComboBoxList = [
  { icon: MoveDown, value: 'low', label: 'Low' },
  { icon: MoveRight, value: 'medium', label: 'Medium' },
  { icon: MoveUp, value: 'high', label: 'High' },
];
