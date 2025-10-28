import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Copy, RefreshCw } from "lucide-react";
import { toast } from "sonner";

const AIKeywordGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [metaDescription, setMetaDescription] = useState("");

  // Mock AI generation (in a real app, this would call Lovable AI)
  const generateKeywords = () => {
    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockKeywords = [
        "credit score improvement",
        "credit card tips",
        "financial wellness",
        "CRED rewards",
        "bill payment strategies",
        "credit utilization",
        "credit report monitoring",
        "debt management",
      ];
      
      const mockMeta = "Discover proven strategies to improve your credit score and unlock better financial opportunities. Learn expert tips for managing credit cards, reducing debt, and building a strong credit profile.";
      
      setKeywords(mockKeywords);
      setMetaDescription(mockMeta);
      setIsGenerating(false);
      toast.success("Keywords generated successfully!");
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="glass p-8 rounded-2xl shadow-premium">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-primary p-3 rounded-lg">
          <Sparkles className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">AI Keyword Generator</h3>
          <p className="text-muted-foreground">Generate SEO keywords and meta descriptions</p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={generateKeywords}
        disabled={isGenerating}
        className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold mb-6 flex items-center gap-2 hover:glow-primary transition-all disabled:opacity-50"
      >
        {isGenerating ? (
          <>
            <RefreshCw className="w-5 h-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            Generate Keywords
          </>
        )}
      </motion.button>

      {keywords.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Keywords */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground">Suggested Keywords</h4>
              <button
                onClick={() => copyToClipboard(keywords.join(", "))}
                className="text-primary hover:text-primary/80 text-sm flex items-center gap-1"
              >
                <Copy className="w-4 h-4" />
                Copy All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => copyToClipboard(keyword)}
                  className="bg-muted hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors"
                >
                  {keyword}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Meta Description */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground">Meta Description</h4>
              <button
                onClick={() => copyToClipboard(metaDescription)}
                className="text-primary hover:text-primary/80 text-sm flex items-center gap-1"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {metaDescription}
              </p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            <strong>Note:</strong> This is a mock implementation. Enable Lovable Cloud to use real AI-powered keyword generation.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default AIKeywordGenerator;
