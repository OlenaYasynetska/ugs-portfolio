import { type FC, useState } from 'react';

interface EditProfileProps {
  user: {
    id: string;
    username: string;
    fullName: string;
    avatar?: string;
    bio?: string;
    website?: string;
  };
  onSave: (data: { fullName: string; bio: string; avatar?: string; website?: string }) => void;
  onCancel: () => void;
}

export const EditProfile: FC<EditProfileProps> = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    fullName: user.fullName || '',
    username: user.username || '',
    website: user.website || '',
    bio: user.bio || '',
    avatar: user.avatar || '',
  });

  const [charCount, setCharCount] = useState(user.bio?.length || 0);
  const maxChars = 130;
  const [showAvatarInput, setShowAvatarInput] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>('');

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setFormData({ ...formData, bio: text });
      setCharCount(text.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      fullName: formData.fullName,
      bio: formData.bio,
      website: formData.website,
      avatar: formData.avatar,
    });
  };

  const handleAvatarChange = () => {
    setShowAvatarInput(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Проверяем, что это изображение
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      // Проверяем размер (максимум 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        alert('File size must be less than 5MB');
        return;
      }
      
      // Сохраняем имя файла
      setUploadedFileName(file.name);
      
      // Конвертируем файл в base64 для отображения
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-base font-semibold text-slate-900">Edit profile</h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {/* Avatar Section */}
        <div className="mb-6 flex items-start gap-6">
          <div className="flex flex-col items-center gap-2">
            {formData.avatar ? (
              <img
                src={formData.avatar}
                alt={user.username}
                className="h-20 w-20 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-2xl font-semibold text-white ${formData.avatar ? 'hidden' : ''}`}>
              {user.username.charAt(0).toUpperCase()}
            </div>
            <button
              type="button"
              onClick={handleAvatarChange}
              className="rounded-md bg-sky-500 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-sky-600"
            >
              New photo
            </button>
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold text-slate-900">{user.username}</p>
            <p className="mt-1 text-sm text-slate-500">
              About me
            </p>
          </div>
        </div>

        {/* Avatar Upload Options (показывается при клике на New photo) */}
        {showAvatarInput && (
          <div className="mb-6 space-y-4">
            {/* File Upload */}
            <div>
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

            {/* URL Input */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Or paste image URL
              </label>
              <input
                type="url"
                value={formData.avatar?.startsWith('data:') ? '' : formData.avatar}
                onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                placeholder="https://example.com/avatar.jpg"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
              <p className="mt-2 text-xs text-slate-500">
                Or use{' '}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, avatar: 'https://i.pravatar.cc/150?img=' + Math.floor(Math.random() * 70) })}
                  className="text-sky-600 hover:underline"
                >
                  random avatar
                </button>
              </p>
            </div>
          </div>
        )}

        {/* Form Fields Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Full Name Field */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>

          {/* Username Field */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Username
            </label>
            <input
              type="text"
              value={formData.username}
              readOnly
              className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-600"
            />
          </div>

          {/* Website Field */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Website
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                🔗
              </span>
              <input
                type="text"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="bit.ly/3prRh"
                className="w-full rounded-md border border-slate-300 px-3 py-2 pl-8 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* About Field */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              About
            </label>
            <div className="relative">
              <textarea
                value={formData.bio}
                onChange={handleBioChange}
                placeholder="Tell us about yourself..."
                rows={3}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
              <div className="mt-2 text-right text-xs text-slate-400">
                {charCount} / {maxChars}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-slate-300 px-6 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-sky-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-sky-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

