<?php

if (isset($_POST['submit'])) {
	
	$error = 0;
	$retval = '';
	
	foreach($_POST as $field => $value) {
		if ($value == '') {
			$retval .= "<p>Please fill in the <strong>$field</strong> field!</p>";
			$error = 1;
		}
	}
	
	if ($error == 0) {
		$to = 'balancerockmedia@gmail.com';
		$subject = 'Class Contact Form';

		$message = "Name: " . $name . "\n\n";
		$message .= "Email: " . $_POST['email'] . "\n\n";
		$message .= "Phone: " . $_POST['phone'] . "\n\n";
		$message .= "Area of Interest: " . $_POST['interest'] . "\n\n";
		$message .= "Comments: " . $_POST['comments'];

		$headers = "From: ". $_POST['email'];

		if (mail($to, $subject, $message, $headers)) {
			$retval = '<h3>Thank you! We will be in touch shortly...</h3>';
		} else {
			$retval = '<h3>There was an error with your email!</h3>';
		}
	}
}

?>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title></title>
<style type="text/css">

strong { font-weight: bold; }

/* structure */
#container { width: 300px; margin: 20px auto; }
div.error { border: 2px solid red; background: #FCECEC; padding: 10px 10px; width: 300px; }

/* headers */
h3 { font: 16px arial; color: #333; }
div.error h3 { font: 18px arial; color: red; margin: 0 0 10px; }

/* paragraphs */
div.error p { font: 14px arial; color: #333; margin: 5px 0 0; }

/* forms */
form label { font: 14px arial; color: #5277a3; font-weight: bold; display: block; margin-bottom: 2px; }
form textarea { width: 300px; height: 100px; border: 1px solid #999; background: #fff; padding: 6px; border-radius: 6px; }
form input[type="text"] { width: 200px; border: 1px solid #999; background: #fff; padding: 6px; border-radius: 6px; }
select { width: 212px; }
input[type="submit"] { border: none; background: #5277a3; padding: 6px 12px; border-radius: 6px; color: #ffffff; cursor: pointer; }

</style>
<script type="text/javascript">

function validate() {
	if (!document.getElementById('contact_form')) return;
	
	var fields = ['name', 'email', 'phone', 'comments'];
	
	for (i=0; i<fields.length; i++) {
		document.getElementById(fields[i]).onfocus = function() {
			this.style.borderColor = "#999";
		}
	}
	
	document.getElementById('contact_form').onsubmit = function() {
		var error = 0;
		
		for (i=0; i<fields.length; i++) {
			if (document.getElementById(fields[i]).value == '') {
				document.getElementById(fields[i]).style.borderColor = "red";
				error = 1;
			}
		}
		
		if (error == 1) {
			alert('Oops! Please fill out the highlighted fields and try again...');
			return false;
		} else {
			return true;
		}
	}
}

// window.onload = validate;

</script>
</head>
<body>

<div id="container">
	<?php if (!empty($retval) && $error == 1): ?>
    	<div class="error">
    		<h3>Oops, something wasn't right!</h3>
    		<?php echo $retval; ?>
    	</div>
	<?php else: ?>
		<?php echo (isset($retval)) ? $retval : ''; ?>
	<?php endif; ?>
		
	<form id="contact_form" method="post" action="">
		<p><label for="name">Name: </label>
		<input id="name" name="name" type="text" /></p>
		
		<p><label for="email">Email: </label>
		<input id="email" name="email" type="text" /></p>
		
		<p><label for="phone">Phone: </label>
		<input id="phone" name="phone" type="text" /></p>
		
		<p><label for="interest">Area of Interest: </label>
		<select id="interest" name="interest">
			<option value="null">Select One</option>
			<option value="Web Design">Web Design</option>
			<option value="Web Development">Web Development</option>
			<option value="Print Design">Print Design</option>
		</select></p>
		
		<p><label for="comments">Comments: </label>
		<textarea id="comments" name="comments" rows="" cols=""></textarea></p>

		<p><input type="submit" id="submit" name="submit" value="Submit" /></p>
	</form>
</div>

</body>
</html>