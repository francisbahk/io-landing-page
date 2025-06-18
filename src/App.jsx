import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ArrowDown, CheckCircle, Zap, Target, TrendingUp, Play, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold">IO</div>
          <div className="flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#results" className="text-gray-300 hover:text-white transition-colors">Results</a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
          </div>
          <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6">
            Reserve Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Badge className="bg-gray-800/50 text-gray-300 border-gray-700 px-4 py-2 text-sm backdrop-blur-sm">
              Revolutionary Caffeine Technology
            </Badge>
          </div>

          <h1 className="text-6xl md:text-8xl font-thin mb-8 leading-none">
            Smarter Coffee.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-light">
              Better Focus.
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-400 mb-12 font-light max-w-3xl mx-auto">
            Intelligent caffeine delivery that adapts to your body—down to the sip.
          </p>

          <div className="flex justify-center">
            <Button size="lg" variant="ghost" className="text-blue-400 hover:text-blue-300 rounded-full px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-500 w-6 h-6" />
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30 px-4 py-2 mb-8">
              The Problem
            </Badge>
            <h2 className="text-5xl md:text-6xl font-thin mb-6">
              Caffeine
              <br />
              doesn't adapt.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Energy drinks, pre-workouts, and triple-shot lattes all deliver the same thing:
              a caffeine spike followed by an inevitable crash.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative max-w-2xl">
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl p-12 border border-red-500/20 backdrop-blur-sm">
                <div className="space-y-6">
                  {[
                    "Energy spikes and crashes",
                    "Zero personalization",
                    "Tolerance buildup over time"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-2xl bg-red-900/20">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <span className="text-gray-300 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2 mb-8">
              The Solution
            </Badge>
            <h2 className="text-5xl md:text-7xl font-thin mb-8">
              Adaptive caffeine
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                delivery.
              </span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              Our intelligent system learns your metabolism and delivers precise doses
              to keep you in your optimal performance zone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl border border-blue-500/30 p-8 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-24 h-24 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-light text-blue-300 mb-4">Steady Performance</h3>
                  <p className="text-gray-400">No spikes. No crashes. Just sustained energy.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Personalized Dosing",
                    description: "AI learns your metabolism and caffeine sensitivity to deliver the perfect amount."
                  },
                  {
                    icon: Zap,
                    title: "Real-time Adjustment",
                    description: "Continuous monitoring adjusts caffeine release based on your current needs."
                  },
                  {
                    icon: CheckCircle,
                    title: "Seamless Integration",
                    description: "Drink normally. Our technology handles the optimization invisibly."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex space-x-6 p-6 rounded-2xl hover:bg-gray-900/50 transition-colors">
                    <div className="flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 mb-8">
              Proven Results
            </Badge>
            <h2 className="text-5xl md:text-6xl font-thin mb-8">
              Real users.
              <br />
              Real improvements.
            </h2>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="p-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 text-center">
              <div className="text-6xl font-thin text-blue-400 mb-4">82%</div>
              <p className="text-xl text-gray-300">increased focus within 3 days</p>
            </Card>
            <Card className="p-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 text-center">
              <div className="text-6xl font-thin text-purple-400 mb-4">81%</div>
              <p className="text-xl text-gray-300">stayed in peak performance zone</p>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                quote: "As a day trader, precision matters. This device helped me avoid my usual afternoon crash without overloading in the morning.",
                author: "Max T.",
                role: "Day Trader, NYC"
              },
              {
                quote: "I've used every nootropic out there. This is the first system that actually learned how I function.",
                author: "Taylor K.",
                role: "Biohacker, Austin"
              },
              {
                quote: "The dosing algorithm feels like magic. I never think about caffeine anymore—it just works.",
                author: "Dr. L. Huang",
                role: "Emergency Physician"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-thin mb-8">
            Ready to optimize
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              your performance?
            </span>
          </h2>

          <p className="text-2xl text-gray-400 mb-12 font-light">
            Join thousands who've eliminated caffeine guesswork forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-12 py-6 text-xl font-medium">
              Reserve Your IO Vessel
            </Button>
            <Button size="lg" variant="ghost" className="text-gray-300 hover:text-white rounded-full px-12 py-6 text-xl font-medium">
              Take Focus Quiz
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <p className="text-gray-500 text-lg">
            Limited early access. Reserve now to secure your spot.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-semibold mb-6 md:mb-0">IO</div>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2025 IO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;