"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sandra M.",
    role: "Mom of 2",
    content: "My kids absolutely love Panda! They want to know when the new video and book comes out.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Mike D.",
    role: "Father",
    content: "My kid isn't bored and he's learning as he explores!",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    name: "Lisa K.",
    role: "Teacher",
    content: "Perfect educational tool. My students learn while having fun with Panda.",
    rating: 5,
    avatar: "👩‍🏫"
  },
  {
    name: "Jessica L.",
    role: "Early Childhood Educator",
    content: "Panda makes learning so interactive and engaging. It's truly a gem for young learners!",
    rating: 5,
    avatar: "🍎"
  },
  {
    name: "David P.",
    role: "Grandparent",
    content: "My grandchild and I spend hours with Panda. It's a wonderful way to bond and learn together.",
    rating: 5,
    avatar: "👴"
  },
  {
    name: "Emily R.",
    role: "Parent of a Toddler",
    content: "Finally, an app that holds my toddler's attention and teaches them something valuable. Panda is a lifesaver!",
    rating: 5,
    avatar: "👶"
  },
  {
    name: "Chris T.",
    role: "Homeschooling Parent",
    content: "The customizable name feature is brilliant! It adds such a personal touch to our daily lessons with Panda.",
    rating: 5,
    avatar: "🏡"
  },
  {
    name: "Sophia N.",
    role: "Child Psychologist",
    content: "Panda's focus on emotional intelligence and interactive storytelling is fantastic for child development.",
    rating: 5,
    avatar: "🧠"
  },
  {
    name: "Ben W.",
    role: "Tech Enthusiast Dad",
    content: "Impressive. My kids think Panda is magic!",
    rating: 5,
    avatar: "🎮"
  },
  {
    name: "Olivia C.",
    role: "Librarian",
    content: "Panda encourages a love for stories and learning. I recommend it to all families looking for quality screen time.",
    rating: 5,
    avatar: "📚"
  },
  {
    name: "Daniel F.",
    role: "Uncle",
    content: "Bought this for my niece and nephew. They can't get enough of Panda's adventures. Best gift ever!",
    rating: 5,
    avatar: "🎁"
  },
  {
    name: "Grace H.",
    role: "Speech Therapist",
    content: "The clear narration and interactive elements make Panda a great tool for speech and language development.",
    rating: 5,
    avatar: "🗣️"
  }
];

export function Testimonials() {
  return (
    <div className="py-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12 gradient-text"
      >
        What Families Are Saying
      </motion.h3>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-white/90 mb-4 italic">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{testimonial.avatar}</span>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}