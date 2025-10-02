import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, Target, TrendingUp, Users, BookOpen, Award } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced ML algorithms analyze your aptitude and interests'
    },
    {
      icon: Target,
      title: 'Personalized Guidance',
      description: 'Get career recommendations tailored to your unique profile'
    },
    {
      icon: TrendingUp,
      title: 'Career Roadmaps',
      description: 'Detailed pathways with courses and opportunities'
    },
    {
      icon: Users,
      title: 'Expert Insights',
      description: 'Psychology-based aptitude testing for accurate results'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Student Career Guidance - AI-Powered Career Recommendations</title>
        <meta name="description" content="Discover your ideal career path with our AI-powered career guidance system. Get personalized recommendations based on your interests and aptitude." />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 animate-gradient" />
        
        <nav className="relative z-10 glass-effect border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <Brain className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-bold gradient-text">CareerGuide AI</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-4"
              >
                <Button variant="ghost" onClick={() => navigate('/documentation')}>
                  Documentation
                </Button>
                <Button variant="outline" onClick={() => navigate('/login')}>
                  Login
                </Button>
                <Button onClick={() => navigate('/signup')} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Get Started
                </Button>
              </motion.div>
            </div>
          </div>
        </nav>

        <section className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Discover Your
                <span className="gradient-text block">Perfect Career Path</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                AI-powered career guidance system that analyzes your interests, academic performance, and aptitude to recommend the best career path for your future.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/signup')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8"
                >
                  Start Your Journey
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/documentation')}
                  className="text-lg px-8"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="floating">
                <img alt="AI Career Guidance Illustration" className="w-full rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1675023035272-3426884896f8" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative z-10 container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Why Choose CareerGuide AI?
            </h2>
            <p className="text-xl text-gray-300">
              Advanced technology meets personalized guidance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl card-hover"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative z-10 container mx-auto px-6 py-20">
          <div className="glass-effect rounded-3xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4 gradient-text">
                Ready to Find Your Path?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Take our comprehensive 20-question aptitude test and get personalized career recommendations powered by machine learning.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-12"
              >
                Get Started Now
              </Button>
            </motion.div>
          </div>
        </section>

        <footer className="relative z-10 glass-effect border-t border-white/10 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-purple-400" />
                <span className="font-bold gradient-text">CareerGuide AI</span>
              </div>
              <p className="text-gray-400">
                © 2024 Student Career Guidance System. B.E. Computer Engineering Mini Project.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;