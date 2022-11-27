import React from 'react';
import { ComponentMeta } from '@storybook/react';
import '../../index.css'
import TextField from "./TextField";
import { ArrowRight, Search } from "lucide-react";

export default {
  title: 'TextField',
} as ComponentMeta<typeof TextField>;

function Template({children, title}: {children: React.ReactNode, title: string}) {
  return(
    <div className="flex flex-col gap-4 bg-dotted-spacing-4 bg-dotted-neutral-200">
      <div className="border border-neutral-200 rounded-xl overflow-hidden">
        <p className="p-3 bg-neutral-50 border-b text-sm">{title}</p>
        <div className="p-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export function Default(){
  return (
    <div className="flex flex-col gap-4">
      <Template title="default">
        <TextField name="name" />
      </Template>
    </div>
  )
}

export function Label(){
  return (
    <div className="flex flex-col gap-4">
      <Template title="label">
        <TextField name="name" label="Name" />
      </Template>
       <Template title="label required">
        <TextField name="name" label="Name *" required />
      </Template>
    </div>
  )
}

export function Disabled(){
  return(
    <div className="flex flex-col gap-4">
      <Template title="disabled, no value">
        <TextField name="name" disabled />
      </Template>
      <Template title="disabled, value">
        <TextField name="name" disabled value="John Doe" />
      </Template>
    </div>
  )
}

export function Error(){
  return(
     <div className="flex flex-col gap-4">
      <Template title="error">
        <TextField name="name" hasError />
      </Template>
    </div>
  )
}

export function Icon(){
  return(
    <div className="flex flex-col gap-4">
      <Template title="start icon">
        <TextField name="name" startIcon={<Search className="w-4 h-4 text-neutral-400" />} />
      </Template>
      <Template title="end icon">
        <TextField name="name" endIcon={<ArrowRight className="w-4 h-4 text-neutral-400" />} />
      </Template>
    </div>
  )
}
