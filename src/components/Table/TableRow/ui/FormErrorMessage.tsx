import { FieldErrors } from 'react-hook-form';

import { RowFormDataType } from '@/types/table.types';

interface IProps {
  errors: FieldErrors<RowFormDataType>;
}

export default function FormErrorMessage({ errors }: IProps) {
  const messages = Object.values(errors).map((v) => v.message);

  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>
          <p>{message}</p>
          <br />
        </li>
      ))}
    </ul>
  );
}
