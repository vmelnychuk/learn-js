document.querySelector('.grid').addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'IMG') {
    var myEl = document.createElement('div');
    myEl.className = 'preview';
  }
}, false);