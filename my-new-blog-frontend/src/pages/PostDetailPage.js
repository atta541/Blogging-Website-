import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

const PostDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        let url = '';
        if (location.pathname.includes('/crypto')) {
          url = `http://localhost:8000/api/crypto/${id}/`;
        } else if (location.pathname.includes('/gen-ai')) {
          url = `http://localhost:8000/api/genai/${id}/`;
        }
        
        console.log('Fetching URL:', url);
        const response = await axios.get(url);
        console.log('API Response:', response.data);
        setPost(response.data);
      } catch (error) {
        setError('Error fetching post details');
        console.error('Error fetching post details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, location.pathname]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col mt-8 text-left">
      <main className="bg-gray-100 flex-1 p-6">
        <div className="container mx-auto px-4">
          {post && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex justify-center mb-4">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-64 object-cover max-w-3xl mx-auto"
                  style={{ objectFit: 'cover', maxHeight: '400px' }}
                />
              </div>
              <div className="p-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  <div dangerouslySetInnerHTML={{ __html: post.title }} />
                </h2>
                <div className="text-gray-700 mb-4">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
                <p className="text-sm font-bold text-gray-600">Uploaded on: {new Date(post.updated_at).toLocaleString()}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PostDetailPage;
