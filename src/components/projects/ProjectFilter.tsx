'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PROJECT_CATEGORIES } from "@/lib/constants";
import type { ProjectCategory } from "@/types";

interface ProjectFilterProps {
  selectedCategory: ProjectCategory | 'All';
  onCategoryChange: (category: ProjectCategory | 'All') => void;
}

export function ProjectFilter({ selectedCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="mb-8 flex justify-center">
      <div className="w-full max-w-xs">
        <Select
          value={selectedCategory}
          onValueChange={(value: ProjectCategory | 'All') => onCategoryChange(value)}
        >
          <SelectTrigger className="w-full" aria-label="Filter projects by category">
            <SelectValue placeholder="Filter by category..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            {PROJECT_CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
