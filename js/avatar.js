const fileChooser = document.querySelector('input[type=file]');
const preview = document.querySelector('.setup-user-pic');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});
