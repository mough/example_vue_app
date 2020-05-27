function disableButton(id) {
  const button = document.getElementById(id);
  button.setAttribute('data-enabledText', button.innerHTML);
  button.disabled = true;
  button.innerHTML = '<span class="spinner-grow spinner-grow-md" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>';
}
export function disableRedirectButton() {
  disableButton('uuxLogin');
}
export function disableNextButton() {
  disableButton('nextButton');
}
export function enableNextButton() {
  const button = document.getElementById('nextButton');
  const origInnerHtml = button.getAttribute('data-enabledText');
  button.disabled = false;
  button.innerHTML = origInnerHtml;
}
export function showElement(id) {
  const x = document.getElementById(id);
  x.style.display = 'block';
}
export function hideElement(id) {
  const x = document.getElementById(id);
  x.style.display = 'none';
}
export function setShowErrorMessage(err) {
  const x = document.getElementById('errorMessage');
  x.style.display = 'block';
  x.innerText = err;
  showElement('errorMessage');
}
export function hideErrorMessage() {
  hideElement('errorMessage');
}
