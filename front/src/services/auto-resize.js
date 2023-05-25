/**
 * Used to make the textarea match the text size
 * @param {ChangeEvent<HTMLTextAreaElement>} e - textarea event
 * @param {number} defaultHeigth - the size of the textarea if it is empty
 */
export const autoResize = (e, defaultHeigth = 41) => {
  e.target.style.height = defaultHeigth + 'px';
  const heigth = e.target.scrollHeight;
  e.target.style.height = heigth + 'px';
};
