"use client";
import React, { useState } from 'react';

const ArticleTagsList = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const tags = [
        'machine learning',
        'deep learning',
        'mobile development',
        'android',
        'flutter',
        'competitive-programming',
        'react',
        'next.js',
        'safe-chat',
        'javascript',
        'data-structures',
        'computer-vision',
        'open-ai',
        'kotlin'
    ];

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <div>
            <div>
                <h3 className="tags text-indigo-900">Article Tags</h3>
            </div>
            <div className="flex flex-wrap flex-row">
                {tags.map((value, index) => (
                    <div
                        key={index}
                        className={`font-sm inline px-1 py-1 m-2 text-slate-500 border border-slate-600 rounded-md ${
                            selectedTags.includes(value)
                                ? 'bg-indigo-600 text-white'
                                : 'bg-white'
                        } cursor-pointer`}
                        onClick={() => toggleTag(value)}
                    >
                       
                            <span >{value}</span>
                     
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleTagsList;
