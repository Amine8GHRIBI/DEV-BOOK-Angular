import { stars } from './stars.modele';
import { commentaire } from './commentaire.modele';
import { Byte } from "@angular/compiler/src/util";

export class Publication{
    id : Number = 0;
    type ? :string;
    
    post : String ="";
    date_publication ?: Date;
    commentaire ?: commentaire;
    stars?: stars[];

    
}