import React, { ReactNode } from "react"

interface TextFieldProps {
  placeholder?: string
  name: string
  disabled?: boolean
  hasError?: boolean
  ariaLabel?: string
  label?: string
  required?: boolean
}

export function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function TextField({disabled = false, hasError= false, required = false, ...props}: TextFieldProps){
  const label=[];
  if(props.label){
    label.push(
      <div className="mb-1 text-sm">
        <span>{props.label}</span>
      </div>
    )
  }

  return(
    <label>
      {label}
      <input 
        required={required}
        aria-label={props.ariaLabel} 
        disabled={disabled} name={props.name} 
        placeholder={props.placeholder} 
        type="text" 
        className={
          classNames(
            hasError ? 'border-red-500 focus:!ring-1 focus:!ring-red-500 hover:border-red-700' : 'focus:!ring-1 focus:!ring-blue-500 focus:!border-blue-500 hover:border-neutral-300',
            'focus:!outline-none !outline-none !ring-0 focus:!ring-0 h-10 disabled:opacity-40 disabled:cursor-not-allowed text-base md:text-sm p-2 transition w-full rounded border border-neutral-200 shadow focus:outline-blue-500 focus:outline-offset-2'
          )
        }
      />
    </label>  
  )
}