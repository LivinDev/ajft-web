import { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { slides } from './data';
import 'yet-another-react-lightbox/styles.css';
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Images from '../../components/Image';

function Gallery() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  useEffect(() => {
    document.title = "Gallery | Anand Jivan Foundation";
  }, []);
  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}
<div style={{maxWidth:"1330px", margin:"0 auto"}}>
      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end',
        }}
        // open={open}
        // close={() => setOpen(false)}

        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
      </div>
    </>
    
  );
}

export default Gallery;
