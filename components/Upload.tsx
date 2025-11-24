import React, { useState, useRef } from 'react';
import { Project } from '../types';
import { generateImageDescription } from '../services/geminiService';
import { UploadCloud, Wand2, Loader2, Image as ImageIcon, CheckCircle } from 'lucide-react';

interface UploadProps {
  onAddProject: (project: Project) => void;
}

const Upload: React.FC<UploadProps> = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Project['category']>('Digital');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateDescription = async () => {
    if (!imagePreview) return;
    
    setIsGenerating(true);
    try {
      // Extract base64 data (remove data:image/jpeg;base64, prefix)
      const base64Data = imagePreview.split(',')[1];
      const mimeType = imagePreview.substring(imagePreview.indexOf(':') + 1, imagePreview.indexOf(';'));
      
      const generatedText = await generateImageDescription(base64Data, mimeType);
      setDescription(generatedText);
    } catch (error) {
      alert("Could not generate description. Please check your API Key.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !imagePreview || !description) return;

    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      const newProject: Project = {
        id: Date.now().toString(),
        title,
        imageUrl: imagePreview,
        description,
        category,
        date: new Date().toISOString().split('T')[0]
      };

      onAddProject(newProject);
      
      // Reset form
      setTitle('');
      setDescription('');
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setIsSubmitting(false);
      alert("Project uploaded successfully!");
    }, 1000);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-bocha-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Upload New Work</h2>
          <p className="text-bocha-muted">Share your latest creation with the world.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Image Upload Area */}
          <div className="relative group">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl h-64 flex flex-col items-center justify-center cursor-pointer transition-all ${
                imagePreview 
                  ? 'border-bocha-accent/50 bg-black/20' 
                  : 'border-white/10 hover:border-bocha-accent hover:bg-white/5'
              }`}
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="h-full w-full object-contain p-2 rounded-2xl" />
              ) : (
                <>
                  <UploadCloud className="w-12 h-12 text-bocha-muted mb-4 group-hover:text-bocha-accent transition-colors" />
                  <p className="text-sm text-bocha-muted">Click to upload image</p>
                </>
              )}
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />
          </div>

          {/* AI Magic Button */}
          {imagePreview && (
            <button
              type="button"
              onClick={handleGenerateDescription}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-purple-900 to-indigo-900 hover:from-purple-800 hover:to-indigo-800 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-medium transition-all"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> analyzing pixels...
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5 text-yellow-300" /> Generate Description with Gemini AI
                </>
              )}
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase text-bocha-muted">Project Title</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Neon Void" 
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-bocha-accent text-white transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase text-bocha-muted">Category</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value as Project['category'])}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-bocha-accent text-white appearance-none cursor-pointer"
              >
                <option value="Digital">Digital</option>
                <option value="Brand">Brand</option>
                <option value="Motion">Motion</option>
                <option value="Print">Print</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase text-bocha-muted">Description</label>
            <textarea 
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the project..." 
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-bocha-accent text-white transition-colors resize-none"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-bocha-accent hover:bg-bocha-accentHover text-black font-bold py-4 rounded-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Publish Work <CheckCircle className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Upload;