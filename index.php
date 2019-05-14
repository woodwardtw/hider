<?php 
/*
Plugin Name: Hider - show only what you want - use this in your URL to hide things by ID ?hide=masthead,secondary,colophon
Plugin URI:  https://github.com/
Description: use this in your URL to hide things by ID ?hide=oneID,twoID,threeID
Version:     1.0
Author:      ALT Lab
Author URI:  http://altlab.vcu.edu
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Domain Path: /languages
Text Domain: my-toolset

*/
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );


add_action('wp_enqueue_scripts', 'prefix_load_scripts');

function prefix_load_scripts() {                           
    $deps = array('jquery');
    $version= '1.0'; 
    $in_footer = true;    
    wp_enqueue_script('hider-main-js', plugin_dir_url( __FILE__) . 'js/hider-main.js', $deps, $version, $in_footer); 
    wp_enqueue_style( 'hider-main-css', plugin_dir_url( __FILE__) . 'css/hider-main.css');
}