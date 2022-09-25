import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';

function SimpleImageViewer({ photos }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    //   const images = [
    //     'https://placeimg.com/1200/800/nature',
    //     'https://placeimg.com/800/1200/nature',
    //     'https://placeimg.com/1920/1080/nature',
    //     'https://placeimg.com/1500/500/nature',
    //   ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div className='m-3 grid gap-1 grid-cols-4 md:grid-cols-6 md:gap-2 lg:grid-cols-8 lg:gap-3'>
            {photos.map((photo, index) => (
                <div className='border-2 border-black'>
                <Image
                    src={photo.url}
                    onClick={() => openImageViewer(index)}
                    width="150"
                    height="75"
                    key={index}
                    style={{ margin: '2px', cursor: 'pointer' }}
                    alt=""
                    
                />
                </div>
            ))}

            {isViewerOpen && (
                <ImageViewer
                    src={photos.map(photo => photo.url)}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />
            )}
        </div>
    );
}

export default SimpleImageViewer;