const shareData = {
  title: document.querySelector('title').text,
  url: location.href,
};

const btn = document.querySelector("#share");

if (!navigator.canShare) {
    btn.classList.add('d-none');
}

btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    console.log('success')
  } catch (err) {
    console.log(`Error: ${err}`);
  }
});