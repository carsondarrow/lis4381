<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Using RSS Feeds</title>
	</head>
<body>
	<?php

	$html = "";
	$publisher = "BBC";
	$url = "http://feeds.bbci.co.uk/news/technology/rss.xml";

	$html .='<h2>' .$publisher .'</h2>';
	$html .=$url;

	$rss = simplexml_load_file($url);
	$count = 0;
	$html .='<ul>';
	foreach($rss->channel->item as $item)
	{
		$count++;
		if($count > 10)
		{
			break;
		}
		$html .='<li><a href="' . htmlspecialchars($item->link). '">'.htmlspecialchars($item->title).'</a><br/>';
		$html .= htmlspecialchars($item->description).'<br/><br/>';
		$html .= htmlspecialchars($item->pubDate).'<br/>';
	}
	$html .= '</ul>';

	print $html;
?>

</body>
</html>