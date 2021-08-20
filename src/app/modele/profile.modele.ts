import { Publication } from './publication.modele';
import { Education } from './education.modele';
import { Experience } from './experience.modele';
import { ɵLocaleDataIndex } from "@angular/core";

export class Profile {
     
      id ?: Number ;
	nom ?: String ;
	prenom ?: String ;
      Mot_de_Passe ? : String;
      skills ?: String[]; 
      mail ?: String;
      image ?: Blob[];
      code_postal ?: String;
      pays ?: String;
      ville ?: String;
      Date_naissance ?:  Date ;
      telephone  ?: Number;
      experiences ?: Experience[];
      educations ?: Education[] ;
      Publication ?: Publication[];
}
