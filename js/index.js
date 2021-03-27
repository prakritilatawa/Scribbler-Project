function removeCard(c) {
    const delCard = document.getElementById(c);
    delCard.parentNode.removeChild(delCard);
}

function openPost(writer, hd, content) {
    const url = `../html/post.html?hd=${encodeURIComponent(hd.innerText)}&author=${encodeURIComponent(writer.innerText)}&content=${encodeURIComponent(content.innerText)}`;
    window.location.href = url;
}
