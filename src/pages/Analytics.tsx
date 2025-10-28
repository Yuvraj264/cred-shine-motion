import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, Clock, Eye, MousePointer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Analytics = () => {
  // Mock analytics data (in real app, this would come from Google Analytics 4)
  const metrics = [
    {
      icon: Eye,
      title: "Page Views",
      value: "245,839",
      change: "+12.5%",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Active Users",
      value: "48,392",
      change: "+8.2%",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Clock,
      title: "Avg. Session",
      value: "4m 32s",
      change: "+3.1%",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: TrendingUp,
      title: "Bounce Rate",
      value: "32.4%",
      change: "-5.8%",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: MousePointer,
      title: "Conversions",
      value: "2,847",
      change: "+15.3%",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: BarChart3,
      title: "Engagement Rate",
      value: "68.9%",
      change: "+7.4%",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  const topPages = [
    { page: "/", views: "89,432", percentage: "36.5%" },
    { page: "/blog", views: "54,219", percentage: "22.1%" },
    { page: "/analytics", views: "38,892", percentage: "15.8%" },
    { page: "/blog/credit-score-tips", views: "31,445", percentage: "12.8%" },
    { page: "/blog/rewards-guide", views: "21,851", percentage: "8.9%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Analytics Dashboard
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-time insights powered by Google Analytics 4
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass p-6 rounded-2xl shadow-premium hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${metric.bgColor} p-3 rounded-lg`}>
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <span className={`text-sm font-semibold ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-sm text-muted-foreground mb-1">{metric.title}</h3>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Pages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass p-8 rounded-2xl shadow-premium"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Top Pages
              </h2>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={page.page} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground font-mono">{page.page}</span>
                      <span className="text-foreground font-semibold">{page.views}</span>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: page.percentage }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="absolute inset-y-0 left-0 bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Traffic Sources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-8 rounded-2xl shadow-premium"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-secondary" />
                Traffic Sources
              </h2>
              <div className="space-y-6">
                {[
                  { source: "Organic Search", percentage: "45.2%", value: "111,234" },
                  { source: "Direct", percentage: "28.7%", value: "70,567" },
                  { source: "Social Media", percentage: "16.3%", value: "40,072" },
                  { source: "Referral", percentage: "9.8%", value: "24,096" },
                ].map((source, index) => (
                  <div key={source.source}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground font-medium">{source.source}</span>
                      <div className="text-right">
                        <div className="text-foreground font-semibold">{source.value}</div>
                        <div className="text-sm text-muted-foreground">{source.percentage}</div>
                      </div>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: source.percentage }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="absolute inset-y-0 left-0 bg-gradient-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 glass p-6 rounded-xl"
          >
            <p className="text-muted-foreground text-center">
              <strong className="text-foreground">Note:</strong> Replace the Google Analytics ID in index.html
              with your actual GA4 measurement ID to track real data.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analytics;
