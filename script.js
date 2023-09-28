// const divideButton = document.querySelector('#divideButton');

// // Attach the event listener to the button
// divideButton.addEventListener('click', divideText);

// // function divideText() {
// //   const inputText = document.getElementById('inputText').value.trim();
// //   const paragraphs = inputText.split('.');

// //   const outputParagraphs = document.getElementById('outputParagraphs');
// //   outputParagraphs.innerHTML = '';

// //   let currentParagraph = '';
// //   for (const sentence of paragraphs) {
// //     if (currentParagraph.length + sentence.length + 1 <= 280) {
// //       currentParagraph += sentence + '.';
// //     } else {
// //       addParagraph(currentParagraph);
// //       currentParagraph = sentence + '.';
// //     }
// //   }

// //   // Add the last paragraph, if any
// //   if (currentParagraph) {
// //     addParagraph(currentParagraph);
// //   }

// //   // Adjust the popup's height based on the content
// //   const popupHeight = outputParagraphs.scrollHeight + 20; // Add some padding
// //   chrome.windows.getCurrent((window) => {
// //     chrome.windows.update(window.id, { height: popupHeight });
// //   });
// // }

// function divideText() {
//   const inputText = document.getElementById('inputText').value.trim();
//   const paragraphs = inputText.split('.');

//   const outputParagraphs = document.getElementById('outputParagraphs');
//   outputParagraphs.innerHTML = '';

//   let currentParagraph = '';
//   for (const sentence of paragraphs) {
//     if (currentParagraph.length + sentence.length + 1 <= 280) {
//       currentParagraph += sentence + '.';
//     } else {
//       addParagraph(currentParagraph);
//       currentParagraph = sentence + '.';
//     }
//   }

//   // Add the last paragraph, if any
//   if (currentParagraph) {
//     addParagraph(currentParagraph);
//   }

//   // Calculate the popupHeight with a maximum limit
//   const maxHeight = window.innerHeight * 0.9; // 90% of the viewport height
//   const popupHeight = Math.min(outputParagraphs.scrollHeight + 20, maxHeight);

//   // Update the popup window's height
//   chrome.windows.getCurrent((window) => {
//     chrome.windows.update(window.id, { height: popupHeight });
//   });
// }

// //   function addParagraph(text) {

// function addParagraph(text) {
//   const outputParagraphs = document.getElementById('outputParagraphs');
//   const paragraphDiv = document.createElement('div');
//   paragraphDiv.className = 'bg-white p-4 rounded shadow flex justify-between';

//   const paragraphText = document.createElement('p');
//   paragraphText.textContent = text;

//   const copyButton = document.createElement('button');
//   copyButton.className =
//     'my-auto m-2 bg-blue-500 hover:bg-blue-600 w-8 h-8 text-white font-bold py-1 px-2 rounded flex justify-center items-center';

//   // Create and append the SVG icon
//   const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//   svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
//   svgIcon.setAttribute('fill', 'none');
//   svgIcon.setAttribute('viewBox', '0 0 24 24');
//   svgIcon.setAttribute('stroke-width', '1.5');
//   svgIcon.setAttribute('stroke', 'currentColor');
//   svgIcon.setAttribute('class', 'w-6 h-6');
//   svgIcon.innerHTML = `
// <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
// `;

//   copyButton.appendChild(svgIcon);

//   // Add a click event listener for copying text
//   copyButton.addEventListener('click', () => copyToClipboard(text));

//   paragraphDiv.appendChild(paragraphText);
//   paragraphDiv.appendChild(copyButton);

//   outputParagraphs.appendChild(paragraphDiv);
// }
// function copyToClipboard(text) {
//   const tempTextArea = document.createElement('textarea');
//   tempTextArea.value = text;
//   document.body.appendChild(tempTextArea);
//   tempTextArea.select();
//   document.execCommand('copy');
//   document.body.removeChild(tempTextArea);
//   //   alert('Paragraph copied to clipboard!');
// }
const divideButton = document.querySelector('#divideButton');

divideButton.addEventListener('click', divideText);

function divideText() {
  const inputText = document.getElementById('inputText').value.trim();
  const outputParagraphs = document.getElementById('outputParagraphs');
  outputParagraphs.innerHTML = '';

  const maxLength = 280;
  let currentParagraph = '';

  const sentences = inputText.split(/(\. |[.?!])+/);

  sentences.forEach((sentence) => {
    if (currentParagraph.length + sentence.length <= maxLength) {
      currentParagraph += sentence;
    } else {
      addParagraph(currentParagraph.trim());
      currentParagraph = sentence;
    }
  });

  if (currentParagraph) {
    addParagraph(currentParagraph.trim());
  }
}

function addParagraph(text) {
  const outputParagraphs = document.getElementById('outputParagraphs');
  const paragraphDiv = document.createElement('div');
  paragraphDiv.className = 'bg-white p-4 rounded shadow flex justify-between';

  const paragraphText = document.createElement('p');
  paragraphText.textContent = text;

  const copyButton = document.createElement('button');
  copyButton.className =
    'my-auto m-2 bg-blue-500 hover:bg-blue-600 w-8 h-8 text-white font-bold py-1 px-2 rounded flex justify-center items-center';

  const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svgIcon.setAttribute('fill', 'none');
  svgIcon.setAttribute('viewBox', '0 0 24 24');
  svgIcon.setAttribute('stroke-width', '1.5');
  svgIcon.setAttribute('stroke', 'currentColor');
  svgIcon.setAttribute('class', 'w-6 h-6');
  svgIcon.innerHTML = `
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
  `;

  copyButton.appendChild(svgIcon);

  copyButton.addEventListener('click', () => copyToClipboard(text));

  paragraphDiv.appendChild(paragraphText);
  paragraphDiv.appendChild(copyButton);

  outputParagraphs.appendChild(paragraphDiv);
}

function copyToClipboard(text) {
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);
  // alert('Paragraph copied to clipboard!');
}
