function generatePDF() {
    const element = document.getElementById("input_value").value;
	console.log(element);
	
	var final_output="My Name is :" + element;
	console.log(final_output);
	


    html2pdf()
    .from(final_output)
    .save();
  

  }