function handleFormSubmit (event) {
  event.preventDefault()

  var from = document.getElementById('from').value
  var target_id = document.getElementById('target_id').value
  var message = document.getElementById('message').value

  var mediaRadios = document.getElementsByName('media-radio')
  var mediaRadio = Array.from(mediaRadios).find(media => media.checked).value
  var mediaUrl = ''

  if (mediaRadio === 'insert') {
    mediaUrl = document.getElementById('media-url').value
  }

  var data = {
    from: from,
    target_id: target_id,
    message: message,
    media: mediaUrl
  }

  var xhr = new XMLHttpRequest()
  var url = '/messages'
  xhr.open('post', url, true)
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      document.body.innerHTML = `<pre>${xhr.responseText}</pre>`
    }
  }

  xhr.send(JSON.stringify(data))
}

var form = document.getElementById('create-message-form')
form.addEventListener('submit', handleFormSubmit)
