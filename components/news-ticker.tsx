"use client";

import { motion } from 'framer-motion';

export const testimonials = [
  "Sandra M.: 'My kids absolutely love Panda! The interactive features keep them engaged for hours.' ⭐⭐⭐⭐⭐",
  "Mike D.: 'My kid isn't bored and he's learning as he explores!' ⭐⭐⭐⭐⭐",
  "Lisa K.: 'Perfect educational tool. My students learn while having fun with Panda.' ⭐⭐⭐⭐⭐",
  "Jennifer L.: 'The voice feature is amazing! My daughter talks to Panda all day.' ⭐⭐⭐⭐⭐",
  "David R.: 'Best interactive app for kids. Worth every penny!' ⭐⭐⭐⭐⭐",
  "Amanda T.: 'Panda has become part of our family. The kids request him every day.' ⭐⭐⭐⭐⭐",
  // --- NEW TESTIMONIALS BELOW (from previous structured list) ---
  "Jessica L.: 'Panda makes learning so interactive and engaging. It's truly a gem for young learners!' ⭐⭐⭐⭐⭐",
  "David P.: 'My grandchild and I spend hours with Panda. It's a wonderful way to bond and learn together.' ⭐⭐⭐⭐⭐",
  "Emily R.: 'Finally, an app that holds my toddler's attention and teaches them something valuable. Panda is a lifesaver!' ⭐⭐⭐⭐⭐",
  "Chris T.: 'The customizable voice feature is brilliant! It adds such a personal touch to our daily lessons with Panda.' ⭐⭐⭐⭐⭐",
  "Sophia N.: 'Panda's focus on emotional intelligence and interactive storytelling is fantastic for child development.' ⭐⭐⭐⭐⭐",
  "Ben W.: 'Impressed by the 3D model and smooth animations. My kids think Panda is magic!' ⭐⭐⭐⭐⭐",
  "Olivia C.: 'Panda encourages a love for stories and learning. I recommend it to all families looking for quality screen time.' ⭐⭐⭐⭐⭐",
  "Daniel F.: 'Bought this for my niece and nephew. They can't get enough of Panda's adventures. Best gift ever!' ⭐⭐⭐⭐⭐",
  "Grace H.: 'The clear narration and interactive elements make Panda a great tool for speech and language development.' ⭐⭐⭐⭐⭐"
  // --- END NEW TESTIMONIALS ---
];

const julddNews = [
  "🎵 NEW MUSIC VIDEOS: Check out our latest animated music videos for kids!",
  "🐼 NEW CHARACTERS: Meet Panda's friends - Suzy is a must see! Don't miss out on Piper and Poppy!",
  "👕 NEW MERCHANDISE: Panda t-shirts, and Panda stickers available!",
  "🎨 COLORING BOOKS: Premium digital and printable coloring books featuring all your favorite characters!",
  "📚 STORY BOOKS: Interactive adventure books with voice narration coming this month!",
  "🎪 LIVE EVENTS: Join us for virtual story time sessions coming soon!",
  "🎮 GAMES: New interactive games featuring Panda and friends launching soon!"
];

export function NewsTicker() {
  return (
    <div className="fixed top-[88px] left-0 right-0 z-40 w-full overflow-hidden bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-sm border-y border-white/10 py-3">
      {/* Customer Testimonials - Scrolling Right to Left */}
      <div className="relative overflow-hidden mb-3">
        <div className="flex whitespace-nowrap animate-scroll-left">
          {/* Duplicate content for seamless loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.span
              key={index}
              className="text-white/90 text-sm font-medium px-8 flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {testimonial}
            </motion.span>
          ))}
        </div>
      </div>

      {/* JULDD Media News - Scrolling Left to Right */}
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll-right">
          {/* Duplicate content for seamless loop */}
          {[...julddNews, ...julddNews, ...julddNews].map((news, index) => (
            <motion.span
              key={index}
              className="text-white/80 text-sm font-medium px-8 flex-shrink-0 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full py-1 px-4 mr-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {news}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}