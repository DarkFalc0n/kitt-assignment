import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn('bg-skeleton animate-pulse rounded-md', className)}
      {...props}
    />
  );
}

export { Skeleton };
