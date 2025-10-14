// Initialize Single Price Slider
function initializePriceSlider(
  minPrice = 0,
  maxPrice = 1000,
  currentValue = maxPrice
) {
  const priceSlider = document.querySelector(".woo-filters__range");
  const minPriceDisplay = document.getElementById("min-price");
  const maxPriceDisplay = document.getElementById("max-price");

  // Set slider UI
  console.log(priceSlider.min);
  priceSlider.min = minPrice;
  priceSlider.max = maxPrice;
  priceSlider.value = currentValue;
  // priceSlider.innerHTML = `
  //   <input type="range" id="price-range" min="${minPrice}" max="${maxPrice}" value="${currentValue}" step="1">
  // `;

  const rangeInput = document.getElementById("price-range");

  // Update UI when slider changes
  function updatePriceDisplay() {
    maxPriceDisplay.innerHTML = `€${rangeInput.value}`; // Update max price dynamically
  }

  rangeInput.addEventListener("input", updatePriceDisplay);
  updatePriceDisplay(); // Set initial display
}

initializePriceSlider();

// Helper function for clearing field elements
function clearFieldElements(elements) {
  elements.forEach((element) => element.remove());
}

// Helper function for updating field elements
function updateFieldElement(element, property, value) {
  if (property === "src" || property === "href") {
    element.setAttribute(property, value);
  } else {
    element[property] = value;
  }
}

function updateFilterOptions(availableFilters) {
  document.querySelectorAll(".woo-filters select").forEach((select) => {
    const attribute = select.name;
    if (availableFilters[attribute]) {
      // Preserve selected value
      const selectedValue = select.value;

      // Clear existing options
      select.innerHTML = `<option value="">Select ${attribute.replace(
        "pa_",
        ""
      )}</option>`;

      // Append only available options with proper labels
      Object.entries(availableFilters[attribute]).forEach(([slug, label]) => {
        const option = document.createElement("option");
        option.value = slug;
        option.textContent = label; // Use the proper formatted label
        if (slug === selectedValue) {
          option.selected = true;
        }
        select.appendChild(option);
      });
    }

    // Update Price Slider dynamically
    if (
      availableFilters.min_price !== undefined &&
      availableFilters.max_price !== undefined
    ) {
      initializePriceSlider(
        availableFilters.min_price,
        availableFilters.max_price,
        availableFilters.max_price
      );
    }
  });
}

// Main function
export default async function filterProducts({
  html: {
    containerSelector = ".archive-grid",
    productSelector = ".product-card",
    // buttonSelector = ".button--load-more",
    noMorePostsSelector = ".archive-grid__no-more-posts",
    loaderClass = "archive-grid__loader",
    titleSelector = ".product-card__title",
    contentSelector = ".archive-grid__content",
    excerptSelector = ".archive-grid__excerpt",
    featuredImageSelector = ".product-card__image img",
    featuredImageCaptionSelector = ".archive-grid__featured-image-caption",
    permalinkSelector = ".product-card__link",
    priceRangeSelector = ".woo-filters__range",
    customFieldMappings = [],
    makeWholePostLink = true,
  } = {},
  wordpress: {
    postType = "product",
    customTaxonomy = null,
    termSlugs = null,
    searchTerm = null,
    postsNumber = 3,
  } = {},
} = {}) {
  // Get elements

  const container = document.querySelector(containerSelector);
  //   const button = document.querySelector(buttonSelector);
  // const noMorePostsText = noMorePostsSelector
  //   ? document.querySelector(noMorePostsSelector)
  //   : null;

  // Set initial offset according to visible posts
  const offset = document.querySelectorAll(productSelector).length;

  if (!container) {
    console.error("Container or button selector is incorrect.");
    return;
  }

  // Replace the button with a loader
  const loader = document.querySelector(`.${loaderClass}`);
  loader.classList.remove("hidden");

  // Price Range
  const priceRange = document.querySelector(priceRangeSelector);

  try {
    // Prepare form data
    const formData = new FormData();
    formData.append("action", "filter_products");
    formData.append("postType", postType);
    if (customTaxonomy) formData.append("customTaxonomy", customTaxonomy);
    if (termSlugs) formData.append("termSlugs", termSlugs);
    if (searchTerm) formData.append("searchTerm", searchTerm);
    if (postsNumber) formData.append("postsNumber", postsNumber);
    if (priceRange) {
      formData.append("max_price", priceRange.value);
    }
    formData.append("offset", offset);

    // console.log("Sending data:", Object.fromEntries(formData.entries()));

    // Make AJAX request
    const apiEndPoint = wordpressObject.ajaxUrl;

    // Collect selected attributes
    document.querySelectorAll(".woo-filters select").forEach((select) => {
      if (select.value) {
        formData.append(select.name, select.value);
      }
    });

    const response = await fetch(apiEndPoint, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      console.error("Network response was not ok:", response);
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Filtered Products:", data);

    // Update filter dropdowns dynamically
    updateFilterOptions(data.available_filters);

    // const result = await response.json();

    // console.log("Received result:", result);

    if (!data) {
      throw new Error("Invalid response from API");
    }

    const productsInfo = data.products;
    // const totalProducts = data.totalProducts;
    console.log(productsInfo);

    const templateElement = document.querySelector(productSelector);
    if (!templateElement) {
      console.error("No product template found.");
      return;
    }
    const templateClone = templateElement.cloneNode(true);

    Array.from(container.children).forEach((child) => {
      if (!child.classList.contains(loaderClass)) {
        child.remove();
      }
    });

    if (productsInfo.length > 0) {
      productsInfo.forEach((post) => {
        // Clone an existing post to use as a template
        const template = templateClone.cloneNode(true);

        // Remove existing elements for mapped fields
        const elementInfo = customFieldMappings.flatMap((mapping) => {
          const fieldElements = template.querySelectorAll(mapping.selector);
          if (fieldElements.length > 0) {
            const firstElement = fieldElements[0];
            const classList = [...firstElement.classList];
            const parent = firstElement.parentNode;
            clearFieldElements(Array.from(fieldElements));
            return [{ mapping, classList, parent }];
          }
          return [];
        });

        // Update the cloned template with new data
        const titleElement = template.querySelector(titleSelector);
        const priceElement = template.querySelector(".product-card__price");
        // Update the Add to Cart button
        const addToCartElement = template.querySelector(
          ".product-card__add-to-cart"
        );

        // const contentElement = template.querySelector(contentSelector);
        // const excerptElement = template.querySelector(excerptSelector);
        const featuredImageElement = template.querySelector(
          featuredImageSelector
        );
        // const featuredImageCaptionElement = template.querySelector(
        //   featuredImageCaptionSelector
        // );

        // Paint UI
        // Title
        if (titleElement) titleElement.innerHTML = post.title; // Update the price

        if (priceElement) {
          priceElement.innerHTML = post.price_html; // Replace entire HTML to maintain WooCommerce's markup
        }

        if (addToCartElement) {
          addToCartElement.innerHTML = post.add_to_cart_html;
        }

        // Content
        // if (contentElement) contentElement.innerHTML = post.content;
        // Excerpt
        // if (excerptElement) excerptElement.innerHTML = post.excerpt;
        // Image
        console.log(featuredImageElement);
        console.log(post.image);
        if (featuredImageElement) {
          featuredImageElement.src = post.image ?? "";
          featuredImageElement.alt = post.title ?? "";
        } else {
          const featuredImageContainer = template.querySelector(
            featuredImageSelector.split(" ")[0]
          );
          if (featuredImageContainer) {
            featuredImageContainer.innerHTML = `<img src="${
              post.image ?? ""
            }" alt="${post.title ?? ""}">`;
          }
        }

        /*
        // Image Caption
        if (featuredImageCaptionElement)
          featuredImageCaptionElement.innerHTML = post.image_caption;


        // ACF
        elementInfo.forEach(({ mapping, classList, parent }) => {
          let value = post.custom_fields[mapping.fieldName];

          // Handle repeater subfields
          if (mapping.isRepeater) {
            const repeaterValues = [];
            for (let i = 0; i < value.length; i++) {
              const nestedField = `${mapping.fieldName}_${i}_${mapping.subFieldName}`;
              if (post.custom_fields[nestedField]) {
                repeaterValues.push(post.custom_fields[nestedField]);
              }
            }
            value = repeaterValues; // Store as array to iterate over
          }

          // console.log(value.length);

          // Update field element
          if (Array.isArray(value)) {
            value.forEach((subValue) => {
              const newElement = document.createElement(mapping.tag);
              newElement.classList.add(...classList);
              updateFieldElement(newElement, mapping.property, subValue);
              parent.appendChild(newElement);
            });
          } else {
            const newElement = document.createElement(mapping.tag);
            newElement.classList.add(...classList);
            updateFieldElement(newElement, mapping.property, value);
            parent.appendChild(newElement);
          }
        });

        */

        if (makeWholePostLink) {
          const linkElement = template.querySelector(permalinkSelector);
          if (linkElement) {
            linkElement.href = post.permalink;
          } else {
            template.href = post.permalink;
          }
        }

        // Append the updated template to the container
        container.appendChild(template);
      });

      loader.classList.add("hidden");
      //   loader.replaceWith(button);
    }

    // UP TO HERE!

    // else {
    //   if (noMorePostsText) {
    //     noMorePostsText.style.display = "block";
    //   }
    //   loader.replaceWith(button);
    //   button.style.display = "none";
    // }
  } catch (error) {
    console.error("Error fetching posts:", error);
    // loader.replaceWith(button);
    // if (noMorePostsText) {
    //   noMorePostsText.style.display = "block";
    // }
    // button.style.display = "none";
  }
}
