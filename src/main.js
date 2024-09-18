import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const bodySeach = document.querySelector('body');
const seachHtml = `
<div class="container">
      <form>
        <input
          type="text"
          class="search-input"
          placeholder="Search images..."
          name="searchValue"
        />
        <button type="submit">Search</button>
      </form>
      <ul class="gallery"></ul>
</div>
`;
bodySeach.insertAdjacentHTML('afterbegin', seachHtml);
