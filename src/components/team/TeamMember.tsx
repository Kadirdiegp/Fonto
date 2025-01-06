'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    position: string;
    bio: string;
    image: string;
    email: string;
    phone: string;
    expertise: string[];
  };
}

export default function TeamMember({ member }: TeamMemberProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative overflow-hidden rounded-xl mb-4">
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={500}
            className="object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm">Mehr erfahren</p>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-serif font-semibold mb-1">{member.name}</h3>
        <p className="text-gray">{member.position}</p>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white rounded-2xl p-6 md:p-8 z-50 md:max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="rounded-xl object-cover aspect-[3/4] w-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray mb-4">{member.position}</p>
                  <p className="text-gray-700 mb-6">{member.bio}</p>

                  <div className="space-y-4 mb-6">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <EnvelopeIcon className="h-5 w-5" />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <PhoneIcon className="h-5 w-5" />
                      {member.phone}
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
