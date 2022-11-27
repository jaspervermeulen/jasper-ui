import React, { ReactNode } from "react"

interface TextFieldProps {
  placeholder?: string
  name: string
  disabled?: boolean
  hasError?: boolean
  ariaLabel?: string
  label?: string
  required?: boolean
  value?: string
  startIcon?: ReactNode
  endIcon?: ReactNode
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
    <label className="relative flex flex-col">
      {label}
      {props.startIcon && (
        <div className="absolute bottom-3 left-2.5">
          {props.startIcon}
        </div>
      )}
      {props.endIcon && (
        <div className="absolute bottom-3 right-2.5">
          {props.endIcon}
        </div>
      )}
      <input 
        required={required}
        aria-label={props.ariaLabel} 
        disabled={disabled} name={props.name} 
        placeholder={props.placeholder} 
        type="text" 
        value={props.value}
        className={
          classNames(
            props.startIcon ? "pl-8" : "pl-2",
            props.endIcon ? "pr-8" : "pr-2",
            hasError ? 'border-red-500 focus:!ring-2 focus:!ring-red-500 hover:border-red-700' : 'focus:!ring-2 focus:!ring-blue-500 focus:!border-blue-500 hover:border-neutral-300',
            'focus:!outline-none disabled:text-neutral-300 !outline-none !ring-0 focus:!ring-0 h-10 bg-white disabled:border-neutral-100 disabled:bg-neutral-50 disabled:cursor-not-allowed text-base md:text-sm p-2 transition w-full rounded border border-neutral-200 shadow focus:outline-blue-500 focus:outline-offset-2'
          )
        }
      >
        
      </input>
    </label>  
  )
}