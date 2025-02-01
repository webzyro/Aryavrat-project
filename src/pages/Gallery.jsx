import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { GalleryImages } from "../utils/staticData";
import Skelton from "../components/Skelton";
import { Helmet } from "react-helmet";
import ImageModal from "../components/ImageModal";

const Gallery = () => {
  const [loading, setLoading] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  useEffect(() => {
    setLoading(GalleryImages.map(() => true));
  }, [GalleryImages]);

  const handleImageLoad = (index) => {
    setLoading((prevLoading) => {
      if (!prevLoading[index]) return prevLoading; // Prevent unnecessary updates
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  const handleOpen = (image) => {
    setSelectedImg(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedImg("");
  };

  return (
    <>
      <Helmet>
        <title>Aryavrat | Gallery Page</title>
      </Helmet>

      <div className="w-full">
        <Breadcrumb title="Gallery" />
        <div className="max-w-7xl mx-auto flex flex-col gap-3 md:gap-4 my-6">
          <div className="w-full space-y-5">
            <h1 className="text-2xl md:text-4xl text-slate-800 font-bold text-center">
              Bihar Renewable Energy Development Agency
            </h1>
            <div className="w-full flex flex-wrap justify-center gap-4">
              {GalleryImages.map((image, index) => (
                <div key={image.id} className="w-full md:max-w-xs p-2 relative">
                  {loading[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Skelton />
                    </div>
                  )}
                  <img
                    src={image.img}
                    alt={`gallery-${image.id}`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                    className={`w-full h-full object-cover rounded-2xl transform transition-transform duration-300 hover:scale-105 ${
                      loading[index] ? "opacity-0" : "opacity-100"
                    }`}
                    onClick={() => handleOpen(image.img)}
                  />
                </div>
              ))}
            </div>
            {isOpen && (
              <ImageModal handleClose={handleClose} selectedImg={selectedImg} />
            )}
          </div>
          <div className="w-full space-y-5">
            <h1 className="text-2xl md:text-4xl text-slate-800 font-bold text-center">
              Private Projects
            </h1>
            <div className="w-full flex flex-wrap justify-center gap-4">
              {GalleryImages.map((image, index) => (
                <div key={image.id} className="w-full md:max-w-xs p-2 relative">
                  {loading[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Skelton />
                    </div>
                  )}
                  <img
                    src={image.img}
                    alt={`gallery-${image.id}`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                    className={`w-full h-full object-cover rounded-2xl transform transition-transform duration-300 hover:scale-105 ${
                      loading[index] ? "opacity-0" : "opacity-100"
                    }`}
                    onClick={() => handleOpen(image.img)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
