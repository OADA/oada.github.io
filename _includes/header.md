<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="cleartype" content="on">    
     <title>{{ site.name }} | {{ page.title }}</title>
	 {% if page.description %}
	 <meta name="description" content="{{page.description}}" />
	 {% else %}
	<meta name="description" content="{{site.description}}" />
	{% endif %}	
	{% if page.categories %}
	<meta name="keywords" content="{{page.categories | join: ','}},{{page.title}}" />
	{% else %}
	<meta name="keywords" content="{{site.keywords | join: ','}},{{page.title}}" />
	{% endif %} 
	 <link type="text/plain" rel="author" href="/humans.txt">
    <link rel="shortcut icon" href="/favicon.png">
	<link href="//fonts.googleapis.com" rel="dns-prefetch">
	<link href="//www.google-analytics.com" rel="dns-prefetch">
	<link href="//code.jquery.com" rel="dns-prefetch">       
	<!-- Fonts -->
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,300italic,700" rel="stylesheet" type="text/css"> 
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">	
    <link rel="stylesheet" href="/css/foundation.min.css">
    <link rel="stylesheet" href="/css/main.min.css">
	<script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min.js"></script>
	 <script>window.Modernizr || document.write('<script src="/js/vendor/modernizr.js"><\/script>')</script>
	<!--[if (gte IE 6)&(lte IE 8)]>
	  <script type="text/javascript" src="js/vendor/selectivizr.min.js"></script>
	  <noscript><link rel="stylesheet" href="/css/lt-ie9.min.css" /></noscript>
	<![endif]-->
  </head>
  <body>
          <!--[if lt IE 8]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->