
<?php
	print_r($_GET);

	header('Location: /#'.$_GET['_escaped_fragment_']);
?>