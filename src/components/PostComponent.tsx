"use client";

import { BiasPost } from "@/data/biases";

interface PostComponentProps {
  post: BiasPost;
}

export function PostComponent({ post }: PostComponentProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 max-w-2xl mx-auto">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl">
            {post.author.avatar}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-bold text-white truncate">{post.author.name}</h3>
            <span className="text-gray-400 text-sm">@{post.author.handle}</span>
            <span className="text-gray-400 text-sm">·</span>
            <span className="text-gray-400 text-sm">2h</span>
          </div>
          <p className="text-white text-base mb-3 leading-relaxed">{post.text}</p>
          <div className="flex items-center space-x-6 text-gray-400 text-sm">
            <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{post.engagement.replies}</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-green-400 transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>{post.engagement.retweets}</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-red-400 transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{post.engagement.likes}</span>
            </div>
            <div className="hover:text-blue-400 transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}