import { type FC, useState } from 'react';

interface Post {
  _id: string;
  userId: string;
  username: string;
  caption: string;
  imageUrl: string;
  likes: string[];
  comments: any[];
  createdAt: Date;
}

interface MyPostsProps {
  posts: Post[];
  onDeletePost: (postId: string) => void;
  onCreatePost: () => void;
}

export const MyPosts: FC<MyPostsProps> = ({ posts, onDeletePost, onCreatePost }) => {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <h2 className="text-base font-semibold text-slate-900">My posts</h2>
        <button
          onClick={onCreatePost}
          className="flex items-center gap-2 rounded-md bg-sky-500 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-sky-600"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add post
        </button>
      </div>

      {/* Posts Grid */}
      <div className="p-5" style={{ width: '80%', margin: '0 auto' }}>
        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <svg className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-1 text-sm font-semibold text-slate-900">No posts yet</h3>
            <p className="mb-4 text-xs text-slate-500">Start sharing your moments</p>
            <button
              onClick={onCreatePost}
              className="rounded-md bg-sky-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-sky-600"
            >
              Create your first post
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-1">
            {posts.map((post) => (
              <div
                key={post._id}
                className="group relative aspect-square overflow-hidden bg-slate-100"
                onMouseEnter={() => setHoveredPost(post._id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="h-full w-full object-cover transition group-hover:opacity-80"
                />
                
                {/* Overlay on hover */}
                {hoveredPost === post._id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="flex gap-4 text-white">
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span className="text-sm font-semibold">{post.likes.length}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.29-3.86-.81l-.28-.13-2.76.47.47-2.76-.13-.28C4.84 14.68 4.55 13.38 4.55 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                        <span className="text-sm font-semibold">{post.comments.length}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Delete button */}
                <button
                  onClick={() => onDeletePost(post._id)}
                  className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white opacity-0 transition hover:bg-red-600 group-hover:opacity-100"
                  title="Delete post"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

