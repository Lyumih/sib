namespace $ {

	export class $sib_user extends $hyoo_crus_entity.with( {
		Username: $hyoo_crus_atom_str,
		Hero: $hyoo_crus_atom_ref_to( () => $sib_hero_model ),
	} ) {
		
	}
}
