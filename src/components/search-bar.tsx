'use client';

import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  searchTerm,
  onSearchTermChange,
  placeholder = 'Search by name or specialization...',
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </div>
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 w-full rounded-md shadow-sm focus:ring-primary focus:border-primary"
        aria-label="Search providers"
      />
    </div>
  );
}
