function $(selector){
  return document.querySelector(selector);
}
function $$(selector){
  return document.querySelectorAll(selector);
}
$('header .login-window').onclick = function(e){
  e.stopPropagation()
  $('.flip-modal').style.display = 'block';
}
$('.flip-modal').addEventListener('click', function(e){
  e.stopPropagation()
  if(e.target.classList.contains('login')){8
    $('.flip-modal').classList.remove('register')
    $('.flip-modal').classList.add('login')
  }
  if(e.target.classList.contains('register')){
    $('.flip-modal').classList.remove('login')
    $('.flip-modal').classList.add('register')
  }
})
$$('.close')[0].addEventListener('click', function(e){
  e.stopPropagation()
  $('.flip-modal').style.display = 'none';
})
$$('.close')[1].addEventListener('click', function(e){
  e.stopPropagation()
  $('.flip-modal').style.display = 'none';
})
$('.modal-login form').addEventListener('submit', function(e){
  e.preventDefault()
  if(!/^\w{3,10}$/.test($('.modal-login input[name=uersname]').value)){
    $('.modal-login .errormsg').innerText = '用户名需要输入3—10个字符，包括数字字母下划线。'
    return false;
  }
  if(!/^\w{6,18}$/.test($('.modal-login input[name=password]').value)){
    $('.modal-login .errormsg').innerText = '密码需要输入6—18个字符，包括数字字母下划线。'
    return false;
  }
  this.submit();
})
$('.modal-register form').addEventListener('submit', function(e){
  e.preventDefault()
  if(!/^\w{3,10}$/.test($('.modal-register input[name=uersname]').value)){
    $('.modal-register .errormsg').innerText = '用户名需输入3-10个字符，包括字母数字下划线'
    return false
  }
  if(!/^\w{6,18}$/.test($('.modal-register input[name=password]').value)){
    $('.modal-register .errormsg').innerText = '密码需输入6-18个字符，包括字母数字下划线'
    return false
  }
  if($('.modal-register input[name=password]').value !== $('.modal-register input[name=password2]').value){
    $('.modal-register .errormsg').innerText = '两次输入的密码不一致'
    return false
  }
  this.submit()      
})