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

// Main function
export default async function loadMorePosts({
  html: {
    containerSelector = ".archive-grid",
    postSelector = ".archive-grid__post",
    buttonSelector = ".button--load-more",
    noMorePostsSelector = ".archive-grid__no-more-posts",
    loaderClass = "loader__spinner",
    titleSelector = ".archive-grid__title",
    contentSelector = ".archive-grid__content",
    excerptSelector = ".archive-grid__excerpt",
    featuredImageSelector = ".archive-grid__featured-img",
    featuredImageCaptionSelector = ".archive-grid__featured-image-caption",
    permalinkSelector = ".archive-grid__link",
    customFieldMappings = [],
    makeWholePostLink = true,
  } = {},
  wordpress: {
    postType = "post",
    customTaxonomy = null,
    termSlugs = null,
    searchTerm = null,
    postsNumber = 3,
  } = {},
} = {}) {
  // Get elements

  const container = document.querySelector(containerSelector);
  const button = document.querySelector(buttonSelector);
  const noMorePostsText = noMorePostsSelector
    ? document.querySelector(noMorePostsSelector)
    : null;

  // Set initial offset according to visible posts
  const offset = document.querySelectorAll(postSelector).length;

  if (!container || !button) {
    console.error("Container or button selector is incorrect.");
    return;
  }

  // Replace the button with a loader
  const loader = document.createElement("div");
  loader.classList.add(...loaderClass.split(" "));
  button.replaceWith(loader);

  try {
    // Prepare form data
    const formData = new FormData();
    formData.append("action", "load_more_posts");
    formData.append("postType", postType);
    if (customTaxonomy) formData.append("customTaxonomy", customTaxonomy);
    if (termSlugs) formData.append("termSlugs", termSlugs);
    if (searchTerm) formData.append("searchTerm", searchTerm);
    if (postsNumber) formData.append("postsNumber", postsNumber);

    formData.append("offset", offset);

    // console.log("Sending data:", Object.fromEntries(formData.entries()));

    // Make AJAX request
    const apiEndPoint = wordpressObject.ajaxUrl;
    const response = await fetch(apiEndPoint, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      console.error("Network response was not ok:", response);
      throw new Error("Network response was not ok");
    }

    const result = await response.json();

    // console.log("Received result:", result);

    if (!result || !result.data) {
      throw new Error("Invalid response from API");
    }

    const postsInfo = result.data.data.postsInfo;
    const totalPosts = result.data.data.totalPosts;
    // console.log(totalPosts);

    if (postsInfo.length > 0) {
      postsInfo.forEach((post) => {
        // Clone an existing post to use as a template
        const template = document.querySelector(postSelector).cloneNode(true);

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
        const contentElement = template.querySelector(contentSelector);
        const excerptElement = template.querySelector(excerptSelector);
        const featuredImageElement = template.querySelector(
          featuredImageSelector
        );
        const featuredImageCaptionElement = template.querySelector(
          featuredImageCaptionSelector
        );

        // Paint UI
        // Title
        if (titleElement) titleElement.innerHTML = post.title;
        // Content
        if (contentElement) contentElement.innerHTML = post.content;
        // Excerpt
        if (excerptElement) excerptElement.innerHTML = post.excerpt;
        // Image
        if (featuredImageElement) {
          featuredImageElement.src = post.featured_image ?? "";
          featuredImageElement.alt = post.title ?? "";
        } else {
          const featuredImageContainer = template.querySelector(
            featuredImageSelector.split(" ")[0]
          );
          if (featuredImageContainer) {
            featuredImageContainer.innerHTML = `<img src="${
              post.featured_image ?? ""
            }" alt="${post.title ?? ""}">`;
          }
        }
        // Image Caption
        if (featuredImageCaptionElement)
          featuredImageCaptionElement.innerHTML = post.featured_image_caption;

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

      loader.replaceWith(button);
    } else {
      if (noMorePostsText) {
        noMorePostsText.style.display = "block";
      }
      loader.replaceWith(button);
      button.style.display = "none";
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    loader.replaceWith(button);
    if (noMorePostsText) {
      noMorePostsText.style.display = "block";
    }
    button.style.display = "none";
  }
}
