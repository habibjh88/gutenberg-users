<?php
/**
 * Elementor Controller class.
 *
 * @package RT_TPG
 */

namespace GT\GtUsers\Controllers;

use GT\GtUsers\Helpers\Fns;

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}

class GutenBergController {
	function __construct() {
		add_action('enqueue_block_assets', array($this, 'block_assets'));
		add_action('enqueue_block_editor_assets', array($this, 'block_editor_assets'));
		if(function_exists('register_block_type')) {
			register_block_type('gtusers/post-grid', array(
				'render_callback' => array($this,'render_shortcode'),
			));
		}
	}

	static function render_shortcode( $atts ){
		if(!empty($atts['gridId']) && $id = absint($atts['gridId'])){
			//return do_shortcode( '[the-post-grid id="' . $id . '"]' );
			ob_start();
			echo do_shortcode( '[the-post-grid id="' . $id . '"]' );
			return ob_get_clean();
		}
	}


	function block_assets() {
		wp_enqueue_style('wp-blocks');
	}

	function block_editor_assets() {
		// Scripts.
		wp_enqueue_script(
			'gtusers-cgb-block-js',
			gtUsers()->get_assets_uri('js/post-grid-blocks.js'),
			array('wp-blocks', 'wp-i18n', 'wp-element'),
			(defined('WP_DEBUG') && WP_DEBUG) ? time() : GT_USERS_VERSION,
			true
		);
		wp_localize_script('gtusers-cgb-block-js', 'gtusersGB', array(
			'short_codes' => Fns::getAllTPGShortCodeList(),
			'icon' => gtUsers()->get_assets_uri('images/icon-16x16.png'),
		));
		wp_enqueue_style('wp-edit-blocks');
	}
}