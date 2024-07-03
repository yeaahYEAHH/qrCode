const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Настройка CORS
app.use(cors());

app.use(express.json());

let data = { message: "Мухаметдинов Рамиль Ильшатович|118634 0147898|26.06.2024|Профильный уровень|09.02.07 Информационны системы и программирование КОД 09.02.07-2-2024|результат 5 из 5 баллов" };

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.post('/api/data', (req, res) => {
  data = req.body;
  res.json({ status: 'success', data });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

	<script>
		async function fetchData() {
			const response = await fetch('http://localhost:3000/api/data');
			const data = await response.json();
			document.getElementById('data').innerText = JSON.stringify(data);
		}

		async function sendData() {
			const message = document.getElementById('message').value;
			const response = await fetch('http://localhost:3000/api/data', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ message }),
			});
			const result = await response.json();
			document.getElementById('result').innerText = JSON.stringify(result);
		}

		window.onload = fetchData;
	</script>

  <!-- <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<div class="" id="imgBox">
		<img src="" alt="" id="qrImage">
		<button onclick="generateQr()">Test</button>
	</div>

	<script>
		let imgBox = document.getElementById('imgBox'),
			qrImage = document.getElementById('qrImage'),
			qrText = 'Мухаметдинов Рамиль Ильшатович|118634 0147898|26.06.2024|Профильный уровень|09.02.07 Информационны системы и программирование КОД 09.02.07-2-2024|результат 5 из 5 баллов';

		function generateQr(){
			qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`
		}
	</script>
</body>
</html> -->
