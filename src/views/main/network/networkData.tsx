import { FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getDNSColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100,
    },
    {
      title: 'DOMAIN',
      dataIndex: 'domain',
      width: 150,
    },
    {
      title: 'PROTOCOL',
      dataIndex: 'protocol',
      width: 150,
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      width: 150,
    },
    {
      title: 'LOCATION',
      width: 150,
      dataIndex: 'location',
    },
    {
      title: 'CITY',
      width: 150,
      dataIndex: 'city',
    },
    {
      title: 'DELAY',
      width: 150,
      dataIndex: 'delay',
    },
    {
      title: 'METHOD',
      width: 150,
      dataIndex: 'method',
    },
    {
      title: 'CREATE TIME',
      width: 150,
      dataIndex: 'created_at',
    },
    {
      title: 'UPDATE TIME',
      width: 150,
      dataIndex: 'updated_at',
    },
  ];
}

export const formSchema: FormSchema[] = [
  {
    field: 'domain',
    label: 'domain',
    component: 'Input',
    required: true,
  },
  {
    field: 'protocol',
    label: 'protocol',
    component: 'Input',
    required: true,
  },
  {
    field: 'ip',
    label: 'ip',
    component: 'Input',
    required: true,
  },
  {
    field: 'location',
    label: 'location',
    component: 'Input',
    required: true,
  },
  {
    field: 'city',
    label: 'city',
    component: 'Input',
    required: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'domain',
    label: 'domain',
    component: 'Input',
    colProps: { span: 4 },
  },
  {
    field: 'status',
    label: 'status',
    component: 'Select',
    componentProps: {
      options: [
        { label: 'enable', value: '1' },
        { label: 'disble', value: '-1' },
      ],
    },
    colProps: { span: 4 },
  },
];
