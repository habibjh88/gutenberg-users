<?php

namespace GT\GtUsers\Controllers\Blocks;

use GT\GtUsers\Helpers\Fns;

class CustomUserBlock extends BlockBase {

	private $prefix;
	private $block_type;

	public function __construct() {
		add_action( 'init', [ $this, 'register_blocks' ] );
		$this->prefix     = 'category';
		$this->block_type = 'gtusers/custom-users-block';
	}


	/**
	 * Register Block
	 * @return void
	 */
	public function register_blocks() {
		register_block_type(
			$this->block_type,
			[
				'render_callback' => [ $this, 'render_block' ],
				'attributes'      => $this->get_attributes(),
			]
		);
	}

	/**
	 * Get attributes
	 *
	 * @param bool $default
	 *
	 * @return array
	 */
	public function get_attributes() {

		return [
			'uniqueId' => [
				'type'    => 'string',
				'default' => '',
			],

			'preview' => [
				'type'    => 'boolean',
				'default' => false,
			],

			'prefix' => [
				'type'    => 'string',
				'default' => 'cat',
			],

			'user_limit' => [
				'type'    => 'string',
				'default' => '12',
			],

			'grid_column' => [
				'type'    => 'object',
				'default' => [
					"lg" => 0,
					"md" => 0,
					"sm" => 0,
				],
			],

			'users_lists'           => [
				'type'    => 'array',
				'default' => [],
			],
			'orderby'               => [
				'type'    => 'string',
				'default' => '',
			],
			'order'                 => [
				'type'    => 'string',
				'default' => '',
			],
			'user_filter_by_domain' => [
				'type'    => 'string',
				'default' => '@rgbc.dev',
			],

			'grid_gap' => [
				'type'    => 'object',
				"default" => (object) [
					'lg' => '',
					'md' => '',
					'sm' => '',
				],
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .rt-row {margin-left:-{{cat_gap}};margin-right:-{{cat_gap}}}
						{{GTUSERS}} .rt-row > .cat-item-col {padding-left:{{cat_gap}};padding-right:{{cat_gap}};padding-bottom:{{cat_gap}}}
						'
					]
				]
			],

			'grid_alignment' => [
				'type'    => 'string',
				'default' => '',
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-users-block-wrapper {text-align: {{grid_alignment}}; }'
					]
				]
			],

			'avatar_visibility' => [
				'type'    => 'string',
				'default' => 'yes',
			],

			'name_visibility' => [
				'type'    => 'string',
				'default' => 'show',
			],

			'email_visibility' => [
				'type'    => 'string',
				'default' => 'show',
			],

			'bio_visibility' => [
				'type'    => 'string',
				'default' => 'show',
			],

			'social_visibility' => [
				'type'    => 'string',
				'default' => false,
			],

			//User Avatar Settings
			'avatar_dimension'  => [
				'type'    => 'number',
				'default' => '300',
			],

			'image_link' => [
				'type'    => 'string',
				'default' => 'yes',
			],

			'avatar_width'  => [
				'type'    => 'object',
				"default" => (object) [
					'lg' => '',
					'md' => '',
					'sm' => '',
				],
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-avatar {width: {{avatar_width}}; }'
					]
				]
			],
			'avatar_height' => [
				'type'    => 'object',
				"default" => (object) [
					'lg' => '',
					'md' => '',
					'sm' => '',
				],
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-avatar {height: {{avatar_height}}; }'
					]
				]
			],


			"avatar_border_radius" => [
				"type"    => "object",
				"default" => [
					'lg' => [
						"isLinked" => true,
						"unit"     => "px",
						"value"    => ''
					]
				],
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-avatar a{{avatar_border_radius}}'
					]
				]
			],

			'avatar_border' => [
				'type'    => 'object',
				'default' => (object) [
					'openTpgBorder' => 1,
					'color'         => '',
					'style'         => '',
					'width'         => '',
				],
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-avatar'
					]
				]
			],

			//User Name Settings
			'name_tag'      => [
				'type'    => 'string',
				'default' => 'h3',
			],

			'name_typography' => [
				'type'    => 'object',
				'default' => (object) [
					'openTypography' => 1,
					'size'           => (object) [ 'lg' => '', 'unit' => 'px' ],
					'spacing'        => (object) [ 'lg' => '', 'unit' => 'px' ],
					'height'         => (object) [ 'lg' => '', 'unit' => 'px' ],
					'transform'      => '',
					'weight'         => ''
				],
				'style'   => [
					(object) [ 'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-name' ]
				],
			],

			"name_spacing" => [
				"type"    => "object",
				"default" => [
					'lg' => [
						"isLinked" => false,
						"unit"     => "px",
						"value"    => ''
					]
				],
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-name {{name_spacing}}'
					]
				]
			],

			'name_color' => [
				'type'    => 'string',
				'default' => '',
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-name a {color: {{name_color}}; }'
					]
				]
			],

			'name_color_hover' => [
				'type'    => 'string',
				'default' => '',
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-name a:hover {color: {{name_color_hover}}; }'
					]
				]
			],

			//Email Settings
			'email_typography' => [
				'type'    => 'object',
				'default' => (object) [
					'openTypography' => 1,
					'size'           => (object) [ 'lg' => '', 'unit' => 'px' ],
					'spacing'        => (object) [ 'lg' => '', 'unit' => 'px' ],
					'height'         => (object) [ 'lg' => '', 'unit' => 'px' ],
					'transform'      => '',
					'weight'         => ''
				],
				'style'   => [
					(object) [ 'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-email' ]
				],
			],

			"email_spacing" => [
				"type"    => "object",
				"default" => [
					'lg' => [
						"isLinked" => false,
						"unit"     => "px",
						"value"    => ''
					]
				],
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-email {{email_spacing}}'
					]
				]
			],

			'email_color' => [
				'type'    => 'string',
				'default' => '',
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-email a {color: {{email_color}}; }'
					]
				]
			],

			'email_color_hover' => [
				'type'    => 'string',
				'default' => '',
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-email a:hover {color: {{email_color_hover}}; }'
					]
				]
			],

			//Bio Settings
			'bio_visible_for'   => [
				'type'    => 'string',
				'default' => 'loggedin',
			],

			'show_message_frontend' => [
				'type'    => 'string',
				'default' => 'Please logged in to see the biography...',
			],

			'bio_typography' => [
				'type'    => 'object',
				'default' => (object) [
					'openTypography' => 1,
					'size'           => (object) [ 'lg' => '', 'unit' => 'px' ],
					'spacing'        => (object) [ 'lg' => '', 'unit' => 'px' ],
					'height'         => (object) [ 'lg' => '', 'unit' => 'px' ],
					'transform'      => '',
					'weight'         => ''
				],
				'style'   => [
					(object) [ 'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-biography' ]
				],
			],

			"bio_spacing" => [
				"type"    => "object",
				"default" => [
					'lg' => [
						"isLinked" => false,
						"unit"     => "px",
						"value"    => ''
					]
				],
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-users-block-wrapper .user-biography {{bio_spacing}}'
					]
				]
			],

			'bio_color' => [
				'type'    => 'string',
				'default' => '',
				'style'   => [
					(object) [
						'selector' => '.cub-users-block-wrapper .user-biography {color: {{bio_color}}; }'
					]
				]
			],

			'icon_font_size' => [
				'type'    => 'object',
				"default" => (object) [
					'lg' => '',
					'md' => '',
					'sm' => '',
				],
				'style'   => [
					(object) [
						'selector' => '.cub-user-social-icons a i {font-size:{{icon_font_size}}}'
					]
				]
			],

			"social_spacing" => [
				"type"    => "object",
				"default" => [
					'lg' => [
						"isLinked" => false,
						"unit"     => "px",
						"value"    => ''
					]
				],
				'style'   => [
					(object) [
						'selector' => '.cub-user-social-icons {{social_spacing}}'
					]
				]
			],

			'social_color' => [
				'type'    => 'string',
				'default' => '',
				'style'   => [
					(object) [
						'selector' => '.cub-user-social-icons a i {color: {{social_color}}; }'
					]
				]
			],

			'social_color_hover' => [
				'type'    => 'string',
				'default' => '',
				'style'   => [
					(object) [
						'selector' => '{{GTUSERS}} .cub-user-social-icons a:hover i {color: {{social_color_hover}}; }'
					]
				]
			],

		];

	}

	/**
	 * @return void
	 */
	public function get_script_depends( $data ) {
		wp_enqueue_style( 'gtusers-block' );
		wp_enqueue_script( 'gtusers' );
		wp_enqueue_script( 'rt-magnific-popup' );
	}

	/**
	 * @param array $data
	 *
	 * @return false|string
	 */
	public function render_block( $data ) {
		$this->get_script_depends( $data );

		ob_start();
		if ( ! empty( $data['users_lists'] ) ) {

			$args = [
				'fields' => [ 'ID' ],
				'number' => $data['user_limit'],
			];

			if ( ! empty( $data['orderby'] ) ) {
				$args['orderby'] = $data['orderby'];
			}

			if ( ! empty( $data['order'] ) ) {
				$args['order'] = $data['order'];
			}


			if ( ! empty( $data['user_filter_by_domain'] ) ) {
				$args['search']         = '*' . $data['user_filter_by_domain'];
				$args['search_columns'] = array( 'user_email' );
			}


			$args['include'] = wp_list_pluck( $data['users_lists'], 'value' );


			$user_lists = wp_list_pluck( get_users( $args ), 'ID' );;

			$count_users = count( $user_lists );


			$uniqueId       = isset( $data['uniqueId'] ) ? $data['uniqueId'] : null;
			$wrapper_class  = 'gtusers-block-postgrid gtusers-block-wrapper gtusers-block-' . $uniqueId;
			$wrapper_class  .= $data['image_link'] == 'yes' ? '' : ' no-image-link';
			$data['layout'] = 'user-layout-1';

			?>
			<div class="<?php echo esc_attr( $wrapper_class ) ?>">
				<div class="cub-users-block-wrapper clearfix">
					<?php if ( is_array( $user_lists ) && $count_users > 0 ) { ?>
						<div class="cub-row">
							<?php
							foreach ( $user_lists as $user ) {
								$data['user'] = $user;
								Fns::get_template( $data );
							}
							?>
						</div>
					<?php } else {
						?>
						<div class="not-found-wrap">
							<?php echo esc_html__( "Sorry! The user email domain doesn't match with @rgbc.dev", 'gutenberg-users' ); ?>
						</div>
						<?php
					} ?>
				</div>
			</div>
			<?php
		} else {
			?>
			<div class="not-found-wrap"><?php echo esc_html__( "User not found", 'gutenberg-users' ); ?></div>
			<?php
		}
		do_action( 'tpg_elementor_script' );

		return ob_get_clean();
	}

}