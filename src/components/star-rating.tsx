'use client';

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  starSize?: string; // Tailwind size class e.g. "h-5 w-5"
  className?: string;
  iconClassName?: string;
}

export default function StarRating({
  rating,
  maxStars = 5,
  starSize = 'h-5 w-5',
  className,
  iconClassName,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0; // Not implementing half-star visual for now, but logic is here
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`Rating: ${rating} out of ${maxStars} stars`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={cn(starSize, 'text-accent fill-accent', iconClassName)} />
      ))}
      {/* Placeholder for half star if needed in future
      {hasHalfStar && <StarHalf key="half" className={cn(starSize, 'text-accent fill-accent', iconClassName)} />}
      */}
      {[...Array(emptyStars + (hasHalfStar ? 1 : 0) )].map((_, i) => (
         // If we don't implement half star, emptyStars calculation is simpler: maxStars - fullStars
        <Star key={`empty-${i}`} className={cn(starSize, 'text-muted-foreground/50', iconClassName)} />
      ))}
    </div>
  );
}
