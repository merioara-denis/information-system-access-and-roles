import { FormProps } from 'antd';

export const autoComplete: FormProps['autoComplete'] = 'off';
export const labelCol: FormProps['labelCol'] = { span: 24 };
export const layout: FormProps['layout'] = 'vertical';
export const wrapperCol: FormProps['wrapperCol'] = { span: 24 };
export const style: FormProps['style'] = { width: 420, maxWidth: 420 };
export const defaultFormProps: FormProps = {
  autoComplete,
  labelCol,
  layout,
  wrapperCol,
  style,
};
