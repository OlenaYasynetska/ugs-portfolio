import { type FC, useState } from 'react';
import type { User } from '../../data/dbMassages';
import { mockUsersAPI, mockPostsAPI } from '../../data/dbMassages';

interface UserProfileProps {
  user: User;
  isOwnProfile?: boolean;
}

export const UserProfile: FC<UserProfileProps> = ({ user, isOwnProfile = false }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(user.followers);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBio, setEditedBio] = useState(user.bio || '');
  const [editedName, setEditedName] = useState(user.fullName);

  const userPosts = mockPostsAPI.getByUserId(user.id);
  const postsCount = userPosts.length;

  const handleFollow = () => {
    if (isFollowing) {
      mockUsersAPI.unfollow('current-user', user.id);
      setFollowers((prev) => prev - 1);
    } else {
      mockUsersAPI.follow('current-user', user.id);
      setFollowers((prev) => prev + 1);
    }
    setIsFollowing(!isFollowing);
  };

  const handleSaveProfile = () => {
    mockUsersAPI.updateProfile(user.id, {
      fullName: editedName,
      bio: editedBio,
    });
    setIsEditing(false);
  };

  return (
    <div className="w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Avatar */}
        <div className="flex justify-center md:justify-start">
          <div className="relative h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-1">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 text-4xl font-bold text-white">
                  {user.username[0].toUpperCase()}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-6">
          {/* Username & Actions */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <h2 className="text-2xl font-light text-slate-900">{user.username}</h2>
            
            {isOwnProfile ? (
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="rounded-lg border border-slate-300 px-6 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                {isEditing ? 'Cancel' : 'Edit profile'}
              </button>
            ) : (
              <button
                onClick={handleFollow}
                className={`rounded-lg px-6 py-1.5 text-sm font-semibold transition ${
                  isFollowing
                    ? 'border border-slate-300 text-slate-900 hover:bg-slate-50'
                    : 'bg-sky-500 text-white hover:bg-sky-600'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            )}
          </div>

          {/* Stats */}
          <div className="flex gap-8 text-base">
            <div>
              <span className="font-semibold text-slate-900">{postsCount}</span>{' '}
              <span className="text-slate-600">posts</span>
            </div>
            <div>
              <span className="font-semibold text-slate-900">{followers}</span>{' '}
              <span className="text-slate-600">followers</span>
            </div>
            <div>
              <span className="font-semibold text-slate-900">{user.following}</span>{' '}
              <span className="text-slate-600">following</span>
            </div>
          </div>

          {/* Name & Bio */}
          <div className="space-y-2">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  placeholder="Full Name"
                />
                <textarea
                  value={editedBio}
                  onChange={(e) => setEditedBio(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  placeholder="Bio"
                  rows={3}
                />
                <button
                  onClick={handleSaveProfile}
                  className="mt-2 rounded-lg bg-sky-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-sky-600"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                <p className="font-semibold text-slate-900">{user.fullName}</p>
                {user.bio && <p className="text-sm text-slate-700">{user.bio}</p>}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Posts Grid Preview */}
      {postsCount > 0 && (
        <div className="mt-8 border-t border-slate-200 pt-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Posts
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {userPosts.slice(0, 6).map((post) => (
              <div
                key={post.id}
                className="aspect-square overflow-hidden rounded-lg bg-slate-100 transition hover:opacity-80"
              >
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

