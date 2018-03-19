	var pattern = Trianglify({
		width: window.innerWidth,
		height: window.innerHeight,
		x_colors: ["#f0f0f0","#E1E1E1","#8D8D8D"],
		cell_size: 150
	});
	document.body.appendChild(pattern.canvas())