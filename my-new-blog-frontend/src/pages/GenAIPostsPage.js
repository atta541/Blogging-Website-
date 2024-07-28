import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GenAIPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/genai/');
                setPosts(response.data);
            } catch (error) {
                setError('Error fetching Gen AI posts');
                console.error('Error fetching Gen AI posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="bg-gray-100 flex-1 p-4">
            <div className="space-y-6">
                {posts.map(post => (
                    <GenAIPostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
};

const GenAIPostCard = ({ post }) => (
    <Link to={`/gen-ai/${post.id}`} className="block">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row w-full md:max-w-7xl mx-auto">
            <div className="md:w-1/2 md:order-2 pl-0 md:pl-4 mb-4 md:mb-0">
                <img src={post.featured_image} alt={post.title} className="rounded-md object-cover w-full h-64 md:h-80" />
            </div>
            <div className="md:w-1/2 md:order-1 pr-0 md:pr-4 flex flex-col justify-between">
                <div>
                    <span className="text-sm text-blue-600 mb-2 block">Artificial intelligence</span>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2 underline" dangerouslySetInnerHTML={{ __html: post.title }} />
                    <div className="text-gray-700 mb-4 text-left">
                        {truncateText(post.content.replace(/<[^>]+>/g, ''), 100)}
                    </div>
                </div>
                <p className="text-sm text-gray-600">Uploaded on: {new Date(post.updated_at).toLocaleString()}</p>
            </div>
        </div>
    </Link>
);

export default GenAIPostsPage;
