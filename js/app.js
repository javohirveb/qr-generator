const wrapper = document.querySelector('.wrapper'),
   qrInput = wrapper.querySelector('.form input'),
   generateBtn = wrapper.querySelector('.form button'),
   qrImg = wrapper.querySelector('.qr-code img')
const download = document.getElementById('download')

const showInformation = () => {
   let qrValue = qrInput.value
   if (!qrValue) return

   generateBtn.innerHTML = 'Generating QR Code...'

   qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
   qrImg.addEventListener('load', () => {
      wrapper.classList.add('active')
      generateBtn.innerHTML = 'Generate QR Code'
   })

   wrapper.classList.add('active')

   download.textContent = "Download"
   download.href = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
   download.download = ""
   download.target = "_blank"
   // console.log(download);
   wrapper.appendChild(download)
}

generateBtn.addEventListener('click', () => {
   showInformation()
})

document.addEventListener('keydown', (e) => {
   if (e.key == "Enter") {
      showInformation()
   }
})

qrInput.addEventListener('keyup', () => {
   if (!qrInput.value) {
      wrapper.classList.remove('active')
   }
})
