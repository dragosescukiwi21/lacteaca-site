import React from 'react';

interface GridPatternProps {
  className?: string;
  dotColor?: string;
  dotSize?: string;
  spacing?: string;
  idSuffix?: string; // To ensure unique pattern IDs if multiple are on a page
}

const GridPattern: React.FC<GridPatternProps> = ({
  className = '',
  dotColor = 'rgba(100, 100, 100, 0.2)', // Subtle grey, adjust as needed
  dotSize = '1px',
  spacing = '20px',
  idSuffix = '1', // Default suffix for pattern ID
}) => {
  const parsedDotSize = dotSize.replace('px', '');
  const parsedSpacing = spacing.replace('px', '');
  const patternId = `grid-pattern-${idSuffix}`;

  return (
    <svg aria-hidden="true" className={`h-full w-full ${className}`}> {/* Apply className here for positioning */}
      <defs>
        <pattern
          id={patternId}
          width={parsedSpacing}
          height={parsedSpacing}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={parsedDotSize} cy={parsedDotSize} r={parsedDotSize} fill={dotColor} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

export default GridPattern;
