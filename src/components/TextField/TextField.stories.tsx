import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../index.css'
import TextField from "./TextField";

export default {
  title: 'TextField',
} as ComponentMeta<typeof TextField>;

function Template({children, title}: {children: React.ReactNode, title: string}) {
  return(
    <div className="flex flex-col gap-4">
      <div className="border border-neutral-200 rounded-xl overflow-hidden">
        <p className="p-3 bg-neutral-50 border-b text-sm">{title}</p>
        <div className="p-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export function Value(){
  return (
    <div className="flex flex-col gap-4">
      <Template title="Text Field - Default">
        <TextField name="name" />
      </Template>
      <Template title="Text Field - Placeholder">
        <TextField name="name" placeholder="Jasper Vermeulen" />
      </Template>
      <Template title="Text Field - Label">
        <TextField name="name" label="Name" />
      </Template>
      <Template title="Text Field - Disabled">
        <TextField name="name" disabled />
      </Template>
       <Template title="Text Field - HasError">
        <TextField name="name" hasError />
      </Template>
    </div>
  )
}