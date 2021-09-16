import React from 'react'
import { ExternalLinkProps } from './ExternalLink.types'

export const ExternalLink: React.FC<ExternalLinkProps> = ({ children, to }) => (
  <a
    href={to}
    className="se-external-link"
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
)
