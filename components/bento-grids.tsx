"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GridPattern from '@/components/ui/GridPattern';

export default function BentoGrid() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    
    return (
      <section ref={ref} className="border-t bg-white py-24 md:py-32 overflow-hidden">
        <motion.div 
          className="container space-y-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-gray-900">Our Innovation Hub</h2>
            <p className="mt-4 text-gray-600 sm:text-lg">
              Discover the cutting-edge technologies and methodologies that power our solutions.
            </p>
          </div>
  
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[700px]">
              {/* Panel 1 - Large vertical panel */}
              <motion.div 
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 backdrop-blur-sm border-[2px] border-gray-200/60 p-8 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10">
                  <GridPattern dotColor="rgba(99, 102, 241, 0.25)" dotSize="1.5px" spacing="30px" idSuffix="blue" className="opacity-90" />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center rounded-full bg-blue-100/80 px-3 py-1 text-sm font-medium text-blue-800 mb-6">
                    🚀 Innovation
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Next-Generation Architecture</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    Our proprietary technology stack leverages the latest in cloud computing, AI, and distributed systems
                    to deliver unparalleled performance and scalability for modern enterprises.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700">Cloud-Native Infrastructure</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                      <span className="text-gray-700">AI-Powered Automation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-gray-700">Scalable Microservices</span>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 mt-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                      AI
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      ML
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                      IoT
                    </div>
                  </div>
                </div>
              </motion.div>
  
              {/* Right column with two stacked panels */}
              <div className="flex flex-col gap-6">
                {/* Panel 2 - Top right panel */}
                <motion.div 
                  className="flex-1 relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50/80 via-teal-50/60 to-cyan-50/80 backdrop-blur-sm border-[2px] border-gray-200/60 p-8 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10">
                    <GridPattern dotColor="rgba(20, 184, 166, 0.25)" dotSize="2px" spacing="30px" idSuffix="emerald" className="opacity-90" />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center rounded-full bg-emerald-100/80 px-3 py-1 text-sm font-medium text-emerald-800 mb-4">
                      📊 Analytics
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Insights</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Advanced analytics and machine learning algorithms provide actionable insights in real-time, helping
                      you make data-driven decisions faster than ever.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                        <div className="text-3xl">📈</div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="font-semibold text-gray-900">99.9% Accuracy</div>
                        <div>Real-time processing</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
  
                {/* Panel 3 - Bottom right panel */}
                <motion.div 
                  className="flex-1 relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50/80 via-red-50/60 to-pink-50/80 backdrop-blur-sm border-[2px] border-gray-200/60 p-8 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-pink-500/10">
                    <GridPattern dotColor="rgba(249, 115, 22, 0.25)" dotSize="1.5px" spacing="30px" idSuffix="orange" className="opacity-90" />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center rounded-full bg-orange-100/80 px-3 py-1 text-sm font-medium text-orange-800 mb-4">
                      🔒 Security
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Military-grade encryption and zero-trust architecture ensure your data remains secure across all
                      touchpoints.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                        <div className="text-3xl">🛡️</div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="font-semibold text-gray-900">256-bit Encryption</div>
                        <div>Zero-trust architecture</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    )
  }
