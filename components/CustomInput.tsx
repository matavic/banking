import React from 'react';
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Control, FieldPath } from 'react-hook-form';
import { authFormSchema } from '../lib/utils';
import { z } from 'zod';

const formSchema = authFormSchema('sign-up');

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password';
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  type,
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className='form-label'>{label}</FormLabel>
          <div className='flex flex-col w-full'>
            <FormControl>
              <Input
                placeholder={placeholder}
                type={type || 'text'}
                className='input-class'
                {...field}
              />
            </FormControl>
          </div>
          <FormMessage className='form-message' />
        </div>
      )}
    />
  );
};

export default CustomInput;
