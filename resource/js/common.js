const loading = document.createElement('div'),
	counter = document.createElement('counter'),
	counterInterval = setInterval(() => {
		let count = counter.innerHTML
		counter.innerHTML = ++count
	}, 1500)

counter.innerHTML = 0
counter.setAttribute('id', 'counter')
loading.setAttribute('id', 'loading')
loading.appendChild(counter)
document.body.appendChild(loading)

const iframe = document.createElement('iframe')
iframe.src = url
iframe.onload = () => {
	const loading = document.getElementById('loading')
	loading.style.opacity = 0
	setTimeout(() => {
		loading.remove()
	}, 500)
}
document.body.appendChild(iframe)
