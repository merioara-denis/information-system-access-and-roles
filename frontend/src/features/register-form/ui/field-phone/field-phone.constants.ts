import { Rule } from 'antd/es/form';

export const RULES: Array<Rule> = [
  {
    required: true,
    message: 'Обязательное поле для заполнения!',
  },
  {
    pattern: /^\+\d{1,3}\s?\d{10,15}$/,
    message: 'Значение не соответствует формату!',
  },
];
