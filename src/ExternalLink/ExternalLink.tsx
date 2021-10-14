import React from 'react'
import { ExternalLinkProps } from './ExternalLink.types'

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  children,
  to,
  fullWidth,
}) => (
  <a
    href={to}
    className="izo-external-link"
    rel="noopener noreferrer"
    target="_blank"
    style={fullWidth ? { width: '100%' } : null}
  >
    {children}
  </a>
)
