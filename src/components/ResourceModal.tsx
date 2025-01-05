import React from 'react';
import { Download } from 'lucide-react';
import { Resource } from '../types';
import { CommentSection } from './CommentSection';

interface ResourceModalProps {
  resource: Resource;
  onClose: () => void;
}

export function ResourceModal({ resource, onClose }: ResourceModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{resource.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <img
            src={resource.imageUrl}
            alt={resource.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 mb-4">{resource.description}</p>
          <a
            href={resource.downloadUrl}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Download size={18} />
            <span>Download Resource</span>
          </a>
          <CommentSection comments={resource.comments} />
        </div>
      </div>
    </div>
  );
}