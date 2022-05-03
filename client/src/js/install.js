const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  console.log('the event is:', event);
  // window.deferredprompt will store the event so it can be triggered later
  window.deferredprompt = event;
  // remove the hidden class and show the install button
  butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  console.log('Button clicked!!');
  // get event stored in window.deferredprompt and save it to promptevent variable
  const promptEvent = window.deferredPrompt;
  // check if no event stored
  if (!promptEvent) {
    // if no event stored, return
    return;
  }
  // show the install prompt
  promptEvent.prompt();
  // save the results of prompt to variable result
  const result = await promptEvent.userChoice;
  console.log('user picked:', result);
  // reset the deferred prompt back to null, prompt can only be called once
  window.deferredprompt = null;
  // remove the instlall button by adding hidden class back
  button.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // console log to confirm app was installed
  console.log('APP installed successfully');
  // set deferred prompt to null
  window.deferredprompt = null;
});
