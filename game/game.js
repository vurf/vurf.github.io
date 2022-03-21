$(document).ready(function() {

	document.addEventListener('contextmenu', event => event.preventDefault());
	document.addEventListener('keydown', event => {
		if (event.which == 8 || event.which == 46) {
			localStorage.setItem("rightCounter", parseInt(0));
			localStorage.setItem("leftCounter", parseInt(0));
			location.reload();
		}
	});
		
	var rightSideAmount = parseInt(localStorage.getItem("rightCounter"));
	var leftSideAmount = parseInt(localStorage.getItem("leftCounter"));
	
	updateCounter();
	
	$("#q1").flip({ axis: 'x'});
	$("#q2").flip({ axis: 'x'});
	$("#q3").flip({ axis: 'x'});
	$("#q4").flip({ axis: 'x'});
	$("#q5").flip({ axis: 'x'});
	$("#q6").flip({ axis: 'x'});

	$("#q1").mousedown(function(event) { 
		$("#q1").flip({ axis: 'x', trigger: 'click' }); 
		switch(event.which) {
			case 1: 
				leftSideAmount += Number($("#q1 #answer span").text());
				break;
			case 3:
				rightSideAmount += Number($("#q1 #answer span").text());
				break;
		}

		updateCounter();
	});
	
	$("#q2").mousedown(function(event) { 
		$("#q2").flip({ axis: 'x', trigger: 'click' }); 
		switch(event.which) {
			case 1: 
				leftSideAmount += Number($("#q2 #answer span").text());
				break;
			case 3:
				rightSideAmount += Number($("#q2 #answer span").text());
				break;
		}

		updateCounter();
	});
	
	$("#q3").mousedown(function(event) { 
		$("#q3").flip({ axis: 'x', trigger: 'click' }); 
		switch(event.which) {
			case 1: 
				leftSideAmount += Number($("#q3 #answer span").text());
				break;
			case 3:
				rightSideAmount += Number($("#q3 #answer span").text());
				break;
		}

		updateCounter();
	});
	
	$("#q4").mousedown(function(event) { 
		$("#q4").flip({ axis: 'x', trigger: 'click' }); 
		switch(event.which) {
			case 1: 
				leftSideAmount += Number($("#q4 #answer span").text());
				break;
			case 3:
				rightSideAmount += Number($("#q4 #answer span").text());
				break;
		}

		updateCounter();
	});
	
	$("#q5").mousedown(function(event) { 
		$("#q5").flip({ axis: 'x', trigger: 'click' }); 
		switch(event.which) {
			case 1: 
				leftSideAmount += Number($("#q5 #answer span").text());
				break;
			case 3:
				rightSideAmount += Number($("#q5 #answer span").text());
				break;
		}

		updateCounter();
	});

	$(".r1").click(function() { $(".r1").toggle(); });
	$(".r2").click(function() { $(".r2").toggle(); });
	$(".r3").click(function() { $(".r3").toggle(); });

	$(".l1").click(function() { $(".l1").toggle(); });
	$(".l2").click(function() { $(".l2").toggle(); });
	$(".l3").click(function() { $(".l3").toggle(); });

	function updateCounter() {
		if (isNaN(rightSideAmount)) {
			rightSideAmount = 0;
		}
		
		if (isNaN(leftSideAmount)) {
			leftSideAmount = 0;
		}
			
		$("#counter-left p").text(parseInt(leftSideAmount));
		$("#counter-right p").text(parseInt(rightSideAmount));
		localStorage.setItem("leftCounter", parseInt(leftSideAmount));
		localStorage.setItem("rightCounter", parseInt(rightSideAmount));
	}
});