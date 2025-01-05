import { Rule } from 'antd/es/form';

export const RULES: Array<Rule> = [
  {
    required: true,
    message: 'Обязательное поле для заполнения!',
  },
  {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Значение не соответствует формату!',
  },
];
