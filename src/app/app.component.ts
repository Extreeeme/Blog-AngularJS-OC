import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: "Boostrap",
      content: "Framework CSS très répandu, solution de facilité ou personnalisation complète ? Reprehenderit ullamco amet sint ea mollit consectetur amet reprehenderit proident id. Sint veniam labore duis et reprehenderit laboris nisi adipisicing qui sunt minim cupidatat laborum pariatur. Nostrud minim esse sunt ut officia reprehenderit deserunt et ea.",
      loveIts: 2,
      created_at: new Date
    },
    {
      title: "Symfony",
      content: "La puissance, l'optimisation et surtout la complexité ! Vous aussi craquez pour ce framework et ne dormez plus des 10 prochaines nuits ! Reprehenderit ullamco amet sint ea mollit consectetur amet reprehenderit proident id. Sint veniam labore duis et reprehenderit laboris nisi adipisicing qui sunt minim cupidatat laborum pariatur. Nostrud minim esse sunt ut officia reprehenderit deserunt et ea.",
      loveIts: 3,
      created_at: new Date
    },
    {
      title: "WordPress",
      content: "Pardon ? Reprehenderit ullamco amet sint ea mollit consectetur amet reprehenderit proident id. Sint veniam labore duis et reprehenderit laboris nisi adipisicing qui sunt minim cupidatat laborum pariatur. Nostrud minim esse sunt ut officia reprehenderit deserunt et ea.",
      loveIts: -2,
      created_at: new Date
    },
    {
      title: "FontAwesome",
      content: "Besoin d'icones ? C'est génial les icones non ? Reprehenderit ullamco amet sint ea mollit consectetur amet reprehenderit proident id. Sint veniam labore duis et reprehenderit laboris nisi adipisicing qui sunt minim cupidatat laborum pariatur. Nostrud minim esse sunt ut officia reprehenderit deserunt et ea.",
      loveIts: 0,
      created_at: new Date
    }
  ];
}
