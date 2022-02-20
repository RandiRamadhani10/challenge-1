const changeWord = (selectedText, changedText, text) => {
  const newText = text.replace(selectedText, changedText);
  return newText;
};
