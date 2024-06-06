const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#bird-name').value.trim();
  const location = document.querySelector('#bird-location').value.trim();
  const description = document.querySelector('#bird-desc').value.trim();
  const picture = document.querySelector('#imageFile');
  const formData = new FormData();
  formData.append("name", name);
  formData.append("location", location);
  formData.append("description", description);
  formData.append("picture", picture.files[0]);

  // if (name && location && description && picture) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  // }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);
