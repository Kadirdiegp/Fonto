'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    location: string;
    description: string;
    mainImage: string;
    gallery: string[];
  };
  reversed?: boolean;
}

export default function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % (project.gallery.length + 1);
    setCurrentImageIndex(newIndex);
    setSelectedImage(newIndex === 0 ? project.mainImage : project.gallery[newIndex - 1]);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + project.gallery.length + 1) % (project.gallery.length + 1);
    setCurrentImageIndex(newIndex);
    setSelectedImage(newIndex === 0 ? project.mainImage : project.gallery[newIndex - 1]);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6`}
      >
        {/* Main Image */}
        <div className="w-full md:w-1/2 relative">
          <div
            className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => openModal(project.mainImage, 0)}
          >
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <h3 className="text-2xl font-serif font-semibold">{project.title}</h3>
            <p className="text-primary">{project.location}</p>
          </div>
          
          <p className="text-gray-600">{project.description}</p>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-2">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => openModal(image, index + 1)}
              >
                <Image
                  src={image}
                  alt={`${project.title} Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute top-4 right-4 z-50 space-x-4">
              <button
                onClick={closeModal}
                className="text-white hover:text-primary transition-colors"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-[16/9]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={project.title}
                fill
                className="object-contain"
              />
            </motion.div>

            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
