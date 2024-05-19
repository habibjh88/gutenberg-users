<?php
/**
 * Svg Icons
 *
 * @package USER_GRID
 */

namespace DOWP\UserGrid\Helpers;

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'This script cannot be accessed directly.' );
}

/**
 * SvgIcons Class
 */
class SvgIcons {

	/**
	 * Get SVG icon
	 *
	 * @param $query
	 *
	 * @return string
	 */
	public static function get_svg( $name, $echo = true, $rotate = '' ) {
		$svg_list = apply_filters(
			'dowp_svg_icon_list',
			[
				'user'       => '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21"><path d="M21.6032 19.1499C20.0564 16.4758 17.6727 14.5583 14.8909 13.6493C16.2669 12.8301 17.336 11.582 17.9339 10.0964C18.5319 8.61089 18.6257 6.97014 18.2009 5.42614C17.7761 3.88214 16.8562 2.52027 15.5825 1.54967C14.3088 0.579069 12.7517 0.0534058 11.1504 0.0534058C9.54899 0.0534058 7.9919 0.579069 6.7182 1.54967C5.4445 2.52027 4.52462 3.88214 4.09983 5.42614C3.67504 6.97014 3.76883 8.61089 4.36678 10.0964C4.96474 11.582 6.03381 12.8301 7.40981 13.6493C4.62802 14.5573 2.24434 16.4748 0.697548 19.1499C0.640824 19.2424 0.6032 19.3453 0.586894 19.4526C0.570589 19.5599 0.575933 19.6693 0.602612 19.7745C0.62929 19.8796 0.676762 19.9784 0.742227 20.0649C0.807692 20.1515 0.889824 20.224 0.983776 20.2783C1.07773 20.3325 1.1816 20.3674 1.28926 20.3809C1.39692 20.3944 1.50619 20.3862 1.61062 20.3567C1.71505 20.3273 1.81252 20.2772 1.89729 20.2095C1.98206 20.1418 2.05241 20.0578 2.10419 19.9624C4.01763 16.6555 7.39966 14.6812 11.1504 14.6812C14.9011 14.6812 18.2831 16.6555 20.1965 19.9624C20.2483 20.0578 20.3187 20.1418 20.4034 20.2095C20.4882 20.2772 20.5857 20.3273 20.6901 20.3567C20.7945 20.3862 20.9038 20.3944 21.0115 20.3809C21.1191 20.3674 21.223 20.3325 21.3169 20.2783C21.4109 20.224 21.493 20.1515 21.5585 20.0649C21.624 19.9784 21.6714 19.8796 21.6981 19.7745C21.7248 19.6693 21.7301 19.5599 21.7138 19.4526C21.6975 19.3453 21.6599 19.2424 21.6032 19.1499ZM5.46286 7.36867C5.46286 6.24379 5.79643 5.14417 6.42138 4.20886C7.04633 3.27356 7.93459 2.54458 8.97385 2.1141C10.0131 1.68363 11.1567 1.571 12.2599 1.79045C13.3632 2.00991 14.3766 2.55159 15.172 3.347C15.9674 4.14241 16.5091 5.15583 16.7286 6.25909C16.948 7.36236 16.8354 8.50593 16.4049 9.54518C15.9745 10.5844 15.2455 11.4727 14.3102 12.0977C13.3749 12.7226 12.2752 13.0562 11.1504 13.0562C9.64244 13.0546 8.19674 12.4548 7.13047 11.3886C6.06421 10.3223 5.46447 8.87659 5.46286 7.36867Z"/></svg>',
				'facebook'   => '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" x="0" y="0" viewBox="0 0 408.788 408.788" xml:space="preserve" class=""><g><path d="M353.701 0H55.087C24.665 0 .002 24.662.002 55.085v298.616c0 30.423 24.662 55.085 55.085 55.085h147.275l.251-146.078h-37.951a8.954 8.954 0 0 1-8.954-8.92l-.182-47.087a8.955 8.955 0 0 1 8.955-8.989h37.882v-45.498c0-52.8 32.247-81.55 79.348-81.55h38.65a8.955 8.955 0 0 1 8.955 8.955v39.704a8.955 8.955 0 0 1-8.95 8.955l-23.719.011c-25.615 0-30.575 12.172-30.575 30.035v39.389h56.285c5.363 0 9.524 4.683 8.892 10.009l-5.581 47.087a8.955 8.955 0 0 1-8.892 7.901h-50.453l-.251 146.078h87.631c30.422 0 55.084-24.662 55.084-55.084V55.085C408.786 24.662 384.124 0 353.701 0z" style="" fill="#475993" data-original="#475993" class=""></path></g></svg>',
				'twitter'    => '<svg width="513" height="513" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.5668 0.712891H456.921C487.475 0.712891 512.244 25.4825 512.244 56.0356V457.39C512.244 487.943 487.475 512.713 456.921 512.713H55.5668C25.0138 512.713 0.244141 487.943 0.244141 457.39V56.0356C0.244141 25.4825 25.0138 0.712891 55.5668 0.712891ZM388.587 78.264L388.611 78.2356L430.107 78.2354L299.649 229.884L440.87 435.177H317.028L230.834 309.877L123.266 434.918H81.7617L81.7781 434.899H81.7635L212.39 283.064L71.6172 78.4224H81.8724L81.7635 78.264H185.674L185.783 78.4224H195.459L281.203 203.068L388.567 78.264H388.587Z" fill="black"/><path d="M388.716 412.381H341.43L247.409 277.9V277.892L123.773 101.045H171.059L388.716 412.381Z" fill="black"/></svg>',
				'skype'      => '<svg width="513" height="513" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M70.6561 0.258301H443.02C481.579 0.258301 512.838 31.517 512.838 70.0765V442.44C512.838 481 481.579 512.258 443.02 512.258H70.6561C32.0966 512.258 0.837891 481 0.837891 442.44V70.0765C0.837891 31.517 32.0966 0.258301 70.6561 0.258301ZM396.426 256.398C396.3 265.071 398.917 273.563 403.903 280.66C413.057 293.273 417.606 308.646 416.79 324.209C416.262 334.436 413.435 344.412 408.52 353.395C403.605 362.379 396.728 370.139 388.401 376.098C380.074 382.058 370.51 386.064 360.422 387.818C350.333 389.572 339.978 389.03 330.128 386.231C321.783 383.986 312.945 384.403 304.848 387.424C283.741 395.161 261.078 397.687 238.785 394.789C216.492 391.89 195.229 383.652 176.802 370.774C158.375 357.897 143.33 340.761 132.945 320.822C122.561 300.884 117.143 278.733 117.154 256.253C117.311 247.53 114.693 238.984 109.677 231.846C101.399 220.366 96.8965 206.597 96.7928 192.444C96.6892 178.292 100.99 164.457 109.099 152.858C117.208 141.259 128.724 132.469 142.051 127.706C155.378 122.943 169.857 122.443 183.481 126.275C191.825 128.534 200.667 128.117 208.761 125.082C229.878 117.347 252.551 114.826 274.852 117.735C297.152 120.644 318.42 128.896 336.846 141.79C355.272 154.683 370.312 171.837 380.685 191.791C391.058 211.745 396.459 233.909 396.426 256.398ZM261.91 231.322L256.79 230.071C231.19 223.642 226.914 220.238 226.914 211.249C226.914 202.9 241.226 197.024 256.79 197.46C257.39 197.474 257.991 197.524 258.594 197.574C259.306 197.633 260.022 197.693 260.746 197.693C283.205 199.7 298.245 216.515 298.739 217.155C302.057 221.63 307.016 224.603 312.526 225.422C318.036 226.24 323.646 224.836 328.121 221.518C332.596 218.201 335.57 213.241 336.388 207.731C337.206 202.221 335.802 196.611 332.485 192.137C331.379 190.566 305.168 155.657 260.746 155.657H256.79C190.172 157.344 184.906 199.729 184.906 212.937C184.906 256.253 225.401 265.737 252.223 271.962C253.91 272.34 255.336 272.718 256.819 273.126C284.601 280.253 291.612 286.42 290.652 294.798C289.808 301.838 283.583 310.1 256.819 309.635H254.841C231.219 308.907 214.463 289.678 214.463 289.678C212.76 287.474 210.636 285.63 208.214 284.254C205.792 282.878 203.121 281.998 200.356 281.664C197.59 281.33 194.786 281.55 192.106 282.31C189.427 283.07 186.925 284.356 184.747 286.092C182.569 287.829 180.758 289.981 179.419 292.424C178.081 294.867 177.242 297.551 176.951 300.322C176.66 303.092 176.922 305.892 177.724 308.56C178.525 311.228 179.849 313.709 181.619 315.86C182.783 317.315 210.681 351.671 254.841 351.671H256.819C270.725 351.613 286.579 350.537 300.63 344.486C321.255 335.758 332.63 318.129 332.63 295.031C332.63 248.137 290.07 238.013 261.91 231.322Z" fill="#00A9F0"/></svg>',
				'linkedin'   => '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" x="0" y="0" viewBox="0 0 382 382" xml:space="preserve" class=""><g><path d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 0 1-9.246 9.246H286.73a9.247 9.247 0 0 1-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 0 1-9.246 9.246h-44.426a9.247 9.247 0 0 1-9.246-9.246V149.593a9.247 9.247 0 0 1 9.246-9.246h44.426a9.247 9.247 0 0 1 9.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z" style="" fill="#0077b7" data-original="#0077b7" class=""></path></g></svg>',
				'instagram'  => '<svg width="514" height="514" viewBox="0 0 514 514" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.1084 198.936C0.114259 108.065 -0.290038 71.1219 33.5088 36.0155C68.9785 -0.762819 107.714 -0.439577 243.35 0.692259H243.361C271.449 0.92761 303.692 1.19617 340.922 1.17859C400.976 1.28308 404.387 1.7782 415.769 3.43054L416.421 3.52527C468.452 11.0126 507.94 47.9833 512.976 112.133C513.657 120.708 513.657 393.583 512.996 401.989C508.261 462.212 473.615 496.751 431.033 507.739C399.141 515.995 116.176 515.995 84.2393 507.781C-3.68555 485.057 -1.57715 398.885 0.745118 303.987V303.966C1.12402 288.488 1.50879 272.777 1.50879 257.072C1.50879 235.505 1.29785 216.252 1.1084 198.953V198.936ZM375.227 160.411C375.227 172.412 365.497 182.141 353.495 182.141C341.493 182.141 331.765 172.412 331.765 160.411C331.765 148.41 341.493 138.681 353.495 138.681C365.497 138.681 375.227 148.41 375.227 160.411ZM333.513 112.703H180.538C141.878 112.703 110.538 144.042 110.538 182.703V329.562C110.538 368.222 141.878 399.562 180.538 399.562H333.513C372.173 399.562 403.513 368.222 403.513 329.562V182.702C403.513 144.042 372.173 112.703 333.513 112.703ZM180.538 72.702C119.787 72.702 70.5381 121.951 70.5381 182.703V329.562C70.5381 390.313 119.787 439.562 180.538 439.562H333.513C394.264 439.562 443.513 390.313 443.513 329.562V182.702C443.513 121.951 394.264 72.702 333.513 72.702H180.538ZM313.545 257.147C313.545 288.513 288.118 313.94 256.752 313.94C225.386 313.94 199.959 288.513 199.959 257.147C199.959 225.782 225.386 200.354 256.752 200.354C288.118 200.354 313.545 225.782 313.545 257.147ZM353.545 257.147C353.545 310.604 310.209 353.94 256.752 353.94C203.295 353.94 159.959 310.604 159.959 257.147C159.959 203.69 203.295 160.354 256.752 160.354C310.209 160.354 353.545 203.69 353.545 257.147Z" fill="#EF4C5D"/></svg>',
				'pinterest'  => '<svg width="513" height="513" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M70.5701 0.606934H442.934C481.493 0.606934 512.752 31.8656 512.752 70.4251V442.789C512.752 481.348 481.493 512.607 442.934 512.607H70.5701C32.0106 512.607 0.751953 481.348 0.751953 442.789V70.4251C0.751953 31.8656 32.0106 0.606934 70.5701 0.606934ZM110.415 203.239C110.415 141.547 162.518 67.586 265.624 67.586C348.522 67.586 403.099 127.559 403.03 191.897C403.03 277.063 355.67 340.714 285.867 340.714C262.394 340.714 240.363 328.032 232.802 313.631C232.802 313.631 220.189 363.672 217.543 373.33C208.578 405.816 183.109 438.303 178.812 443.784C178.595 444.06 178.432 444.268 178.328 444.404C177.988 444.856 177.522 445.198 176.989 445.387C176.456 445.577 175.88 445.606 175.33 445.47C174.781 445.335 174.284 445.041 173.9 444.625C173.517 444.21 173.264 443.691 173.173 443.132C173.14 442.893 173.088 442.537 173.021 442.07C171.858 434.075 166 393.802 173.826 360.648C177.984 342.982 201.767 242.316 201.767 242.316C197.071 231.475 194.728 219.761 194.894 207.948C194.894 175.779 213.556 151.72 236.789 151.72C256.517 151.72 266.071 166.568 266.071 184.336C266.071 197.023 260.913 213.719 255.484 231.29C252.412 241.232 249.253 251.455 246.893 261.391C241.532 284.418 258.544 303.218 281.262 303.218C322.298 303.218 349.999 250.393 349.999 187.773C349.999 140.173 318.071 104.532 259.644 104.532C193.966 104.532 152.723 153.576 152.723 208.566C152.723 227.469 158.325 240.838 167.055 251.149C171.076 255.892 171.66 257.782 170.183 263.247C169.186 267.234 166.78 276.857 165.749 280.672C165.579 281.854 165.127 282.978 164.431 283.95C163.736 284.921 162.817 285.711 161.753 286.253C160.688 286.796 159.509 287.074 158.315 287.066C157.12 287.057 155.945 286.762 154.888 286.205C124.541 273.798 110.415 240.598 110.415 203.239Z" fill="#D50012"/></svg>',
				'tiktok'     => '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" x="0" y="0" viewBox="0 0 512.6 512.6" xml:space="preserve" class=""><g><path d="M457.21 0H55.39C24.8 0 0 24.8 0 55.39v401.82c0 30.59 24.8 55.39 55.39 55.39h401.82c30.59 0 55.39-24.8 55.39-55.39V55.39C512.6 24.8 487.8 0 457.21 0zm-42.79 223.3c-32.45 0-62.52-10.38-87.07-28v127.17c0 63.52-51.67 115.19-115.18 115.19-24.54 0-47.3-7.74-66.01-20.88-29.7-20.85-49.17-55.34-49.17-94.31 0-63.51 51.67-115.18 115.18-115.18 5.27 0 10.44.43 15.52 1.12v63.89c-4.91-1.54-10.11-2.43-15.52-2.43-29.01 0-52.6 23.6-52.6 52.6 0 20.2 11.45 37.75 28.2 46.56 7.3 3.85 15.59 6.05 24.4 6.05 28.34 0 51.45-22.54 52.5-50.63l.1-250.79h62.58c0 5.42.53 10.72 1.48 15.87 4.42 23.85 18.57 44.3 38.17 57.09 13.66 8.9 29.94 14.1 47.42 14.1z" fill="#000000" opacity="1" data-original="#000000" class=""></path></g></svg>',
				'youtube'    => '<svg width="513" height="513" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M209.49 312.728L316.246 261.812C319.457 260.281 319.512 255.729 316.338 254.121L209.584 200.023C206.732 198.578 203.359 200.65 203.359 203.846V308.859C203.359 312.011 206.646 314.084 209.49 312.728Z" fill="#F61C0D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M66.9609 0.26123C30.5098 0.26123 0.960938 29.8105 0.960938 66.2612V446.261C0.960938 482.712 30.5098 512.261 66.9609 512.261H446.961C483.412 512.261 512.961 482.712 512.961 446.261V66.2612C512.961 29.8105 483.412 0.26123 446.961 0.26123H66.9609ZM142.842 118.132H371.08C415.861 118.132 452.162 154.433 452.162 199.213V313.309C452.162 358.089 415.861 394.391 371.08 394.391H142.842C98.0605 394.391 61.7598 358.089 61.7598 313.309V199.213C61.7598 154.433 98.0605 118.132 142.842 118.132Z" fill="#F61C0D"/></svg>',
				'snapchat'   => '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" x="0" y="0" viewBox="0 0 468.339 468.339" xml:space="preserve" class=""><g><path d="M233.962 33.724c62.857.021 115.216 52.351 115.292 115.36.018 14.758.473 28.348 1.306 40.867.514 7.724 6.938 13.448 14.305 13.448 1.085 0 2.19-.124 3.3-.384l19.691-4.616a10.956 10.956 0 0 1 2.51-.291c5.001 0 9.606 3.417 10.729 8.478 1.587 7.152-2.42 14.378-9.35 16.808l-29.89 12.066c-7.546 3.046-11.599 11.259-9.474 19.115 23.98 88.654 90.959 79.434 90.959 90.984 0 14.504-50.485 16.552-55.046 21.114s-.198 26.701-10.389 30.987c-1.921.808-4.65 1.089-7.979 1.089-7.676 0-18.532-1.498-29.974-1.498-9.925 0-20.291 1.127-29.404 5.337-24.176 11.168-47.484 32.028-76.378 32.028s-52.202-20.86-76.378-32.028c-9.115-4.211-19.478-5.337-29.404-5.337-11.441 0-22.299 1.498-29.974 1.498-3.327 0-6.059-.282-7.979-1.089-10.191-4.286-5.828-26.425-10.389-30.987S25 360.062 25 345.558c0-11.551 66.979-2.331 90.959-90.984 2.125-7.855-1.928-16.068-9.475-19.115l-29.89-12.066a14.486 14.486 0 0 1-9.35-16.808c1.123-5.062 5.728-8.479 10.729-8.478.83 0 1.672.094 2.51.291l19.691 4.616c1.11.26 2.215.384 3.3.384 7.366 0 13.791-5.725 14.305-13.448.833-12.519 1.289-26.109 1.307-40.867.076-63.008 52.018-115.337 114.876-115.359m.008-25h-.018c-18.762.006-37.039 3.776-54.321 11.206-16.589 7.131-31.519 17.299-44.375 30.222-12.839 12.906-22.943 27.889-30.031 44.533-7.37 17.307-11.118 35.599-11.141 54.368a642.063 642.063 0 0 1-.57 26.722l-7.326-1.718a36.103 36.103 0 0 0-8.213-.951 36.3 36.3 0 0 0-22.146 7.588c-6.581 5.106-11.196 12.377-12.993 20.474-4.277 19.273 6.365 38.73 24.807 45.572l21.937 8.855c-14.526 44.586-41.311 53.13-59.348 58.885-4.786 1.527-8.92 2.846-12.856 4.799C1.693 327.063 0 340.25 0 345.558c0 10.167 4.812 19.445 13.551 26.124 4.351 3.326 9.741 6.07 16.477 8.389 9.181 3.161 19.824 5.167 28.474 6.775.418 3.205 1.031 6.648 2.064 10.118 4.289 14.411 13.34 20.864 20.178 23.739 6.488 2.729 13.192 3.044 17.67 3.044 4.38 0 9.01-.343 13.912-.706 5.259-.39 10.697-.792 16.062-.792 8.314 0 14.503.992 18.92 3.032 6.065 2.802 12.497 6.58 19.307 10.579 18.958 11.134 40.445 23.754 67.555 23.754s48.596-12.62 67.554-23.754c6.81-4 13.242-7.777 19.308-10.579 4.417-2.041 10.606-3.032 18.92-3.032 5.365 0 10.803.403 16.061.792 4.902.363 9.532.706 13.912.706 4.478 0 11.181-.315 17.67-3.044 6.838-2.875 15.889-9.328 20.178-23.739 1.033-3.47 1.647-6.913 2.064-10.118 8.65-1.609 19.294-3.614 28.474-6.775 6.737-2.319 12.126-5.063 16.477-8.389 8.738-6.679 13.551-15.957 13.551-26.124 0-5.308-1.693-18.495-17.378-26.278-3.936-1.953-8.07-3.272-12.856-4.799-18.037-5.754-44.822-14.299-59.348-58.885l21.936-8.855c18.442-6.842 29.085-26.3 24.808-45.573-1.797-8.097-6.412-15.368-12.993-20.474-6.308-4.893-14.171-7.588-22.142-7.588-2.761 0-5.525.32-8.215.95l-7.327 1.718a641.988 641.988 0 0 1-.57-26.722c-.023-18.784-3.801-37.094-11.23-54.424-7.131-16.636-17.29-31.615-30.194-44.522-12.903-12.906-27.875-23.063-44.498-30.188-17.315-7.421-35.605-11.187-54.362-11.194z" style="" fill="#050505" data-original="#050505"></path></g></svg>',
				'whatsapp'   => '<svg width="513" height="513" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M66.1367 0.719727C29.6855 0.719727 0.136719 30.269 0.136719 66.7197V446.72C0.136719 483.17 29.6855 512.72 66.1367 512.72H446.137C482.588 512.72 512.137 483.17 512.137 446.72V66.7197C512.137 30.269 482.588 0.719727 446.137 0.719727H66.1367ZM259.303 78.4565C162.744 78.4565 84.1885 156.422 84.1885 252.255C84.1885 283.25 92.4834 313.591 108.197 340.145L78.1201 428.866C77.8447 429.677 77.7998 430.548 77.9893 431.383C78.0947 431.848 78.2715 432.29 78.5107 432.697C78.7012 433.022 78.9316 433.324 79.1982 433.596C79.7979 434.208 80.5557 434.641 81.3867 434.847C82.2188 435.053 83.0908 435.025 83.9072 434.765L176.418 405.368C201.734 418.894 230.347 426.033 259.304 426.033C355.853 426.035 434.4 348.077 434.4 252.255C434.4 156.422 355.853 78.4565 259.303 78.4565ZM259.022 378.037C234.188 378.037 210.136 370.866 189.46 357.299C188.936 356.955 188.341 356.731 187.72 356.646C187.098 356.561 186.465 356.616 185.867 356.806L143.631 370.232L157.266 330.006C157.482 329.364 157.542 328.68 157.439 328.01C157.374 327.586 157.245 327.175 157.057 326.792C156.948 326.571 156.82 326.359 156.674 326.159C140.929 304.645 132.606 279.228 132.606 252.65C132.606 183.503 189.315 127.247 259.021 127.247C328.718 127.247 385.422 183.503 385.422 252.65C385.423 321.789 328.72 378.037 259.022 378.037ZM304.77 267.197C306.753 267.279 308.625 267.896 310.381 268.526C314.552 270.027 336.153 280.611 340.813 282.894L340.82 282.898L341.686 283.321C345.091 284.956 347.779 286.247 349.34 288.811C351.617 292.583 350.715 302.979 347.291 312.492C342.944 324.571 323.835 334.473 315.14 335.244L313.864 335.366C311.854 335.563 309.574 335.787 306.727 335.787C299.949 335.787 288.029 334.625 262.858 324.57C236.713 314.125 210.922 291.734 190.232 261.52L190.062 261.27C189.796 260.879 189.606 260.602 189.494 260.452C184.092 253.333 171.51 234.611 171.51 214.784C171.51 192.753 182.055 180.226 188.288 176.296C194.166 172.591 207.461 170.84 209.902 170.737C210.904 170.695 211.286 170.674 211.477 170.664L211.656 170.655L211.749 170.653L211.907 170.653C217.06 170.653 220.767 173.78 223.572 180.495C223.836 181.123 224.599 182.957 225.629 185.436C225.914 186.004 226.19 186.608 226.458 187.248C226.714 187.857 227.483 189.711 228.515 192.192L228.519 192.202C230.812 197.718 234.39 206.328 236.466 211.264C236.702 211.736 237.021 212.412 237.305 213.251C237.725 214.24 238.003 214.883 238.084 215.045C238.767 216.384 240.879 220.53 238.406 225.443L237.875 226.51C236.86 228.566 235.987 230.337 234.026 232.618C233.382 233.369 232.744 234.126 232.115 234.89C231.156 236.043 230.178 237.22 229.231 238.262C228.839 238.694 228.452 239.103 228.074 239.477C227.827 239.724 227.45 240.103 227.149 240.447C226.914 240.717 226.727 240.966 226.686 241.116L226.688 241.125C226.695 241.176 226.741 241.47 227.083 242.052C229.728 246.528 249.016 273.073 274.428 284.111C275.537 284.593 279.203 286.103 279.415 286.103C279.651 286.103 280.046 285.708 280.335 285.378C282.549 282.877 289.712 274.503 292.078 270.986C294.172 267.855 296.858 266.261 300.058 266.261C301.143 266.261 302.191 266.446 303.204 266.716C303.736 266.857 304.258 267.023 304.77 267.197Z" fill="#29A71A"/></svg>',
				'reddit'     => '<svg width="513" height="513" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M66.875 0.333984C30.4238 0.333984 0.875 29.8833 0.875 66.334V446.334C0.875 482.785 30.4238 512.334 66.875 512.334H446.875C483.326 512.334 512.875 482.785 512.875 446.334V66.334C512.875 29.8833 483.326 0.333984 446.875 0.333984H66.875ZM265.302 82.543L265.472 81.8052C266.135 77.9839 269.457 71.1846 277.536 71.5039L359.58 87.9131C364.484 81.6743 371.991 77.4985 380.234 76.6309C397.13 74.583 411.979 86.8706 414.026 103.767C416.074 120.663 403.786 135.511 386.891 137.559C370.58 139.536 356.179 128.154 353.357 112.163L287.33 98.958L268.535 185.889L267.082 192.855C309.578 193.879 351.05 206.679 385.866 230.743C393.546 223.575 403.786 218.967 415.05 218.455C440.139 217.943 460.618 237.399 461.643 261.975C462.154 279.383 452.426 295.255 438.09 302.423C438.603 306.519 438.603 311.127 438.09 315.735C438.09 385.367 357.706 441.175 258.378 441.175C159.05 441.175 78.666 384.855 78.666 315.735C78.1543 311.639 78.1543 307.031 78.666 302.423C74.0586 300.375 69.9619 297.303 66.3779 294.231C47.9463 277.335 47.4346 248.663 64.3301 230.743C81.2266 212.311 109.898 211.799 127.818 228.695C161.91 205.804 201.099 192.643 241.858 190.973L265.302 82.543ZM152.906 293.207C152.906 276.311 166.73 262.487 183.626 262.487C200.522 262.487 214.347 276.311 214.347 293.207C214.347 310.103 200.522 323.927 183.626 323.927C166.73 323.927 152.906 310.103 152.906 293.207ZM332.106 378.199C310.09 394.583 283.466 403.287 256.33 401.751C229.194 402.775 202.059 394.583 180.555 378.199C177.482 374.615 177.994 369.495 181.578 366.423C184.65 363.863 188.746 363.863 192.33 366.423C210.763 379.735 233.29 386.903 256.33 385.879C279.37 386.903 301.898 380.759 320.842 366.935C324.426 363.863 329.546 363.863 333.13 366.935C336.202 370.519 336.202 375.639 333.13 379.223V378.199H332.106ZM326.986 325.463C310.09 325.463 296.267 311.639 296.267 294.743C296.267 277.847 310.09 264.023 326.986 264.023C343.882 264.023 357.706 277.847 357.706 294.743C358.218 311.639 345.418 325.975 328.01 326.487H326.475L326.986 325.463Z" fill="#FF4500"/></svg>',
				'phone'      => '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>',
				'email'      => '<svg width="513" height="513" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.662109 66.7642C0.662109 30.3135 30.2109 0.76416 66.6621 0.76416H446.662C483.113 0.76416 512.662 30.3135 512.662 66.7642V446.764C512.662 483.215 483.113 512.764 446.662 512.764H66.6621C30.2109 512.764 0.662109 483.215 0.662109 446.764V66.7642ZM265.767 296.524C262.794 298.382 259.449 299.125 256.477 299.125C253.504 299.125 250.159 298.382 247.187 296.524L99.2939 206.228V326.251C99.2939 351.891 120.103 372.7 145.743 372.7H367.582C393.222 372.7 414.03 351.891 414.03 326.251V206.228L265.767 296.524ZM145.743 140.828H367.582C389.506 140.828 408.085 156.435 412.544 177.244L256.848 272.371L100.78 177.244C105.239 156.435 123.819 140.828 145.743 140.828Z" fill="#FFC107"/></svg>',
				'share'      => '<svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.72904 2.93333V0L0.595703 5.13333L5.72904 10.2667V7.26C9.3957 7.26 11.9624 8.43333 13.7957 11C13.0624 7.33333 10.8624 3.66667 5.72904 2.93333Z"/></svg>',
				'zalo'       => '<svg width="515" height="513" viewBox="0 0 515 513" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M172.343 439.225C147.403 447.138 122.092 451.109 96.2405 447.369C96.0305 446.983 95.8379 446.586 95.6628 446.171C93.6856 445.245 92.2577 444.203 94.5644 442.119C95.077 441.772 95.5896 441.412 96.1023 441.051L96.1034 441.051C97.1281 440.331 98.1529 439.611 99.1777 438.993C113.567 429.153 127.077 418.387 135.974 402.527C143.333 389.329 142.125 381.688 132.899 371.848C80.9442 316.974 57.9876 251.218 69.4109 173.77C75.8915 129.894 95.0037 92.1538 122.574 59.2758C138.54 40.2333 157.42 24.6848 178.06 11.6177H437.925C474.133 11.6177 503.957 42.6357 503.957 81.5033V370.472C482.362 392.879 456.907 410.815 429.02 423.597C360.216 454.854 290.294 457.169 219.479 431.932C213.335 429.617 206.634 429.269 200.267 431.006C190.884 433.437 181.614 436.331 172.343 439.225ZM77.5387 0.891113C34.8819 0.891113 0.779297 37.2498 0.779297 81.5033V432.279C0.779297 476.532 34.8819 512.891 77.5387 512.891H437.925C480.581 512.891 514.684 476.532 514.684 432.279V81.5033C514.684 37.2498 480.581 0.891113 437.925 0.891113H77.5387ZM288.937 192.515C291.573 188.926 294.319 185.569 298.822 184.643C307.5 182.79 315.628 188.695 315.738 197.956C316.067 221.109 315.957 244.263 315.738 267.416C315.738 273.436 312.003 278.762 306.621 280.498C301.129 282.698 294.868 280.961 291.243 275.983C289.376 273.552 288.607 273.089 285.971 275.289C275.975 283.855 264.662 285.36 252.47 281.193C232.918 274.478 224.9 258.387 222.703 238.822C220.396 217.636 227.097 199.577 245.11 188.463C260.049 179.086 275.207 179.896 288.937 192.515ZM250.053 234.77C250.273 239.864 251.811 244.726 254.666 248.778C260.598 257.113 271.911 258.85 279.93 252.598C281.248 251.556 282.456 250.283 283.554 248.778C289.706 239.98 289.706 225.509 283.554 216.71C280.479 212.195 275.646 209.533 270.483 209.417C258.401 208.607 249.943 218.447 250.053 234.77ZM365.056 235.465C364.177 205.712 382.74 183.485 409.102 182.675C437.111 181.748 457.541 201.545 458.42 230.487C459.299 259.776 442.274 280.498 416.022 283.277C387.353 286.287 364.617 264.406 365.056 235.465ZM392.626 232.686C392.406 238.475 394.054 244.147 397.349 248.894C403.39 257.229 414.704 258.85 422.612 252.367C423.82 251.441 424.809 250.283 425.798 249.125C432.168 240.327 432.168 225.509 425.907 216.71C422.832 212.311 417.999 209.533 412.836 209.417C400.974 208.722 392.626 218.215 392.626 232.686ZM355.39 212.427C355.39 218.408 355.402 224.389 355.414 230.371V230.382C355.439 242.341 355.463 254.3 355.39 266.259C355.5 274.478 349.349 281.309 341.55 281.54C340.232 281.54 338.804 281.424 337.486 281.077C331.994 279.572 327.82 273.436 327.82 266.143V174.108C327.82 172.29 327.808 170.485 327.796 168.685V168.684V168.678C327.771 165.091 327.747 161.521 327.82 157.9C327.93 148.986 333.312 143.198 341.44 143.198C349.788 143.082 355.39 148.87 355.39 158.132C355.463 170.176 355.439 182.272 355.414 194.35C355.402 200.383 355.39 206.411 355.39 212.427ZM161.522 253.408C167.13 253.408 172.625 253.395 178.041 253.382C188.643 253.357 198.942 253.332 209.193 253.408C217.87 253.524 222.593 257.345 223.472 264.638C224.46 273.784 219.408 279.919 209.962 280.035C196.619 280.209 183.338 280.187 170.027 280.165L169.981 280.165C165.555 280.158 161.125 280.151 156.689 280.151C155.211 280.151 153.742 280.17 152.277 280.189H152.274H152.273C148.622 280.236 144.995 280.283 141.311 280.035C134.941 279.688 128.68 278.298 125.604 271.352C122.529 264.406 124.725 258.155 128.899 252.482C145.815 229.792 162.84 206.986 179.865 184.295L179.866 184.294C180.854 182.905 181.843 181.517 182.831 180.243C182.022 178.794 180.974 178.914 179.952 179.032C179.586 179.074 179.224 179.116 178.877 179.086C172.947 179.028 166.99 179.028 161.032 179.028H161.028C155.069 179.028 149.11 179.028 143.179 178.97C140.433 178.97 137.687 178.623 135.05 178.044C128.79 176.539 124.945 169.94 126.373 163.457C127.362 159.058 130.657 155.469 134.831 154.427C137.467 153.733 140.213 153.385 142.959 153.385C162.511 153.27 182.172 153.27 201.723 153.385C205.238 153.27 208.643 153.733 212.048 154.659C219.518 157.321 222.703 164.615 219.737 172.255C217.101 178.854 212.927 184.527 208.753 190.199C194.364 209.533 179.975 228.75 165.586 247.852C164.378 249.357 163.279 250.862 161.522 253.408Z" fill="#0180C7"/> </svg>',
				'googleplus' => '<svg width="513" height="513" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M66.0127 0.388184C29.5615 0.388184 0.0126953 29.9375 0.0126953 66.3882V446.388C0.0126953 482.839 29.5615 512.388 66.0127 512.388H446.013C482.464 512.388 512.013 482.839 512.013 446.388V66.3882C512.013 29.9375 482.464 0.388184 446.013 0.388184H66.0127ZM386.252 205.22H423.554V242.351H460.684V279.652H423.554V316.783H386.252V279.652H349.121V242.351H386.252V205.22ZM302.115 259.356C302.115 332.492 253.079 384.308 179.262 384.308C108.581 384.308 51.3418 327.068 51.3418 256.388C51.3418 185.708 108.581 128.469 179.262 128.469C213.816 128.469 242.607 141.039 264.967 161.967L230.241 195.294C220.81 186.22 204.231 175.577 179.278 175.577C135.649 175.577 100.054 211.719 100.054 256.388C100.054 301.058 135.666 337.182 179.278 337.182C229.9 337.182 248.918 300.716 251.886 282.041H179.278V238.07H300.034C301.245 244.517 302.115 250.981 302.115 259.356Z" fill="#F44336"/></svg>',
			]
		);

		if ( isset( $svg_list[ $name ] ) ) {
			$rotate_style = '';
			if ( $rotate ) {
				$rotate_style = 'style=transform:rotate(' . $rotate . 'deg);';
			}
			$icon = '<span ' . esc_attr( $rotate_style ) . " class='dowp-icon-{$name}'>{$svg_list[ $name ]}</span>";
			if ( $echo ) {
				Fns::print_html_all( $icon );
			} else {
				return $icon;
			}
		}

		return '';
	}
}