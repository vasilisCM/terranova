import Carousel from "./carousel";

class GalleryLightbox {
  constructor(
    gallerySelector = ".gallery",
    galleryItemSelector = ".gallery__item",
    lightboxSelector = ".lightbox",
    lightboxCarouselTrackSelector = `${lightboxSelector} .carousel__track`,
    lightboxItemSelector = ".carousel__slide",
    lightboxImageContainerSelector = `${lightboxSelector} .lightbox__img-container`,
    closeButtonSelector = ".lightbox__close",
    lightboxHiddenClass = "lightbox--hidden",
    lightboxCaptionSelector = ".lightbox__caption"
  ) {
    this.gallerySelector = gallerySelector;
    this.galleryItemSelector = galleryItemSelector;
    this.lightboxSelector = lightboxSelector;
    this.lightboxCarouselTrackSelector = lightboxCarouselTrackSelector;
    this.lightboxItemSelector = lightboxItemSelector;
    this.lightboxImageContainerSelector = lightboxImageContainerSelector;
    this.closeButtonSelector = closeButtonSelector;
    this.lightboxHiddenClass = lightboxHiddenClass;
    this.lightboxCaptionSelector = lightboxCaptionSelector;

    this.galleryElement = null;
    this.lightboxElement = null;
    this.carousel = null;
    this.closeButton = null;

    this.handleOpenLightbox = null;
    this.handleCloseLightbox = null;
    this.handleCloseLightboxButton = null;
    this.handleEscKey = null;
  }

  init() {
    console.log("Gallery Lightbox");
    this.galleryElement = document.querySelector(this.gallerySelector);
    this.lightboxElement = document.querySelector(this.lightboxSelector);

    if (!this.galleryElement || !this.lightboxElement) {
      return;
    }

    const carouselTrack = this.lightboxElement.querySelector(
      this.lightboxCarouselTrackSelector
    );
    const lightboxImageContainers = this.lightboxElement.querySelectorAll(
      this.lightboxImageContainerSelector
    );
    const lightboxCaptions = this.lightboxElement.querySelectorAll(
      this.lightboxCaptionSelector
    );
    const carouselTrackHeight = carouselTrack.getBoundingClientRect().height;

    lightboxImageContainers.forEach((lightboxImgContainer, i) => {
      if (lightboxCaptions[i]) {
        const lightboxCaptionHeight =
          lightboxCaptions[i].getBoundingClientRect().height;
        lightboxImgContainer.style.maxHeight = `${
          carouselTrackHeight - lightboxCaptionHeight
        }px`;
      } else {
        lightboxImgContainer.style.maxHeight = `${carouselTrackHeight}px`;
      }
    });

    // console.log(carouselTrackHeight);

    // this.galleryElement = document.querySelector(this.gallerySelector);
    const galleryItems = Array.from(
      this.galleryElement.querySelectorAll(this.galleryItemSelector)
    );
    // this.lightboxElement = document.querySelector(this.lightboxSelector);

    // Carousel
    this.carousel = new Carousel(this.lightboxSelector, undefined, 1, 1);
    this.carousel.init();

    // Open the lightbox
    this.handleOpenLightbox = (event) => {
      // Check if the clicked element is a gallery item
      const clickedItem = event.target.closest(this.galleryItemSelector);

      if (clickedItem) {
        // Get the index of the clicked item
        const index = galleryItems.indexOf(clickedItem);

        // Show the lightbox
        this.lightboxElement.classList.remove(this.lightboxHiddenClass);

        // Make the corresponding carousel slide active
        if (this.carousel && this.carousel.glideInstance.go) {
          this.carousel.glideInstance.go(`=${index}`);
        }
      }
    };
    this.galleryElement.addEventListener("click", this.handleOpenLightbox);

    // Close the lightbox
    this.handleCloseLightbox = (e) => {
      let clickedElement = e.target;
      let imageContainer = clickedElement.closest(this.lightboxItemSelector);

      if (
        imageContainer &&
        !(clickedElement === imageContainer.querySelector("img"))
      ) {
        this.lightboxElement.classList.add(this.lightboxHiddenClass);
      }
    };

    this.lightboxElement.addEventListener("click", this.handleCloseLightbox);
    this.closeButton = this.lightboxElement.querySelector(
      this.closeButtonSelector
    );

    this.handleCloseLightboxButton = () => {
      this.lightboxElement.classList.add(this.lightboxHiddenClass);
    };
    this.closeButton.addEventListener("click", this.handleCloseLightboxButton);

    // Close lightbox on Esc key
    this.handleEscKey = (event) => {
      if (
        event.key === "Escape" &&
        !this.lightboxElement.classList.contains(this.lightboxHiddenClass)
      ) {
        this.lightboxElement.classList.add(this.lightboxHiddenClass);
      }
    };
    document.addEventListener("keydown", this.handleEscKey);
  }

  destroy() {
    if (!this.galleryElement || !this.lightboxElement) {
      return;
    }
    this.galleryElement.removeEventListener("click", this.handleOpenLightbox);
    this.lightboxElement.removeEventListener("click", this.handleCloseLightbox);
    if (this.closeButton) {
      this.closeButton.removeEventListener(
        "click",
        this.handleCloseLightboxButton
      );
    }
    document.removeEventListener("keydown", this.handleEscKey);

    this.galleryElement = null;
    this.lightboxElement = null;
    if (this.carousel) {
      this.carousel.destroy();
      this.carousel = null;
    }
    this.closeButton = null;
  }
}

export default GalleryLightbox;
