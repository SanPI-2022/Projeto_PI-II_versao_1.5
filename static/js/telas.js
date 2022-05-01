function mudaTela1(){
	    window.location.href = "templates/tela2.html"
	}

	function mudaTela2(){
	    window.location.href = "tela3.html"
	}

	function mudaTela3(){
	    window.location.href = "tela4.html"
	}

	function mudaTela4(){
	    window.location.href = "tela5.html"
	}
	
        function copiarProtocolo() {
		let copiadoProtocolo = document.getElementById("protocolo");
		copiadoProtocolo.select();
		copiadoProtocolo.setSelectionRange(0, 99999);
		
		document.execCommand("copy");
		alert("Copiado protocolo para área de transferência: " + copiadoProtocolo.value);
        }

         function mudaTela5(){
	    window.location.href = "../index.html"
	}

	function mudaTelaN(){
	    window.location.href = "tela2.html"
	}

	function mudaTelaC(){
	    window.location.href = "../index.html"
	}
