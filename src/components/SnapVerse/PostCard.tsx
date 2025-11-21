import { type FC, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Send, MoreHorizontal } from 'lucide-react';

interface PostCardComment {
  _id?: string;
  id?: string;
  userId?: string;
  username?: string;
  text?: string;
  createdAt?: string | Date;
}

interface PostCardPost {
  _id?: string;
  id?: string;
  userId?: string;
  username?: string;
  userAvatar?: string;
  imageUrl?: string;
  caption?: string;
  likes?: Array<string | { _id?: string }>;
  comments?: PostCardComment[];
  createdAt?: string | Date;
}

interface PostCardProps {
  post: PostCardPost;
  currentUserId?: string;
  onLike?: (postId: string) => void;
  onComment?: (postId: string, text: string) => Promise<void> | void;
}

export const PostCard: FC<PostCardProps> = ({
  post,
  currentUserId = '',
  onLike,
  onComment,
}) => {
  const safeUsername = post.username?.trim() || 'Unknown';
  const safeCaption = post.caption || '';
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const likesArray = Array.isArray(post.likes) ? post.likes : [];
  const comments = Array.isArray(post.comments) ? post.comments : [];

  const usernameInitial = safeUsername.charAt(0).toUpperCase() || '?';
  const postId = post._id || post.id || '';
  const likesCount = likesArray.length;

  const likedByCurrentUser = useMemo(() => {
    if (!currentUserId) return false;
    return likesArray.some((like) => {
      if (typeof like === 'string') return like === currentUserId;
      if (like && typeof like === 'object') return String(like._id) === currentUserId;
      return false;
    });
  }, [likesArray, currentUserId]);

  const handleLike = () => {
    if (!postId || !onLike) return;
    onLike(postId);
  };

  const handleComment = async () => {
    if (!commentText.trim() || !onComment || !postId) return;
    await onComment(postId, commentText.trim());
    setCommentText('');
  };

  const formatDate = (dateInput?: string | Date) => {
    if (!dateInput) return 'Just now';
    const date = new Date(dateInput);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHrs < 1) return 'Just now';
    if (diffHrs < 24) return `${diffHrs}h ago`;
    return `${Math.floor(diffHrs / 24)}d ago`;
  };

  return (
    <article className="w-full max-w-md rounded-xl border border-slate-200 bg-white shadow-lg">
      {/* Header */}
      <header className="flex items-center gap-3 border-b border-slate-100 px-4 py-3">
        <Link to={`/profile/${safeUsername}`} className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-purple-400 to-pink-500">
          {post.userAvatar ? (
            <img src={post.userAvatar} alt={safeUsername} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-bold text-white">
              {usernameInitial}
            </div>
          )}
        </Link>
        <div className="flex-1">
          <Link to={`/profile/${safeUsername}`} className="block">
            <h3 className="text-sm font-semibold text-slate-900 hover:text-slate-700">{safeUsername}</h3>
          </Link>
          <p className="text-xs text-slate-500">{formatDate(post.createdAt)}</p>
        </div>
        <button
          className="text-slate-400 transition hover:text-slate-600"
          aria-label="More options"
        >
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </header>

      {/* Image */}
      <div className="aspect-square w-full overflow-hidden bg-slate-100">
        <img
          src={post.imageUrl}
          alt={post.caption}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Actions */}
      <div className="space-y-3 px-4 py-3">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className="transition hover:scale-110"
            aria-label={likedByCurrentUser ? 'Unlike' : 'Like'}
            disabled={!onLike || !postId}
          >
            <Heart 
              className={`h-7 w-7 ${likedByCurrentUser ? 'fill-red-500 text-red-500' : 'text-slate-700'}`}
            />
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="transition hover:scale-110"
            aria-label="Comment"
          >
            <MessageCircle className="h-7 w-7 text-slate-700" />
          </button>

          <button className="transition hover:scale-110" aria-label="Share">
            <Send className="h-7 w-7 text-slate-700" />
          </button>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">
            {likesCount} {likesCount === 1 ? 'like' : 'likes'}
          </p>
        </div>

        <div className="text-sm text-slate-900">
          <Link to={`/profile/${safeUsername}`} className="font-semibold hover:text-slate-700">
            {safeUsername}
          </Link>{' '}
          <span className="text-slate-700">{safeCaption}</span>
        </div>

        {comments.length > 0 && !showComments && (
          <button
            onClick={() => setShowComments(true)}
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            View all {comments.length} comments
          </button>
        )}

        {showComments && (
          <div className="space-y-2 border-t border-slate-100 pt-3">
            {comments.map((comment) => (
              <div key={comment._id || comment.id} className="text-sm">
                <Link 
                  to={`/profile/${comment.username || 'User'}`} 
                  className="font-semibold text-slate-900 hover:text-slate-700"
                >
                  {comment.username || 'User'}
                </Link>{' '}
                <span className="text-slate-700">{comment.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Comment */}
      <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-3">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleComment()}
          placeholder="Add a comment..."
          className="flex-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />
        <button
          onClick={handleComment}
          disabled={!commentText.trim() || !onComment || !postId}
          className="text-sm font-semibold text-sky-500 disabled:opacity-40 hover:text-sky-600"
        >
          Post
        </button>
      </div>
    </article>
  );
};

