<!doctype html>  

<!--[if IEMobile 7]><html <?php language_attributes(); ?> class="no-js iem7"><![endif]-->
<!--[if (gt IEMobile 7)|!(IEMobile)]><html <?php language_attributes(); ?> class="no-js"><![endif]-->
<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7 oldie"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 oldie"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><html <?php language_attributes(); ?> class="no-js"><![endif]-->
	
	<head>
		<meta charset="utf-8">
		
		<title><?php wp_title('@',true,'right'); bloginfo('title'); ?></title>
		<meta name="description" content="Blog of Aravind Pedapudi">
		<meta name="author" content="Aravind Pedapudi">
		
		<meta property="og:site_name" content="Aravind Pedapudi's blog"/>
		
		<meta name="keywords" content="programming, MATLAB, python, javascript, web designer, geek, pedapudi, arawind.renge, arawind.ren, arawind">
		<!-- Google Chrome Frame for IE -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		
		<!-- mobile meta (hooray!) -->
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		
		<!-- icons & favicons (for more: http://themble.com/support/adding-icons-favicons/) -->
		<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
				
  		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
		<link href='http://fonts.googleapis.com/css?family=Satisfy|Ruluko' rel='stylesheet' type='text/css'>
        <link href="<?php echo get_template_directory_uri(); ?>/css/main.css" rel="stylesheet" type="text/css">
		<!-- wordpress head functions -->
		<?php wp_head(); ?>
		<!-- end of wordpress head -->
			
		<!-- drop Google Analytics Here -->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-31611306-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
		<!-- end analytics -->
		
	</head>
	
	<body <?php body_class(); ?>>
	
		<div id="container">
			
			<header class="header" role="banner">
			
				<div id="inner-header" class="wrap clearfix">
					
					<!-- to use a image just replace the bloginfo('name') with your img src and remove the surrounding <p> -->
					<h1 id="logo" class="h1"><a href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo('name'); ?></a></h1>
					
					<!-- if you'd like to use the site description you can un-comment it below -->
					<p id="description"><?php bloginfo('description'); ?></p>
					
					
					<nav role="navigation">
						<?php bones_main_nav(); // Adjust using Menus in Wordpress Admin ?>
					</nav>
				
				</div> <!-- end #inner-header -->
			
			</header> <!-- end header -->