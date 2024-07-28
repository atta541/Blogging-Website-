// src/pages/CryptoPostsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CryptoPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/crypto/');
                setPosts(response.data);
            } catch (error) {
                setError('Error fetching crypto posts');
                console.error('Error fetching crypto posts:', error);
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
        return <div className="text-red-500 text-center mt-4">{error}</div>;
    }

    return (
        <div className="min-h-screen flex flex-col">
           
            <main className="bg-gray-100 flex-1 p-6">
                <div className="container mx-auto px-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map(post => (
                            <li key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <Link to={`/crypto/${post.id}`}>
                                    <div className="flex justify-center mb-4">
                                        <img src={post.featured_image} alt={post.title} className="w-full h-64 object-cover" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                                            <div dangerouslySetInnerHTML={{ __html: post.title }} />
                                        </h3>
                                        <div className="text-gray-700 text-center mb-4">
                                            <div dangerouslySetInnerHTML={{ __html: post.content.substring(0, 100) + '...' }} />
                                        </div>
                                        <p className="text-sm text-gray-600 text-center">Uploaded on: {new Date(post.updated_at).toLocaleString()}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            
        </div>
    );
};

export default CryptoPostsPage;
