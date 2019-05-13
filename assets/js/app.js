// 送信ボタンの取得
let sendBtn = document.getElementById('sendBtn');

// 送信ボタンがクリックされたときの処理
sendBtn.addEventListener('click', function() {
  // 入力欄を取得
  let inputMessage = document.getElementById('inputMessage');

  // 入力値を取得
  let messageText = inputMessage.value;

  // divを作成
  let messageBox = document.createElement('div');

  // 「box-right」というクラスをdivに追加
  messageBox.classList.add('box-right');

  // pタグを作成
  let message = document.createElement('p');

  // pタグのテキストに、画面の入力値を設定
  message.textContent = messageText;

  // pタグに「message-box」というクラスを追加
  message.classList.add('message-box');

  // 「green」というクラスをpに追加
  message.classList.add('green');

  // divにpタグを追加する
  messageBox.appendChild(message);

  // チャット画面である、divタグを取得する
  let room = document.getElementById('room');

  // チャット画面のdivに新規メッセージのdivを追加する
  room.appendChild(messageBox);

  // 入力欄の入力値をリセットする
  inputMessage.value = '';

})