      <!-- Search Form -->
      <div class="search boxed">
          <div class="search__toggle search__toggle--open"></div>
          <div class="search__toggle search__toggle--close"></div>
          <div class="search__background"></div>
          <div class="search__modal-container">
              <div class="search__modal">
                  <form
                      action="<?php echo esc_url(home_url('/')); ?>"
                      method="get"
                      role="search"
                      data-open="false"
                      class="search-form">
                      <label class="search-form__label">
                          <input
                              type="search"
                              class="search-form__input search-field"
                              placeholder=""
                              value="<?php echo get_search_query(); ?>"
                              name="s"
                              title="<?php echo esc_attr_x('Search for:', 'label', 'terranova'); ?>" />
                      </label>
                      <button
                          type="submit"
                          class="search-form__button"
                          aria-label="<?php echo esc_attr_x('Search', 'submit button', 'terranova'); ?>">
                      </button>
                  </form>
              </div>
          </div>
      </div>