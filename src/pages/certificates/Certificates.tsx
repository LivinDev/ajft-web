import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import { slides } from './data';
import Images from '../../components/Image';
import styles from './style.module.css';

// Import styles
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface CertificatePageProps {
  title?: string;
  description?: string;
}

const Certificate: React.FC<CertificatePageProps> = ({
  title = "Our Certificates",
  description = "A collection of our achievements and accreditations",
}) => {
  const [index, setIndex] = useState<number>(-1);

  const handleImageClick = (currentIndex: number) => {
    setIndex(currentIndex);
  };

  const closeLightbox = () => {
    setIndex(-1);
  };

  return (
    <div className={styles.certificateContainer}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.gallerySection}>
        <div className={styles.gridContainer}>
          <Images
            data={slides}
            onClick={handleImageClick}
          />
        </div>
      </div>

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'start',
        }}
        carousel={{
          finite: true,
          preload: 3,
        }}
        render={{
          buttonPrev: index === 0 ? () => null : undefined,
          buttonNext: index === slides.length - 1 ? () => null : undefined,
        }}
        animation={{ fade: 300 }}
        index={index}
        open={index >= 0}
        close={closeLightbox}
        slides={slides}
      />
    </div>
  );
};

export default Certificate;