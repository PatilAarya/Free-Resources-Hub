import React from 'react';
import { BookOpen, Paintbrush, Brain, Laptop } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export function CategoryFilter({ selectedCategory, setSelectedCategory }: CategoryFilterProps) {
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`px-4 py-2 rounded-md ${!selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
      >
        All
      </button>
      <button
        onClick={() => setSelectedCategory('development')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md ${selectedCategory === 'development' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
      >
        <Laptop size={18} />
        <span>Development</span>
      </button>
      <button
        onClick={() => setSelectedCategory('design')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md ${selectedCategory === 'design' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
      >
        <Paintbrush size={18} />
        <span>Design</span>
      </button>
      <button
        onClick={() => setSelectedCategory('ai')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md ${selectedCategory === 'ai' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
      >
        <Brain size={18} />
        <span>AI</span>
      </button>
      <button
        onClick={() => setSelectedCategory('productivity')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md ${selectedCategory === 'productivity' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
      >
        <BookOpen size={18} />
        <span>Productivity</span>
      </button>
    </div>
  );
}