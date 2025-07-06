import { Component } from '@angular/core';
import {SOCIAL_LINKS} from '../../../data';

@Component({
  selector: 'app-home',
  standalone:true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  youtubeUrl: string = SOCIAL_LINKS.youtube_MesobHixanat;

}
