
	let cel = document.getElementById('cel');
	let fah = document.getElementById('fah');

	cel.oninput = function () {
		let f = (parseFloat(cel.value) * 9) / 5 + 32;
		fah.value = parseFloat(f.toFixed(2));

  }
	fah.oninput = function () {
		let c = ((parseFloat(
			fah.value) - 32) * 5) / 9;
		cel.value = parseFloat(c.toFixed(2));


	}
