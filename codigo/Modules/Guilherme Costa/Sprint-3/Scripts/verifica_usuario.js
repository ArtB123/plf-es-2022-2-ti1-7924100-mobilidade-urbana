//* O arquivo processa as informacoes do usuario ativo (usuarioCorrente).
//* Em seguida, redireciona o 'href' do item de login (menu-horizontal no header) para a aba de login ou perfil,
//* dependendo se existe um usuario ativo ou nao.

import {
  usuarioCorrente,
  usuarioCorrenteJSON,
} from '../../Sprint-2/Scripts/index.js';

var usuario = JSON.parse(sessionStorage.getItem('usuarioCorrente'));

document.body.onload = () => {
  // Se não tiver usuario logado.
  if (typeof usuario.login === 'undefined') {
    document
      .querySelector('#btn_login')
      .setAttribute(
        'href',
        '../HTML/login.html'
      );
    document.querySelector('#btn_login').innerHTML = 'Login';
    // Se tiver usuario logado.
  } else {
    document.querySelector('#btn_login').setAttribute('href','../HTML/perfil.html');
    document.querySelector('#btn_login').innerHTML = usuario.login;
    document.querySelector("#favorito").style.display = "block";
  }
};
