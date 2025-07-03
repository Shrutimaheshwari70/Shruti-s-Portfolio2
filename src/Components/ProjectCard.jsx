import React from 'react';

function ProjectCard({ 
  title = "Project Title", 
  description = "Brief project description goes here.", 
  imageUrl = "https://via.placeholder.com/400x250", 
  liveUrl = "#", 
  repoUrl = "#" 
}) {
  return (
    <div className="max-w-sm bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105" 
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-pink-500 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex space-x-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-center py-2 rounded-lg transition-colors duration-300"
          >
            Live Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white text-center py-2 rounded-lg transition-colors duration-300"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
