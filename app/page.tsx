// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/header';
import { NewsTicker } from '@/components/news-ticker'; // Import the NewsTicker component
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PandaAvatar } from '@/components/panda-avatar';
import { MoodSelector } from '@/components/mood-selector';
import { AdventureVideo } from '@/components/adventure-video';
import { VoiceControls } from '@/components/voice-controls';
// import Panda3DWrapper from '@/components/Panda3DWrapper'; // COMMENT OUT THIS LINE TO DISABLE 3D MODEL
import { useVoice } from '@/hooks/use-voice';
import { Sparkles, MessageCircle, Play } from 'lucide-react';
import { toast } from 'sonner'; // Ensure toast is imported for messages

export default function HomePage() {
  const [pandaName, setPandaName] = useState('Panda');
  const [selectedMood, setSelectedMood] = useState('happy');
  const [customMessage, setCustomMessage] = useState('');
  const [pandaGreeting, setPandaGreeting] = useState('');
  const { speak, isGenerating } = useVoice(); // isGenerating is used in this file for button disabling

  const getRandomGreeting = (name: string) => {
    const lines = [
      `Whoa. You made it. I thought you'd ghosted me.`,
      `Oh hey, didn't see you there. I mean, I did. I just played it cool.`,
      `I’m ${name}, and yes, I am this fluffy.`,
      `Welcome, brave human. I shall now require snacks.`,
      `Panda here. Hug-ready and dangerously charming.`,
      `Greetings, friend! I hope you brought bamboo.`,
      `Good morning to ya! Or afternoon. Or whatever time it is.`,
      `Psst! Come closer. I have secrets... mostly about a new adventure. I'm going on tour...shh don't tell anyone.`,
      `Is it just me, or is it always snack time?`,
      `Hello there! Ready for some fluff-tastic fun?`,
      `Don't mind me, just contemplating the meaning of bamboo.`,
      `Ah, a new face! Prepare to be charmed by my cuteness.`,
      `Reporting for duty! My duty is mostly cuddles and naps.`,
      `Hey, you! Yes, you. You look like you need a panda in your life.`,
      `Just woke up from a very important nap. What'd I miss?`
    ];
    return lines[Math.floor(Math.random() * lines.length)];
  };

  useEffect(() => {
    const greeting = getRandomGreeting(pandaName);
    setPandaGreeting(greeting);
    
    // Only speak once when component mounts with a slight delay
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel(); // Cancel any ongoing speech
      }
      speak(greeting);
    }, 500); // Delay speaking by 500ms
    
    return () => clearTimeout(timer); // Clear timeout on unmount
  }, []); // Empty dependency array to run only once on mount

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value || 'Panda';
    setPandaName(name);
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    
    // Stop any existing audio first
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    
    const moodMessages = {
      happy: `I'm ${pandaName}, and I just found a bamboo buffet. Life is good.`,
      excited: `Whoa! I'm ${pandaName}, and my excitement level is 3000. Let's freaking go!`,
      sad: `I'm ${pandaName}. Please bring snacks. Or hugs. Or both.`,
      tired: `Hey, it's ${pandaName}... I'm running on 4 hours of sleep and 3 dreams.`,
      worried: `Okay but like... what if the clouds are watching us? Just thinking out loud.`
    };
    const message = moodMessages[mood as keyof typeof moodMessages] || moodMessages.happy;
    speak(message);
  };

  const handleCustomSpeak = async () => {
    // Stop any existing audio first
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    
    if (customMessage.trim()) {
      try {
        const messageToSpeak = customMessage.toLowerCase().includes('banana')
          ? `${pandaName} says: Did you just say banana? I'm flattered.`
          : `${pandaName} says: ${customMessage}`;
        
        await speak(messageToSpeak);
        setCustomMessage('');
      } catch (error: any) {
        if (error.message && error.message.startsWith('MODERATION_FAILED:')) {
          toast.error('🚫 Inappropriate Content', {
            description: error.message.replace('MODERATION_FAILED: ', ''),
            duration: 4000
          });
        } else if (error.message && error.message.startsWith('SERVER_API_FAILED:')) {
          toast.error('🚨 Speech Generation Failed', {
            description: 'There was an issue generating speech. Please try again.',
            duration: 4000
          });
        } else {
          toast.error('An unexpected error occurred.', {
            description: error.message || 'Please try again.',
            duration: 4000
          });
        }
        console.error('Error in handleCustomSpeak:', error);
      }
    }
  };

  const handleSampleStory = () => {
    // Stop any existing audio first
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    
    const story = `Once upon a time, ${pandaName} the panda discovered a magical bamboo forest where every leaf sparkled like diamonds. As ${pandaName} wandered deeper into the forest, friendly fireflies began to dance around, lighting the way to an incredible adventure. Would you like to join ${pandaName} on this magical journey?`;
    
    speak(story);
  };

  // Handler for when the Panda avatar is clicked
  const handlePandaClick = () => {
    // Stop any existing audio first
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    
    const greeting = `Hi there! I'm ${pandaName} and I'm feeling ${selectedMood} today!`;
    speak(greeting);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <NewsTicker /> {/* Added the NewsTicker component here */}
      <div className="container mx-auto px-4 pt-48 pb-16"> {/* Adjusted padding-top for NewsTicker */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            {pandaName === 'Panda' ? 'Meet Panda' : `Meet ${pandaName}`}
          </h1>
          <p className="text-xl text-white/80 mb-4 max-w-2xl mx-auto">
            Experience magical adventures with your new panda friend! Name your panda, choose their mood, and hear them speak with AI-powered voice.
          </p>
          <p className="text-white/60 italic max-w-xl mx-auto">
            {pandaGreeting}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="glass-card rounded-3xl p-8 text-center glow">
              {/* Added onClick handler to the div wrapping PandaAvatar */}
              <div onClick={handlePandaClick} className="cursor-pointer">
                {/* Passed isGenerating to PandaAvatar and set speakOnClick to false */}
                <PandaAvatar mood={selectedMood} size="xl" animate={true} speakOnClick={false} pandaName={pandaName} isGenerating={isGenerating} />
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hello! I'm {pandaName}
                </h3>
                <p className="text-white/80 mb-6">
                  Click on me to hear my voice! I'm feeling {selectedMood} today.
                </p>
              </motion.div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                Name Your Panda
              </h4>
              <Input
                value={pandaName === 'Panda' ? '' : pandaName}
                onChange={handleNameChange}
                placeholder="Enter a name for your panda"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-blue-400" />
                Make {pandaName} Speak
              </h4>
              <div className="flex space-x-2">
                <Input
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder={`What should ${pandaName} say?`}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  onKeyPress={(e) => e.key === 'Enter' && handleCustomSpeak()}
                />
                <Button onClick={handleCustomSpeak} disabled={!customMessage.trim() || isGenerating} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Speak
                </Button>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center">
              <Button onClick={handleSampleStory} disabled={isGenerating} className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold py-3">
                <Play className="w-5 h-5 mr-2" />
                Hear a Sample Story
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="glass-card rounded-3xl p-6 glow-purple">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                3D Panda Preview
              </h3>
              <div className="w-full h-[400px] rounded-xl overflow-hidden flex items-center justify-center text-gray-400 text-center p-4">
                {/* <Panda3DWrapper /> */} {/* COMMENT OUT THIS LINE TO DISABLE 3D MODEL */}
                <p>3D Panda model temporarily disabled for deployment.</p>
                <p>Will be re-enabled soon!</p>
              </div>
              <p className="text-white/70 text-center mt-4 text-sm">
                Interactive 3D model - no subscription required!
              </p>
            </div>
            {/* Removed compact and isGenerating props from VoiceControls */}
            <VoiceControls /> 
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-16">
          <div className="glass-card rounded-3xl p-8 glow">
            <h2 className="text-3xl font-bold text-center mb-6 gradient-text">
              How are you feeling today?
            </h2>
            <p className="text-white/80 text-center mb-8">
              Choose a mood and {pandaName} will respond with the perfect emotion!
            </p>
            <MoodSelector onMoodSelect={handleMoodSelect} selectedMood={selectedMood} />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mb-16">
          <AdventureVideo
            videoUrl="https://www.youtube.com/watch?v=USKxuArodvI"
            thumbnailUrl="/adventure_awaits.png"
            title="Panda's First Adventure"
            description="Join Panda as they discover the magical world of friendship!"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-center">
          <div className="glass-card rounded-3xl p-12 glow max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Ready for More Adventures?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join {pandaName} for exclusive content, coloring books, and endless magical stories!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-xl text-lg">
                  Start Your Adventure
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 py-3 px-8 rounded-xl text-lg">
                  Already Have an Account?
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
