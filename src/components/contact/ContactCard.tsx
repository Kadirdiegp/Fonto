'use client';

import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';

interface ContactCardProps {
  icon: typeof MapPinIcon;
  title: string;
  content: string;
  href: string;
  actionText: string;
  index: number;
}

export default function ContactCard({
  icon: Icon,
  title,
  content,
  href,
  actionText,
  index,
}: ContactCardProps) {
  const isExternalLink = href.startsWith('https://');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="absolute -top-6 left-8">
        <div className="bg-primary text-white p-4 rounded-xl shadow-lg">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{content}</p>
        <div>
          <a
            href={href}
            target={isExternalLink ? '_blank' : undefined}
            rel={isExternalLink ? 'noopener noreferrer' : undefined}
            className="group inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {actionText}
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
