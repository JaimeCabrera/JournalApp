import React from 'react'
import { RiErrorWarningLine } from 'react-icons/ri';
export const NothingSelected = () => {
  return (
    <div className="nothing-content">
      <p>
        Select something <br />
        or create a new entry
      </p>
      <RiErrorWarningLine />
    </div>
  )
}
