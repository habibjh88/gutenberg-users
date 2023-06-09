<?php
/**
 * Install Helper class.
 *
 * @package GT_USERS
 */

namespace GT\GtUsers\Helpers;

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}

/**
 * Install Helper class.
 */
class Install {
	public static function activate() {
		update_option( gtUsers()->options['installed_version'], GT_USERS_VERSION );
	}

	public static function deactivate() {
		update_option( 'gtusers_flush_rewrite_rules', 0 );
	}
}
