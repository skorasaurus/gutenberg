/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	TextControl,
	PanelBody,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
import { withState } from '@wordpress/compose';

const OrderedListSettings = ( { setAttributes, reversed, start } ) => (
	<InspectorControls>
		<PanelBody title={ __( 'Ordered List Settings' ) }>
			<TextControl
				label={ __( 'Start Value' ) }
				type="number"
				onChange={ ( value ) => {
					const int = parseInt( value, 10 );

					setAttributes( {
						// It should be possible to unset the value,
						// e.g. with an empty string.
						start: isNaN( int ) ? undefined : int,
					} );
				} }
				value={ Number.isInteger( start ) ? start.toString( 10 ) : '' }
				step="1"
			/>
			<ToggleControl
				label={ __( 'Reverse List Numbering' ) }
				checked={ reversed || false }
				onChange={ ( value ) => {
					setAttributes( {
						// Unset the attribute if not reversed.
						reversed: value || undefined,
					} );
				} }
			/>
			<selectControl
				label={ __( 'List Type') }
				value={ type ? type : '1' }
				options={ [
					{ label: 'Decimal', value: '1' },
					{ label: 'Lower alpha', value: 'a' },
					{ label: 'Upper alpha', value: 'A' },
					{ label: 'Lower Roman', value: 'i' },
					{ label: 'Upper Roman', value: 'I' },
				] }
				onChange={ ( nextType ) => {
					setAttributes( { type: nextType 
					} );
				} }
			/>
		</PanelBody>
	</InspectorControls> );

export default OrderedListSettings;
