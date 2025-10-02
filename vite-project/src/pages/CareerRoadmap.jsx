import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, BookOpen, Briefcase, GraduationCap, TrendingUp, ArrowLeft, CheckCircle } from 'lucide-react';
import { careerRoadmaps } from '@/data/careerRoadmaps';

const CareerRoadmap = () => {
  const navigate = useNavigate();
  const { career } = useParams();
  const [roadmap, setRoadmap] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!currentUser) {
      navigate('/login');
      return;
    }

    const careerData = careerRoadmaps[career];
    if (!careerData) {
      navigate('/student-dashboard');
      return;
    }
    setRoadmap(careerData);
  }, [career, navigate]);

  if (!roadmap) return null;

  return (
    <>
      <Helmet>
        <title>{career} Roadmap - Career Guidance System</title>
        <meta name="description" content={`Explore the complete career roadmap for ${career} including courses, skills, and opportunities.`} />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 animate-gradient" />
        
        <nav className="relative z-10 glass-effect border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-bold gradient-text">Career Roadmap</span>
              </div>
              <Button variant="ghost" onClick={() => navigate('/test-results')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Results
              </Button>
            </div>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">{career}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {roadmap.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <GraduationCap className="w-12 h-12 text-purple-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Educational Path</h2>
              <div className="space-y-3">
                {roadmap.education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{edu}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <BookOpen className="w-12 h-12 text-pink-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Key Skills Required</h2>
              <div className="flex flex-wrap gap-2">
                {roadmap.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-effect rounded-3xl p-8 mb-12"
          >
            <Briefcase className="w-12 h-12 text-blue-400 mb-4" />
            <h2 className="text-3xl font-bold mb-6 gradient-text">Career Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roadmap.careers.map((careerOption, index) => (
                <div
                  key={index}
                  className="p-4 glass-effect rounded-xl hover:border-purple-400/50 border border-transparent transition-all"
                >
                  <h3 className="font-semibold text-lg mb-2">{careerOption.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{careerOption.description}</p>
                  <p className="text-purple-400 font-semibold">{careerOption.salary}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-3xl p-8 mb-12"
          >
            <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
            <h2 className="text-3xl font-bold mb-6 gradient-text">Recommended Courses & Certifications</h2>
            <div className="space-y-4">
              {roadmap.courses.map((course, index) => (
                <div
                  key={index}
                  className="p-6 glass-effect rounded-xl"
                >
                  <h3 className="font-bold text-xl mb-2">{course.name}</h3>
                  <p className="text-gray-400 mb-3">{course.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-purple-400">Duration: {course.duration}</span>
                    <span className="text-pink-400">Platform: {course.platform}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-effect rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Industry Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Growth Prospects</h3>
                <p className="text-gray-300">{roadmap.insights.growth}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-pink-400">Salary Range</h3>
                <p className="text-gray-300">{roadmap.insights.salary}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Future Trends</h3>
                <p className="text-gray-300">{roadmap.insights.trends}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <Button
              size="lg"
              onClick={() => navigate('/student-dashboard')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-12"
            >
              Back to Dashboard
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CareerRoadmap;