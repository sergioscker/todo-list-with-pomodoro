'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef(
  ({ className, disabled, checked, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        `peer h-4 w-4 shrink-0 rounded-sm border border-white ring-offset-white focus-visible:outline-none 
      focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 
      disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-bluedark
      dark:border-white/80 dark:ring-offset-white dark:focus-visible:ring-zinc-200
      dark:data-[state=checked]:text-white`,
        className,
      )}
      disabled={disabled}
      checked={checked}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ),
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

export { Checkbox };
