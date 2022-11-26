import React from "react"

interface ButtonProps {
  label: string;
}

export default function Button(props: ButtonProps){
  return(
    <button className="bg-red-500">{props.label}</button>
  )
}