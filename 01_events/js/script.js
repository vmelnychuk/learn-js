document.querySelector('.grid').addEventListener('click',function(e) {
  if (e.target.tagName === 'IMG') {
    var liNumber = this.querySelectorAll('li').length;
    if (liNumber > 1) {
      var removeTarget = e.target.parentNode;
      removeTarget.parentNode.removeChild(removeTarget);
    } else {
      var title = e.target.alt;
      document.querySelector("#art p").innerHTML = title;
    }
  }
},false);
