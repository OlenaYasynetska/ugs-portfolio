import { type FC } from 'react';

interface SearchUser {
  id: string;
  username: string;
  fullName: string;
  avatar?: string;
  bio?: string;
}

interface SearchUsersProps {
  query: string;
  results: SearchUser[];
  loading: boolean;
  onSearch: (value: string) => void;
  onUserClick: (username: string) => void;
}

export const SearchUsers: FC<SearchUsersProps> = ({
  query,
  results,
  loading,
  onSearch,
  onUserClick,
}) => {
  const handleChange = (value: string) => {
    onSearch(value);
  };

  return (
    <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-semibold text-slate-900">Search Users</h3>
      
      {/* Search Input */}
      <div className="relative mb-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search by username or name..."
          className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />
      </div>

      {/* Results */}
      <div className="space-y-2">
        {loading && (
          <p className="py-4 text-center text-sm text-slate-500">Searching...</p>
        )}

        {!loading && query.trim().length > 0 && results.length === 0 && (
          <p className="py-4 text-center text-sm text-slate-500">No users found</p>
        )}

        {!loading && results.length > 0 && (
          <div className="max-h-96 space-y-1 overflow-y-auto">
            {results.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-slate-50"
              >
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-purple-400 to-pink-500">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-lg font-bold text-white">
                      {user.username[0].toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{user.username}</p>
                  <p className="text-xs text-slate-500">{user.fullName}</p>
                  {user.bio && (
                    <p className="mt-0.5 truncate text-xs text-slate-400">{user.bio}</p>
                  )}
                </div>
                <button
                  onClick={() => onUserClick(user.username)}
                  className="rounded-lg bg-sky-500 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-sky-600"
                >
                  View
                </button>
              </div>
            ))}
          </div>
        )}

        {!query && !loading && (
          <p className="py-4 text-center text-sm text-slate-400">
            Start typing to search users...
          </p>
        )}
      </div>
    </div>
  );
};

