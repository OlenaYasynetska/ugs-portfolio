import { type FC, useState } from 'react';

interface CreatePostProps {
  onSave: (imageUrl: string, caption: string) => void;
  onCancel: () => void;
}

export const CreatePost: FC<CreatePostProps> = ({ onSave, onCancel }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [uploadedFileName, setUploadedFileName] = useState<string>('');
  const maxChars = 2200;

  const handleCaptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setCaption(text);
      setCharCount(text.length);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert('File size must be less than 5MB');
        return;
      }
      
      setUploadedFileName(file.name);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (imageUrl.trim() && caption.trim()) {
      onSave(imageUrl, caption);
    } else {
      alert('Please provide an image and a caption');
    }
  };

  // Sample images for quick selection
  const sampleImages = [
    'https://picsum.photos/400/400?random=1',
    'https://picsum.photos/400/400?random=2',
    'https://picsum.photos/400/400?random=3',
    'https://picsum.photos/400/400?random=4',
    'https://picsum.photos/400/400?random=5',
    'https://picsum.photos/400/400?random=6',
  ];

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-base font-semibold text-slate-900">Create new post</h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {/* File Upload */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Upload from device
          </label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <label className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Choose file
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              <span className="text-xs text-slate-500">JPG, PNG, GIF up to 5MB</span>
            </div>
            {uploadedFileName && (
              <div className="flex items-center gap-2 rounded-md bg-green-50 px-3 py-2">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-green-700">{uploadedFileName}</span>
              </div>
            )}
          </div>
        </div>

        {/* Image URL Input */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Or paste image URL
          </label>
          <input
            type="url"
            value={imageUrl?.startsWith('data:') ? '' : imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </div>

        {/* Sample Images */}
        <div className="mb-6">
          <p className="mb-3 text-sm font-medium text-slate-700">Or choose a sample image:</p>
          <div className="grid grid-cols-6 gap-2">
            {sampleImages.map((url, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setImageUrl(url)}
                className="aspect-square overflow-hidden rounded-lg border-2 border-transparent transition hover:border-sky-500"
              >
                <img
                  src={url}
                  alt={`Sample ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Image Preview */}
        {imageUrl && (
          <div className="mb-6">
            <p className="mb-2 text-sm font-medium text-slate-700">Preview:</p>
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
              <img
                src={imageUrl}
                alt="Preview"
                className="h-64 w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Invalid+Image';
                }}
              />
            </div>
          </div>
        )}

        {/* Caption */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Caption
          </label>
          <textarea
            value={caption}
            onChange={handleCaptionChange}
            placeholder="Write a caption..."
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
          <div className="mt-2 text-right text-xs text-slate-400">
            {charCount} / {maxChars}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-slate-300 px-6 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!imageUrl.trim() || !caption.trim()}
            className="rounded-md bg-sky-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Share
          </button>
        </div>
      </form>
    </div>
  );
};

